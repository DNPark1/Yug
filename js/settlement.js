// Краткая справка использует все записи выбранной зоны, независимо от слоёв карты.
const regionalCenters = {
  krasnodar: "Краснодар", crimea: "Симферополь", astrakhan: "Астрахань",
  rostov: "Ростов-на-Дону", volgograd: "Волгоград", adygea: "Майкоп",
  sevastopol: "Севастополь", kalmykia: "Элиста",
};
function profileLink(label, url) {
  const link = document.createElement("a");
  link.href = url;
  link.textContent = label;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  return link;
}
function profileText(box, text) {
  const line = document.createElement("p");
  line.textContent = text;
  box.append(line);
  return line;
}
const localObservations = new Map();
let profileRequest;
function describeObservations(elements) {
  const roads = elements.filter(p => p.type === "way" && p.tags?.highway);
  const surfaces = { asphalt: "асфальт", concrete: "бетон", paved: "твёрдое покрытие",
    paving_stones: "брусчатка", gravel: "гравий", fine_gravel: "мелкий гравий",
    compacted: "уплотнённая смесь", ground: "грунт", dirt: "грунт", unpaved: "без твёрдого покрытия" };
  const grades = {excellent:"отличная",good:"хорошая",intermediate:"средняя",bad:"плохая",
    very_bad:"очень плохая",horrible:"труднопроезжая",very_horrible:"крайне труднопроезжая",impassable:"непроезжая"};
  function distribution(tag, labels) {
    const counts = new Map();
    let tagged = 0;
    for (const road of roads) {
      const raw = road.tags[tag];
      if (!raw) continue;
      tagged++;
      const label = labels[raw] || raw;
      counts.set(label, (counts.get(label) || 0) + 1);
    }
    if (!tagged) return "отметок в выборке нет";
    const summary = [...counts].sort((a,b) => b[1]-a[1]).map(([label,n]) => label+" — "+n);
    return tagged + " из " + roads.length + " участков (" + summary.join(", ") + ")";
  }
  const services = [["parking","парковки"],["toilets","туалеты"],["drinking_water","питьевая вода"]];
  return [
    "Покрытие: " + distribution("surface", surfaces) + ".",
    "Ровность по отметкам участников карты: " + distribution("smoothness", grades) + ".",
    "Отмеченные объекты: " + services.map(([key,label]) =>
      label + " — " + elements.filter(p => p.tags?.amenity === key).length).join(", ") + ".",
  ];
}
function showSettlement(region, city, nearby) {
  const card = document.getElementById("settlement");
  if (card.dataset.place === (city ? region.id + "|" + city.name : "")) return;
  profileRequest?.abort();
  card.dataset.place = city ? region.id + "|" + city.name : "";
  card.hidden = !city;
  if (!city) return;
  const get = id => document.getElementById("settlement-" + id);
  const data = SETTLEMENT_DATA[region.id][city.name];
  const center = new maplibregl.LngLat(city.lng, city.lat);
  const capital = CITIES[region.id].find(p => p.name === regionalCenters[region.id]);
  const distance = p => center.distanceTo(new maplibregl.LngLat(p.lng, p.lat)) / 1000;
  get("title").textContent = city.name;
  const about = [data.type, region.name];
  if (city === capital) about.push(region.id === "sevastopol" ? "город федерального значения" : "региональный центр");
  else about.push(Math.round(distance(capital)) + " км по прямой до центра региона (" + capital.name + ")");
  if (data.population) about.push("население — " + data.population.toLocaleString("ru-RU") + " чел. (" + data.year + ")");
  get("about").textContent = about.join(" · ") + ". ";
  if (data.source) get("about").append(profileLink("Справка о населённом пункте", data.source));

  const road = get("road");
  road.replaceChildren();
  const kmToRoute = data.majorRoadKm;
  profileText(road, "До ближайшей магистрали на обзорной карте — " + (kmToRoute === 0 ? "менее 1 км" : "около " + kmToRoute + " км") + " по прямой от центра (слой OpenStreetMap).");
  if (data.road) profileText(road, data.road.text + " ").append(profileLink("Источник о дорогах", data.road.url));
  else profileText(road, "В подборке нет местного отчёта о ремонте дорог.");
  profileText(road, "Для заезда гостей важен последний участок пути до площадки, в том числе после дождя. ");
  road.lastElementChild.append(profileLink("Посмотреть подъезды на карте", "https://www.openstreetmap.org/#map=15/"+city.lat+"/"+city.lng));

  const environment = get("environment");
  environment.replaceChildren();
  if (data.quality) profileText(environment, "Индекс качества городской среды за 2024 год — " + data.quality.score + " из 360 баллов. ").append(profileLink("Источник оценки",data.quality.url));
  if (data.environment) profileText(environment, data.environment.text + " ").append(profileLink("Публикация о благоустройстве", data.environment.url));
  else if (!data.quality) profileText(environment, "Отдельного отчёта о благоустройстве в подборке нет.");
  const counts = {hotel:0, base:0, spring:0, park:0};
  for (const p of nearby) counts[p.type]++;
  profileText(environment, "В каталоге по региону в пределах 25 км: средства размещения — "+counts.hotel+
    ", базы и кемпинги — "+counts.base+", термальные источники — "+counts.spring+", охраняемые территории — "+counts.park+".");
  const tourism = get("tourism");
  tourism.replaceChildren();
  if (data.tourism) profileText(tourism,data.tourism.text + " ").append(profileLink(data.tourism.label, data.tourism.url));
  else {
    profileText(tourism,"В атласе нет отдельной оценки турпотока для этого населённого пункта. Для оценки местного спроса запросите число гостей и ночёвок по месяцам у муниципалитета.");
    const est = region.estimates[0];
    if (est) profileText(tourism, "По региону «"+region.name+"» за "+region.period+" год — "+
      est.value.toLocaleString("ru-RU")+" "+est.unit+". ").append(profileLink(est.who,est.url));
    else profileText(tourism,"По Республике Калмыкия в 2025 году — около 126 тыс. посетителей. ").append(
      profileLink("Правительство Калмыкии","https://rutube.ru/channel/33309513/shorts/"));
  }
  const advice = get("project");
  advice.replaceChildren();
  const bases = nearby.filter(p=>p.type==="base" && !/без названия/i.test(p.name));
  const nearest = bases.reduce((best,p)=> !best || distance(p)<distance(best) ? p : best,null);
  if (nearest) {
    const km = distance(nearest);
    profileText(advice,"Для сравнения размещения: "+nearest.name+" ("+(km<1?"менее 1":Math.round(km))+
      " км по прямой). Уточните цены и загрузку в будни и выходные. ").append(profileLink("Карточка объекта", nearest.source || "https://www.openstreetmap.org/#map=17/"+nearest.lat+"/"+nearest.lng));
  } else profileText(advice,"Для глэмпинга или базы запросите у местных операторов загрузку по месяцам и условия подключения воды и электричества.");
  profileText(advice,counts.park
    ? "Для экотропы сверьте границы охраняемых территорий у выбранного участка и согласуйте маршрут с управляющей организацией."
    : "Для экотропы проверьте границы участка и режим использования земли, затем обследуйте точки входа и подход от парковки.");
  const detail = get("detail");
  detail.open = false;
  const output = get("observations"), button = get("load"), key = card.dataset.place;
  output.replaceChildren();
  const display = lines => {
    output.replaceChildren();
    lines.forEach(line=>profileText(output,line));
    button.hidden = true;
  };
  button.disabled = false;
  button.hidden = false;
  button.textContent = "Проверить дороги и сервисы в OpenStreetMap";
  if (localObservations.has(key)) display(localObservations.get(key));
  button.onclick = async () => {
    const controller = new AbortController();
    profileRequest = controller;
    const timeout = setTimeout(()=>controller.abort(), 22000);
    button.disabled = true;
    output.textContent = "Загружаем отметки в радиусе 1 км…";
    try {
      const area = "(around:1000,"+city.lat+","+city.lng+")";
      const query = '[out:json][timeout:15];(way["highway"~"^(motorway|trunk|primary|secondary|tertiary|unclassified|residential|living_street|service|track)(_link)?$"]'+area+
        ';nwr["amenity"~"^(parking|toilets|drinking_water)$"]'+area+';);out tags;';
      const response = await fetch("https://overpass-api.de/api/interpreter?data="+encodeURIComponent(query), {signal:controller.signal});
      if (!response.ok) throw new Error("HTTP");
      const data = await response.json();
      if (data.remark || !Array.isArray(data.elements)) throw new Error("Incomplete");
      if (profileRequest !== controller || card.dataset.place !== key) return;
      const lines = describeObservations(data.elements);
      const date = data.osm3s?.timestamp_osm_base?.slice(0,10);
      if (date) lines.push("Срез OpenStreetMap на "+date+". Дата последнего осмотра участков может отличаться.");
      localObservations.set(key,lines);
      display(lines);
    } catch {
      if (profileRequest !== controller || card.dataset.place !== key) return;
      output.textContent = "Не удалось загрузить отметки OpenStreetMap. Проверьте соединение или попробуйте позже.";
      button.disabled = false;
    } finally { clearTimeout(timeout); }
  };
}

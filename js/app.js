"use strict";
const el = (id) => document.getElementById(id);
// Подпись, значок и цвет для каждого слоя карты.
const kinds = {
  hotel: ["Отели и другие средства размещения", "▦", "#7758cf"],
  base: ["Базы отдыха и кемпинги", "⌂", "#dc7b3c"],
  spring: ["Термальные источники", "≈", "#258aba"],
  park: ["Охраняемые территории", "♠", "#308857"],
};
const icon = (key, pin = false) =>
  '<span aria-hidden="true" class="symbol ' +
  (pin ? "placepin" : "") +
  '" style="--color:' +
  kinds[key][2] +
  '">' +
  kinds[key][1] +
  "</span>";
const regionSelect = el("region");
const citySelect = el("city");
regionSelect.add(new Option("Все регионы", ""));
REGIONS.forEach((r) => regionSelect.add(new Option(r.name, r.id)));
for (const [key, [title]] of Object.entries(kinds)) {
  el("layers").insertAdjacentHTML(
    "beforeend",
    '<label class="layer">' +
      icon(key) +
      title +
      '<input type="checkbox" checked value="' +
      key +
      '"></label>',
  );
}
function updateCities() {
  citySelect.disabled = !regionSelect.value;
  citySelect.replaceChildren(new Option(regionSelect.value ? "Весь регион" : "Все населённые пункты", ""));
  if (!regionSelect.value) return;
  CITIES[regionSelect.value].forEach(({ name }) =>
    citySelect.add(new Option(name, name)),
  );
}
const number = (value) => value.toLocaleString("ru-RU");
// Сначала отбираем точки региона, затем применяем радиус города и выбранные слои.
function placeCard(place) {
  const card = document.createElement("div");
  const title = document.createElement("strong");
  title.textContent = place.name;
  const note = document.createElement("p");
  note.textContent = place.locationNote || kinds[place.type][0];
  const position = document.createElement("p");
  position.textContent = place.lat.toFixed(6) + ", " + place.lng.toFixed(6);
  card.append(title, note, position);
  const mapLink =
    "https://www.openstreetmap.org/?mlat=" +
    place.lat +
    "&mlon=" +
    place.lng +
    "#map=17/" +
    place.lat +
    "/" +
    place.lng;
  for (const [label, url] of [
    ["Точка на OpenStreetMap ↗", mapLink],
    ["Источник положения ↗", place.source],
  ]) {
    if (!url || !/^https?:\/\//i.test(url)) continue;
    const a = document.createElement("a");
    a.textContent = label;
    a.href = url;
    a.target = "_blank";
    a.rel = "noopener";
    card.append(a, document.createElement("br"));
  }
  return card;
}

let catalogPlaces = [];
function drawCatalog() {
  const list = el("catalog-list");
  list.replaceChildren();
  const query = el("catalog-query").value.trim().toLocaleLowerCase("ru");
  const matches = catalogPlaces.filter((p) =>
    (p.name + " " + (p.locationNote || ""))
      .toLocaleLowerCase("ru")
      .includes(query),
  );
  let start = 0;
  function appendBatch() {
    const batch = matches.slice(start, start + 80);
    for (const place of batch) {
      const button = document.createElement("button");
      button.className = "listbtn";
      button.innerHTML = icon(place.type);
      button.append(document.createTextNode(place.name));
      button.disabled = !map;
      button.onclick = () => showPlace(place, true);
      list.append(button);
    }
    start += batch.length;
    if (start < matches.length) {
      const more = document.createElement("button");
      more.className = "listbtn";
      more.textContent = "Показать ещё · осталось " + (matches.length - start);
      more.onclick = () => {
        more.remove();
        appendBatch();
      };
      list.append(more);
    }
  }
  appendBatch();
  if (query && !matches.length)
    list.textContent = "По этому запросу ничего не найдено.";
}
el("catalog-query").oninput = drawCatalog;
function render(zoom = true) {
  const r = REGIONS.find((x) => x.id === regionSelect.value);
  const cities = r ? CITIES[r.id] : Object.values(CITIES).flat();
  const city = cities.find((city) => city.name === citySelect.value);
  const center = city && new maplibregl.LngLat(city.lng, city.lat);
  const parks = OOPT.filter(
    (p) =>
      !r || p.region.includes(r.name) ||
      (r.id === "adygea" && p.region.includes("Адыгея")),
  ).map((p) => ({ ...p, type: "park" }));
  const candidates = [
    ...PLACES.filter((p) => !r || p.region === r.id),
    ...parks,
    ...OSM_PLACES.filter((p) => !r || p.region === r.id),
  ];
  const regional = candidates.filter(
    (p) => Number.isFinite(p.lat) && Number.isFinite(p.lng),
  );
  const nearby = regional.filter(
    (p) =>
      !center ||
      center.distanceTo(new maplibregl.LngLat(p.lng, p.lat)) <=
        CITY_RADIUS_METERS,
  );
  const active = new Set(
    [...document.querySelectorAll("#layers input:checked")].map((x) => x.value),
  );
  const visible = nearby.filter((p) => active.has(p.type));
  el("mapname").textContent = city?.name || r?.name || "Все регионы";
  el("count").textContent =
    "Точек на карте: " +
    visible.length +
    " из " +
    nearby.length +
    " в подборке";
  el("catalog").replaceChildren();
  const list = document.createElement("div");
  list.id = "catalog-list";
  el("catalog").append(list);
  updateMapView(city, [...regional, ...cities], zoom);
  filteredPlaces = visible;
  drawPlaceGroups();
  catalogPlaces = visible;
  el("catalog-query").value = "";
  drawCatalog();
  if (!visible.length)
    list.textContent = nearby.length
      ? "Все доступные слои скрыты."
      : "В подборке нет точек в этой зоне.";
  if (!city) {
    for (const place of candidates.filter(
      (p) => (!Number.isFinite(p.lat) || !Number.isFinite(p.lng)) && active.has(p.type),
    )) {
      const pending = document.createElement("p");
      pending.className = "note";
      pending.textContent = place.name + " — " + place.locationNote;
      el("catalog").append(pending);
    }
  }
  el("catalog").insertAdjacentHTML(
    "beforeend",
    '<p class="note">В карточке указано, к чему относятся координаты. Зелёный контур показывает парки, сады и зоны отдыха по OpenStreetMap. Для проверки участка нужны официальные границы и режим охраны.</p>',
  );
  el("traffic").innerHTML = (r ? [r] : REGIONS).map((region) =>
    "<small>" +
    region.name +
    " · " +
    region.period +
    " год</small>" +
    region.estimates
      .map(
        (e) =>
          '<div class="stats"><div><b>' +
          number(e.value) +
          "</b><br><small>" +
          e.unit +
          '</small></div><a href="' +
          e.url +
          '" target="_blank" rel="noopener">' +
          e.who +
          " ↗</a></div>",
      )
      .join("") +
    '<p class="note">' +
    region.note +
    "</p>" +
    (city
      ? '<p class="note">Отдельной оценки для города в исходных данных нет.</p>'
      : "")
  ).join("");
}
regionSelect.onchange = () => {
  updateCities();
  render();
};
citySelect.onchange = () => render();
el("layers").onchange = () => render(false);
el("reset").onclick = () => {
  regionSelect.selectedIndex = 0;
  el("recreation-toggle").checked = true;
  el("recreation-toggle").dispatchEvent(new Event("change"));
  document.querySelectorAll("#layers input").forEach((i) => (i.checked = true));
  updateCities();
  render();
};
// Постоянные расходы делим на доход с заказа после переменных затрат.
function calculate() {
  const inputs = ["price", "cost", "fixed"].map(el);
  const [price, cost, fixed] = inputs.map((i) => i.valueAsNumber);
  let result = "Введите три суммы для расчёта.";
  if (inputs.some((i) => !i.validity.valid))
    result = "Укажите неотрицательные суммы.";
  else if ([price, cost, fixed].every(Number.isFinite)) {
    if (price > cost)
      result =
        "Заказов в месяц для покрытия затрат: " +
        number(Math.ceil(fixed / (price - cost))) +
        ".";
    else
      result =
        fixed === 0
          ? "При нуле заказов расходы покрыты."
          : "При такой цене заказы не покроют постоянные расходы.";
  }
  el("result").textContent = result;
}
el("calculator").oninput = calculate;
el("calculator").onsubmit = (e) => e.preventDefault();
updateCities();
render();

// MapLibre принимает координаты в порядке [долгота, широта].
// Локальная карта открывается сразу, подробный стиль Liberty загружается из OpenFreeMap.
const DETAIL_STYLE = "https://tiles.openfreemap.org/styles/liberty";
let detailedMap = false;
const CITY_RADIUS_METERS = 25000;
const emptyArea = { type: "FeatureCollection", features: [] };
let selectedArea = emptyArea;
const placeMarkers = [];
const labelMarkers = [];
let openPopup;

function highwayLayers() {
  const colors = ["#d6a650", "#ffda75"];
  return colors.map((color, index) => ({
    id: index === 0 ? "highway-edge" : "highway",
    type: "line",
    source: "majorRoutes",
    layout: { "line-join": "round", "line-cap": "round" },
    paint: {
      "line-color": color,
      "line-width": [
        "interpolate",
        ["linear"],
        ["zoom"],
        4,
        1.7 - index,
        7,
        3.3 - index,
        11,
        7.2 - index * 2,
      ],
    },
  }));
}

// Контуры строятся по площадной геометрии парков, садов и рекреационных зон.
function recreationLayers(vector) {
  const definitions = vector
    ? [
        ["landuse", "class"],
        ["landcover", "subclass"],
      ]
    : [["offline", null]];
  return definitions.map(([layer, field]) => ({
    id: "recreation-" + layer,
    type: "line",
    source: vector ? "openmaptiles" : "recreation",
    ...(vector
      ? {
          "source-layer": layer,
          filter: [
            "all",
            ["==", ["geometry-type"], "Polygon"],
            [
              "in",
              ["get", field],
              ["literal", ["park", "garden", "recreation_ground"]],
            ],
          ],
        }
      : {}),
    layout: {
      "line-join": "round",
      visibility: document.getElementById("recreation-toggle").checked
        ? "visible"
        : "none",
    },
    paint: {
      "line-color": "#188044",
      "line-opacity": 0.9,
      "line-width": ["interpolate", ["linear"], ["zoom"], 8, 1, 13, 2, 17, 3],
    },
  }));
}
function createMap() {
  const sources = {};
  for (const key of ["land", "lakes", "rivers_lake_centerlines"]) {
    sources[key] = { type: "geojson", data: GEOGRAPHY[key] };
  }
  for (const [name, data] of Object.entries(LANDSCAPE)) {
    sources[name] = { type: "geojson", data };
  }
  sources.recreation = { type: "geojson", data: RECREATION };
  sources.regions = { type: "geojson", data: REGION_BOUNDARIES };
  sources.area = { type: "geojson", data: emptyArea };
  const style = {
    version: 8,
    sources,
    layers: [
      {
        id: "water",
        type: "background",
        paint: { "background-color": "#a1cefa" },
      },
      {
        id: "land",
        type: "fill",
        source: "land",
        paint: { "fill-color": "#f6f4ed", "fill-outline-color": "#e1e3d5" },
      },
      {
        id: "urban",
        source: "urban",
        type: "fill",
        paint: { "fill-color": "#e9e5de" },
      },
      {
        id: "parks",
        source: "green",
        type: "fill",
        filter: ["==", ["geometry-type"], "Polygon"],
        paint: { "fill-color": "#c7e5b9", "fill-antialias": false },
      },
      {
        id: "lakes",
        type: "fill",
        source: "lakes",
        paint: { "fill-color": "#a1cefa" },
      },
      {
        id: "rivers",
        type: "line",
        source: "rivers_lake_centerlines",
        paint: { "line-color": "#8ec6f3" },
      },
      // Сначала местные дороги, затем контур и заливка основных трасс.
      {
        id: "local-roads",
        source: "roads",
        type: "line",
        minzoom: 6,
        layout: { "line-join": "round", "line-cap": "round" },
        paint: {
          "line-color": "#ffffff",
          "line-width": [
            "interpolate",
            ["linear"],
            ["zoom"],
            6,
            0.8,
            10,
            3.2,
            12,
            5,
          ],
        },
      },
      ...highwayLayers(),
      ...recreationLayers(false),
      {
        id: "regional-outline",
        type: "line",
        source: "regions",
        paint: {
          "line-color": "#687d78",
          "line-width": 1.2,
          "line-opacity": 0.7,
        },
      },
      {
        id: "city-area",
        type: "fill",
        source: "area",
        paint: { "fill-color": "#4a7cdf", "fill-opacity": 0.05 },
      },
      {
        id: "city-outline",
        type: "line",
        source: "area",
        paint: { "line-color": "#4a7cdf", "line-dasharray": [5, 6] },
      },
    ],
  };
  const [west, south, east, north] = GEOGRAPHY.land.bbox;
  const overviewBounds = [[west, south], [east, north]];
  const detailBounds = [[28, 39], [55, 54]];
  let instance;
  try {
    instance = new maplibregl.Map({
      container: "map",
      style,
      center: [39, 45],
      zoom: 6,
      minZoom: 4,
      maxZoom: 19,
      maxBounds: overviewBounds,
      scrollZoom: true,
      dragRotate: false,
      pitchWithRotate: false,
      maxPitch: 0,
      attributionControl: false,
      locale: {
        "NavigationControl.ZoomIn": "Приблизить",
        "NavigationControl.ZoomOut": "Отдалить",
        "Popup.Close": "Закрыть",
      },
    });
  } catch (error) {
    const message = document.createElement("p");
    message.className = "map-error";
    message.textContent =
      "Для карты требуется WebGL 2. Попробуйте включить аппаратное ускорение в браузере. Объекты доступны в списке ниже.";
    document.getElementById("map").replaceChildren(message);
    return null;
  }
  instance.touchZoomRotate.disableRotation();
  instance.keyboard.disableRotation();
  instance.addControl(
    new maplibregl.NavigationControl({ showCompass: false }),
    "top-right",
  );
  instance.addControl(
    new maplibregl.ScaleControl({ unit: "metric" }),
    "bottom-left",
  );
  instance.addControl(
    new maplibregl.AttributionControl({
      customAttribution:
        'Natural Earth · <a href="https://openfreemap.org/" target="_blank" rel="noopener">OpenFreeMap</a> · <a href="https://openmaptiles.org/" target="_blank" rel="noopener">OpenMapTiles</a> · <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">© OpenStreetMap</a>',
      compact: false,
    }),
  );
  const footer = document.querySelector(".mapfoot");
  const controls = instance.getContainer();
  footer.append(
    controls.querySelector(".maplibregl-ctrl-scale"),
    controls.querySelector(".maplibregl-ctrl-attrib"),
  );
  const toggle = document.getElementById("recreation-toggle");
  function updateRecreation() {
    for (const id of [
      "recreation-offline",
      "recreation-landuse",
      "recreation-landcover",
    ]) {
      if (instance.getLayer(id))
        instance.setLayoutProperty(
          id,
          "visibility",
          toggle.checked ? "visible" : "none",
        );
    }
  }
  toggle.onchange = updateRecreation;
  instance.on("style.load", () => {
    instance.getSource("area")?.setData(selectedArea);
    updateRecreation();
  });
  instance.once("load", async () => {
    try {
      const response = await fetch(DETAIL_STYLE);
      if (!response.ok) throw new Error("style");
      const detail = await response.json();
      // Добавляем только радиус города. Метки и их легенда принадлежат приложению.
      detail.sources.area = { type: "geojson", data: selectedArea };
      const labelIndex = detail.layers.findIndex(
        (layer) => layer.type === "symbol",
      );
      detail.layers.splice(
        labelIndex < 0 ? detail.layers.length : labelIndex,
        0,
        ...recreationLayers(true),
      );
      detail.sources.regions = sources.regions;
      detail.layers.push(
        ...style.layers.filter((layer) =>
          ["regions", "area"].includes(layer.source),
        ),
      );
      detailedMap = true;
      refreshLabels();
      instance.setStyle(detail, { diff: false });
      instance.setMaxBounds(detailBounds);
      instance.on("error", () => {
        if (!detailedMap) return;
        detailedMap = false;
        instance.setMaxBounds(overviewBounds);
        instance.setStyle(style, { diff: false });
        refreshLabels();
        document.getElementById("map-source").textContent =
          "Обзорная карта · подробная карта недоступна";
      });
      document.getElementById("map-source").textContent =
        "OpenFreeMap · OpenStreetMap";
    } catch {
      document.getElementById("map-source").textContent =
        "Обзорная карта · подробная карта недоступна";
    }
  });
  instance.on("zoomend", refreshLabels);
  return instance;
}
const map = createMap();

function refreshLabels() {
  for (const marker of labelMarkers.splice(0)) marker.remove();
  if (detailedMap) return;
  const positions = [];
  function addLabel(name, lat, lng, sea = false) {
    const point = map.project([lng, lat]);
    if (
      positions.some(
        (p) => Math.abs(p.x - point.x) < 80 && Math.abs(p.y - point.y) < 17,
      )
    )
      return;
    const element = document.createElement("span");
    element.className = sea ? "maplabel sea" : "maplabel";
    element.textContent = name;
    const marker = new maplibregl.Marker({
      element,
      anchor: "top-right",
      offset: [5, 3],
    })
      .setLngLat([lng, lat])
      .addTo(map);
    labelMarkers.push(marker);
    positions.push(point);
  }
  for (const cities of Object.values(CITIES)) {
    for (const city of cities) addLabel(city.name, city.lat, city.lng);
  }
  addLabel("Чёрное море", 43.9, 36.6, true);
  addLabel("Азовское море", 46.1, 36.65, true);
  addLabel("Каспийское море", 45.3, 49, true);
}

// Точки окружности получаем по расстоянию и азимуту на сфере.
function cityBoundary(city) {
  const radians = Math.PI / 180;
  const latitude = city.lat * radians;
  const distance = CITY_RADIUS_METERS / 6371008.8;
  const ring = [];
  for (let degrees = 0; degrees < 360; degrees += 5) {
    const bearing = degrees * radians;
    const lat = Math.asin(
      Math.sin(latitude) * Math.cos(distance) +
        Math.cos(latitude) * Math.sin(distance) * Math.cos(bearing),
    );
    const deltaLng = Math.atan2(
      Math.sin(bearing) * Math.sin(distance) * Math.cos(latitude),
      Math.cos(distance) - Math.sin(latitude) * Math.sin(lat),
    );
    ring.push([city.lng + deltaLng / radians, lat / radians]);
  }
  ring.push(ring[0]);
  return ring;
}

function updateMapView(city, regionPoints, zoom) {
  if (!map) return;
  // Фильтры меняют высоту карточки после создания карты.
  map.resize();
  openPopup?.remove();
  for (const marker of placeMarkers.splice(0)) marker.remove();
  const ring = city && cityBoundary(city);
  selectedArea = ring ? { type: "Polygon", coordinates: [ring] } : emptyArea;
  map.getSource("area")?.setData(selectedArea);
  if (zoom) {
    const bounds = new maplibregl.LngLatBounds();
    for (const coordinates of ring || regionPoints.map((p) => [p.lng, p.lat]))
      bounds.extend(coordinates);
    map.fitBounds(bounds, { padding: 32, maxZoom: 10, duration: 0 });
  }
  refreshLabels();
}

function addPlaceMarker(place) {
  const coordinates = [place.lng, place.lat];
  const element = document.createElement("button");
  element.type = "button";
  element.className = "map-pin";
  element.title = place.name;
  element.setAttribute("aria-label", place.name);
  element.innerHTML = icon(place.type, true);
  placeMarkers.push(
    new maplibregl.Marker({ element, anchor: "bottom" })
      .setLngLat(coordinates)
      .addTo(map),
  );
  element.onclick = (event) => {
    event.stopPropagation();
    showPlace(place);
  };
}

function showPlace(place, focus = false) {
  if (!map) return;
  const at = [place.lng, place.lat];
  if (focus) {
    el("map").scrollIntoView({ block: "center" });
    map.jumpTo({ center: at, zoom: Math.max(16, map.getZoom()) });
  }
  openPopup?.remove();
  openPopup = new maplibregl.Popup({ offset: 14 })
    .setLngLat(at)
    .setDOMContent(placeCard(place))
    .addTo(map);
}

// Группируем только точки в текущем окне карты. При приближении видны исходные значки.
let filteredPlaces = [];
function drawPlaceGroups() {
  for (const marker of placeMarkers.splice(0)) marker.remove();
  if (!map) return;
  const bounds = map.getBounds();
  const groups = new Map();
  const groupable = map.getZoom() < 16;
  for (const place of filteredPlaces) {
    const at = [place.lng, place.lat];
    if (!bounds.contains(at)) continue;
    const pixel = map.project(at);
    const key = groupable
      ? Math.floor(pixel.x / 52) + ":" + Math.floor(pixel.y / 52)
      : place;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(place);
  }
  for (const places of groups.values()) {
    if (places.length === 1) {
      addPlaceMarker(places[0]);
      continue;
    }
    const button = document.createElement("button");
    button.className = "map-group";
    button.textContent = places.length;
    button.setAttribute(
      "aria-label",
      "Приблизить группу объектов: " + places.length,
    );
    const box = new maplibregl.LngLatBounds();
    for (const place of places) box.extend([place.lng, place.lat]);
    button.onclick = () =>
      map.fitBounds(box, { padding: 48, maxZoom: 17, duration: 350 });
    placeMarkers.push(
      new maplibregl.Marker({ element: button })
        .setLngLat(box.getCenter())
        .addTo(map),
    );
  }
}
if (map) map.on("moveend", drawPlaceGroups);

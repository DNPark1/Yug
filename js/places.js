// Города сгруппированы по коду региона из regions.js. lat — широта, lng — долгота.
const CITIES = {
  krasnodar: [
    {
      name: "Краснодар",
      lat: 45.035,
      lng: 38.975,
    },
    {
      name: "Сочи",
      lat: 43.585,
      lng: 39.724,
    },
    {
      name: "Анапа",
      lat: 44.895,
      lng: 37.317,
    },
    {
      name: "Геленджик",
      lat: 44.561,
      lng: 38.077,
    },
  ],
  crimea: [
    {
      name: "Ялта",
      lat: 44.495,
      lng: 34.166,
    },
    {
      name: "Феодосия",
      lat: 45.031,
      lng: 35.383,
    },
    {
      name: "Симферополь",
      lat: 44.95,
      lng: 34.1,
    },
  ],
  astrakhan: [
    {
      name: "Астрахань",
      lat: 46.349,
      lng: 48.036,
    },
    {
      name: "Ахтубинск",
      lat: 48.283,
      lng: 46.172,
    },
  ],
  rostov: [
    {
      name: "Ростов-на-Дону",
      lat: 47.222,
      lng: 39.719,
    },
    {
      name: "Таганрог",
      lat: 47.213,
      lng: 38.91,
    },
  ],
  volgograd: [
    {
      name: "Волгоград",
      lat: 48.708,
      lng: 44.514,
    },
    {
      name: "Волжский",
      lat: 48.786,
      lng: 44.77,
    },
  ],
  adygea: [
    {
      name: "Майкоп",
      lat: 44.609,
      lng: 40.101,
    },
    {
      name: "Адыгейск",
      lat: 44.884,
      lng: 39.19,
    },
  ],
  sevastopol: [
    {
      name: "Севастополь",
      lat: 44.616,
      lng: 33.525,
    },
    {
      name: "Инкерман",
      lat: 44.614,
      lng: 33.609,
    },
  ],
  kalmykia: [
    {
      name: "Элиста",
      lat: 46.308,
      lng: 44.269,
    },
    {
      name: "Лагань",
      lat: 45.393,
      lng: 47.371,
    },
  ],
};

// Координаты и источники объектов подборки. Виды: hotel, base, spring.
const PLACES = [
  {
    region: "krasnodar",
    type: "hotel",
    name: "Гостиница «Приморская»",
    lat: 43.5744019,
    lng: 39.7272987,
    locationNote: "Сочи, ул. Соколова, 1",
    source: "https://primorskaya-sochi.ofotel.ru/contacts",
  },
  {
    region: "krasnodar",
    type: "hotel",
    name: "Гранд Отель Анапа",
    lat: 44.90834,
    lng: 37.320446,
    locationNote: "Анапа, проезд Голубые Дали, 1",
    source: "https://www.anapa-grandhotel.ru/contact",
  },
  {
    region: "krasnodar",
    type: "hotel",
    name: "Гостиница «Интурист»",
    lat: 45.036698,
    lng: 38.973586,
    locationNote: "Краснодар, ул. Красная, 109",
    source: "https://www.delfin-tour.ru/hotels/2476",
  },
  {
    region: "krasnodar",
    type: "hotel",
    name: "Приморье Grand Resort Hotel",
    lat: 44.565649,
    lng: 38.077815,
    locationNote: "Геленджик, комплекс «Приморье»",
    source: "https://prim-gelendzik.ru/contact",
  },
  {
    region: "krasnodar",
    type: "spring",
    name: "Термальный комплекс «Мостовской»",
    lat: null,
    lng: null,
    locationNote: "Точный объект в посёлке Мостовской требует уточнения.",
    source:
      "https://mostovskiy.ru/turizm-i-otdykh/sanatorno-kurortnyy-i-turisticheskiy-kompleks/",
  },
  {
    region: "crimea",
    type: "hotel",
    name: "Гостиница «Ялта-Интурист»",
    lat: 44.503082,
    lng: 34.190181,
    locationNote: "Ялта, гостиничный комплекс",
    source: "https://otel-yalta-inturist.rt.center/",
  },
  {
    region: "crimea",
    type: "hotel",
    name: "Гостиница «Астория»",
    lat: 45.030747,
    lng: 35.383176,
    locationNote: "Феодосия, просп. Айвазовского, 9а",
    source: "https://www.komandirovka.ru/hotels/feodosia/astoriahotel/",
  },
  {
    region: "astrakhan",
    type: "hotel",
    name: "Гостиница «Азимут»",
    lat: 46.3486298,
    lng: 48.0203085,
    locationNote: "Астрахань, гостиница AZIMUT",
    source: "https://rtc.travel/hotels/russia/astrakhan-region/hotel-80810/",
  },
  {
    region: "astrakhan",
    type: "base",
    name: "База отдыха «Успех»",
    lat: 47.457635,
    lng: 46.954341,
    locationNote: "Харабалинский район, база на Ахтубе",
    source: "https://katalogturbaz.ru/russia/astrahanskaja-oblast/uspeh",
  },
  {
    region: "rostov",
    type: "hotel",
    name: "Конгресс-отель «Дон-Плаза»",
    lat: 47.226117,
    lng: 39.734327,
    locationNote: "Ростов-на-Дону, конгресс-отель",
    source: "https://kongress-otel-don-plaza.rt.center/informatsiya/contact",
  },
  {
    region: "rostov",
    type: "hotel",
    name: "Гостиница «Таганрог»",
    lat: 47.250221,
    lng: 38.917527,
    locationNote: "Таганрог, ул. Дзержинского, 161",
    source: "https://www.delfin-tour.ru/hotels/5489.html",
  },
  {
    region: "volgograd",
    type: "hotel",
    name: "Гостиница «Волгоград»",
    lat: 48.707311,
    lng: 44.514361,
    locationNote: "Волгоград, ул. Мира, 12",
    source: "https://cheap-hotels.ru/hotel/volgograd",
  },
  {
    region: "adygea",
    type: "spring",
    name: "Термальные бассейны «Водная Ривьера»",
    lat: 44.509517,
    lng: 40.151966,
    locationNote: "Майкопский район, термальный комплекс",
    source:
      "https://club-voshod.com/info/pohodnoe_info/dostoprimechatelnosti/adygeya/termalnyy_istochnik_vodnaya_rivera",
  },
  {
    region: "adygea",
    type: "base",
    name: "Турбаза «Горная»",
    lat: 44.293629,
    lng: 40.176944,
    locationNote: "Каменномостский, ул. Набережная, 28",
    source:
      "https://www.komandirovka.ru/hotels/kamennomostskijj_adyg._r./gornaya-baza-otdyha/",
  },
  {
    region: "sevastopol",
    type: "hotel",
    name: "Гостиница «Севастополь»",
    lat: 44.616649,
    lng: 33.52536,
    locationNote: "Севастополь, просп. Нахимова",
    source: "https://www.delfin-tour.ru/hotels/392",
  },
  {
    region: "kalmykia",
    type: "hotel",
    name: "Гостиница «Элиста»",
    lat: 46.308237,
    lng: 44.264565,
    locationNote: "Элиста, ул. Ленина, 241",
    source: "https://www.delfin-tour.ru/hotels/print/12495.html",
  },
];

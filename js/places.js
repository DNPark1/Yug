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
    {
      name: "Абинск",
      lat: 44.8667,
      lng: 38.1667,
    },
    {
      name: "Апшеронск",
      lat: 44.4608,
      lng: 39.7406,
    },
    {
      name: "Армавир",
      lat: 44.99,
      lng: 41.124,
    },
    {
      name: "Белая Глина",
      lat: 46.078,
      lng: 40.866,
    },
    {
      name: "Белореченск",
      lat: 44.7667,
      lng: 39.8667,
    },
    {
      name: "Брюховецкая",
      lat: 45.8008,
      lng: 39.0042,
    },
    {
      name: "Выселки",
      lat: 45.582,
      lng: 39.665,
    },
    {
      name: "Горячий Ключ",
      lat: 44.6333,
      lng: 39.1333,
    },
    {
      name: "Гулькевичи",
      lat: 45.3603,
      lng: 40.6944,
    },
    {
      name: "Динская",
      lat: 45.2167,
      lng: 39.2247,
    },
    {
      name: "Ейск",
      lat: 46.7106,
      lng: 38.2778,
    },
    {
      name: "Калининская",
      lat: 45.484,
      lng: 38.666,
    },
    {
      name: "Каневская",
      lat: 46.0833,
      lng: 38.95,
    },
    {
      name: "Кореновск",
      lat: 45.4667,
      lng: 39.45,
    },
    {
      name: "Кропоткин",
      lat: 45.434,
      lng: 40.576,
    },
    {
      name: "Крыловская",
      lat: 46.319,
      lng: 39.953,
    },
    {
      name: "Крымск",
      lat: 44.9333,
      lng: 38,
    },
    {
      name: "Курганинск",
      lat: 44.8833,
      lng: 40.6,
    },
    {
      name: "Кущёвская",
      lat: 46.5656,
      lng: 39.6289,
    },
    {
      name: "Лабинск",
      lat: 44.6333,
      lng: 40.7333,
    },
    {
      name: "Ленинградская",
      lat: 46.322,
      lng: 39.388,
    },
    {
      name: "Мостовской",
      lat: 44.4136,
      lng: 40.7897,
    },
    {
      name: "Новокубанск",
      lat: 45.1,
      lng: 41.05,
    },
    {
      name: "Новопокровская",
      lat: 45.9533,
      lng: 40.7069,
    },
    {
      name: "Новороссийск",
      lat: 44.7167,
      lng: 37.7667,
    },
    {
      name: "Отрадная",
      lat: 44.394,
      lng: 41.521,
    },
    {
      name: "Павловская",
      lat: 46.138,
      lng: 39.783,
    },
    {
      name: "Полтавская",
      lat: 45.3667,
      lng: 38.2117,
    },
    {
      name: "Приморско-Ахтарск",
      lat: 46.05,
      lng: 38.1833,
    },
    {
      name: "Северская",
      lat: 44.85,
      lng: 38.6667,
    },
    {
      name: "Славянск-на-Кубани",
      lat: 45.2586,
      lng: 38.1247,
    },
    {
      name: "Староминская",
      lat: 46.5333,
      lng: 39.05,
    },
    {
      name: "Старощербиновская",
      lat: 46.6306,
      lng: 38.6667,
    },
    {
      name: "Тбилисская",
      lat: 45.3667,
      lng: 40.2,
    },
    {
      name: "Темрюк",
      lat: 45.2667,
      lng: 37.3833,
    },
    {
      name: "Тимашёвск",
      lat: 45.6167,
      lng: 38.9333,
    },
    {
      name: "Тихорецк",
      lat: 45.85,
      lng: 40.1167,
    },
    {
      name: "Туапсе",
      lat: 44.1,
      lng: 39.0833,
    },
    {
      name: "Успенское",
      lat: 44.831,
      lng: 41.402,
    },
    {
      name: "Усть-Лабинск",
      lat: 45.2153,
      lng: 39.6894,
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
    {
      name: "Алушта",
      lat: 44.6672,
      lng: 34.3978,
    },
    {
      name: "Армянск",
      lat: 46.1069,
      lng: 33.6931,
    },
    {
      name: "Бахчисарай",
      lat: 44.7528,
      lng: 33.8608,
    },
    {
      name: "Белогорск",
      lat: 45.055,
      lng: 34.601,
    },
    {
      name: "Джанкой",
      lat: 45.7086,
      lng: 34.3933,
    },
    {
      name: "Евпатория",
      lat: 45.2,
      lng: 33.3583,
    },
    {
      name: "Керчь",
      lat: 45.3386,
      lng: 36.4681,
    },
    {
      name: "Кировское",
      lat: 45.229,
      lng: 35.205,
    },
    {
      name: "Красногвардейское",
      lat: 45.493,
      lng: 34.299,
    },
    {
      name: "Красноперекопск",
      lat: 45.9553,
      lng: 33.795,
    },
    {
      name: "Ленино",
      lat: 45.298,
      lng: 35.779,
    },
    {
      name: "Нижнегорский",
      lat: 45.448,
      lng: 34.738,
    },
    {
      name: "Первомайское",
      lat: 45.717,
      lng: 33.855,
    },
    {
      name: "Раздольное",
      lat: 45.77,
      lng: 33.485,
    },
    {
      name: "Саки",
      lat: 45.134,
      lng: 33.599,
    },
    {
      name: "Советский",
      lat: 45.342,
      lng: 34.926,
    },
    {
      name: "Судак",
      lat: 44.85,
      lng: 34.974,
    },
    {
      name: "Черноморское",
      lat: 45.5031,
      lng: 32.705,
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
    {
      name: "Володарский",
      lat: 46.402,
      lng: 48.539,
    },
    {
      name: "Енотаевка",
      lat: 47.2436,
      lng: 47.0328,
    },
    {
      name: "Знаменск",
      lat: 48.587,
      lng: 45.737,
    },
    {
      name: "Икряное",
      lat: 46.0903,
      lng: 47.7306,
    },
    {
      name: "Камызяк",
      lat: 46.1156,
      lng: 48.0769,
    },
    {
      name: "Красный Яр",
      lat: 46.534,
      lng: 48.346,
    },
    {
      name: "Лиман",
      lat: 45.784,
      lng: 47.224,
    },
    {
      name: "Нариманов",
      lat: 46.692,
      lng: 47.85,
    },
    {
      name: "Началово",
      lat: 46.3386,
      lng: 48.1997,
    },
    {
      name: "Харабали",
      lat: 47.4,
      lng: 47.25,
    },
    {
      name: "Чёрный Яр",
      lat: 48.063,
      lng: 46.11,
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
    {
      name: "Азов",
      lat: 47.1,
      lng: 39.4167,
    },
    {
      name: "Аксай",
      lat: 47.268,
      lng: 39.867,
    },
    {
      name: "Багаевская",
      lat: 47.3167,
      lng: 40.3833,
    },
    {
      name: "Батайск",
      lat: 47.1333,
      lng: 39.75,
    },
    {
      name: "Белая Калитва",
      lat: 48.1747,
      lng: 40.7931,
    },
    {
      name: "Боковская",
      lat: 49.2222,
      lng: 41.8336,
    },
    {
      name: "Большая Мартыновка",
      lat: 47.2764,
      lng: 41.6675,
    },
    {
      name: "Весёлый",
      lat: 47.093,
      lng: 40.743,
    },
    {
      name: "Вёшенская",
      lat: 49.629,
      lng: 41.726,
    },
    {
      name: "Волгодонск",
      lat: 47.54,
      lng: 42.2072,
    },
    {
      name: "Глубокий",
      lat: 48.528,
      lng: 40.328,
    },
    {
      name: "Гуково",
      lat: 48.05,
      lng: 39.9333,
    },
    {
      name: "Донецк",
      lat: 48.339,
      lng: 39.946,
    },
    {
      name: "Дубовское",
      lat: 47.41,
      lng: 42.757,
    },
    {
      name: "Егорлыкская",
      lat: 46.55,
      lng: 40.65,
    },
    {
      name: "Заветное",
      lat: 47.12,
      lng: 43.886,
    },
    {
      name: "Зверево",
      lat: 48.0167,
      lng: 40.1167,
    },
    {
      name: "Зерноград",
      lat: 46.8464,
      lng: 40.3039,
    },
    {
      name: "Зимовники",
      lat: 47.147,
      lng: 42.473,
    },
    {
      name: "Кагальницкая",
      lat: 46.8819,
      lng: 40.1503,
    },
    {
      name: "Казанская",
      lat: 49.795,
      lng: 41.146,
    },
    {
      name: "Каменоломни",
      lat: 47.667,
      lng: 40.203,
    },
    {
      name: "Каменск-Шахтинский",
      lat: 48.3167,
      lng: 40.2667,
    },
    {
      name: "Кашары",
      lat: 49.039,
      lng: 41.005,
    },
    {
      name: "Константиновск",
      lat: 47.5833,
      lng: 41.1,
    },
    {
      name: "Красный Сулин",
      lat: 47.8833,
      lng: 40.0667,
    },
    {
      name: "Куйбышево",
      lat: 47.812,
      lng: 39.912,
    },
    {
      name: "Матвеев Курган",
      lat: 47.5722,
      lng: 38.8667,
    },
    {
      name: "Миллерово",
      lat: 48.9167,
      lng: 40.4,
    },
    {
      name: "Милютинская",
      lat: 48.6306,
      lng: 41.6708,
    },
    {
      name: "Морозовск",
      lat: 48.35,
      lng: 41.8333,
    },
    {
      name: "Новочеркасск",
      lat: 47.4358,
      lng: 40.0986,
    },
    {
      name: "Новошахтинск",
      lat: 47.7667,
      lng: 39.9167,
    },
    {
      name: "Обливская",
      lat: 48.5367,
      lng: 42.4942,
    },
    {
      name: "Орловский",
      lat: 46.872,
      lng: 42.06,
    },
    {
      name: "Песчанокопское",
      lat: 46.1961,
      lng: 41.0775,
    },
    {
      name: "Покровское",
      lat: 47.415,
      lng: 38.898,
    },
    {
      name: "Пролетарск",
      lat: 46.703,
      lng: 41.727,
    },
    {
      name: "Ремонтное",
      lat: 46.5631,
      lng: 43.6567,
    },
    {
      name: "Родионово-Несветайская",
      lat: 47.6139,
      lng: 39.7008,
    },
    {
      name: "Романовская",
      lat: 47.542,
      lng: 42.029,
    },
    {
      name: "Сальск",
      lat: 46.4833,
      lng: 41.5333,
    },
    {
      name: "Семикаракорск",
      lat: 47.5167,
      lng: 40.8,
    },
    {
      name: "Советская",
      lat: 49.009,
      lng: 42.121,
    },
    {
      name: "Тарасовский",
      lat: 48.7292,
      lng: 40.3636,
    },
    {
      name: "Тацинская",
      lat: 48.1969,
      lng: 41.2731,
    },
    {
      name: "Усть-Донецкий",
      lat: 47.6397,
      lng: 40.8664,
    },
    {
      name: "Целина",
      lat: 46.534,
      lng: 41.033,
    },
    {
      name: "Цимлянск",
      lat: 47.6467,
      lng: 42.0947,
    },
    {
      name: "Чалтырь",
      lat: 47.2833,
      lng: 39.5,
    },
    {
      name: "Чертково",
      lat: 49.384,
      lng: 40.155,
    },
    {
      name: "Шахты",
      lat: 47.7119,
      lng: 40.2083,
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
    {
      name: "Алексеевская",
      lat: 50.289,
      lng: 42.185,
    },
    {
      name: "Быково",
      lat: 49.767,
      lng: 45.388,
    },
    {
      name: "Городище",
      lat: 48.803,
      lng: 44.474,
    },
    {
      name: "Даниловка",
      lat: 50.355,
      lng: 44.116,
    },
    {
      name: "Дубовка",
      lat: 49.05,
      lng: 44.8333,
    },
    {
      name: "Елань",
      lat: 50.949,
      lng: 43.735,
    },
    {
      name: "Жирновск",
      lat: 50.9803,
      lng: 44.7808,
    },
    {
      name: "Иловля",
      lat: 49.303,
      lng: 43.98,
    },
    {
      name: "Калач-на-Дону",
      lat: 48.6833,
      lng: 43.5333,
    },
    {
      name: "Камышин",
      lat: 50.0833,
      lng: 45.4,
    },
    {
      name: "Клетская",
      lat: 49.3147,
      lng: 43.0619,
    },
    {
      name: "Котельниково",
      lat: 47.6333,
      lng: 43.1333,
    },
    {
      name: "Котово",
      lat: 50.321,
      lng: 44.802,
    },
    {
      name: "Кумылженская",
      lat: 49.8808,
      lng: 42.5897,
    },
    {
      name: "Ленинск",
      lat: 48.694,
      lng: 45.2,
    },
    {
      name: "Михайловка",
      lat: 50.07,
      lng: 43.238,
    },
    {
      name: "Нехаевская",
      lat: 50.4086,
      lng: 41.7494,
    },
    {
      name: "Николаевск",
      lat: 50.026,
      lng: 45.463,
    },
    {
      name: "Новоаннинский",
      lat: 50.5167,
      lng: 42.6667,
    },
    {
      name: "Новониколаевский",
      lat: 50.974,
      lng: 42.364,
    },
    {
      name: "Октябрьский",
      lat: 47.97,
      lng: 43.643,
    },
    {
      name: "Ольховка",
      lat: 49.86,
      lng: 44.562,
    },
    {
      name: "Палласовка",
      lat: 50.05,
      lng: 46.8833,
    },
    {
      name: "Преображенская",
      lat: 50.743,
      lng: 43.05,
    },
    {
      name: "Рудня",
      lat: 50.799,
      lng: 44.558,
    },
    {
      name: "Светлый Яр",
      lat: 48.475,
      lng: 44.7697,
    },
    {
      name: "Серафимович",
      lat: 49.581,
      lng: 42.736,
    },
    {
      name: "Средняя Ахтуба",
      lat: 48.7167,
      lng: 44.8667,
    },
    {
      name: "Старая Полтавка",
      lat: 50.4786,
      lng: 46.4822,
    },
    {
      name: "Суровикино",
      lat: 48.6,
      lng: 42.85,
    },
    {
      name: "Урюпинск",
      lat: 50.8,
      lng: 42.0167,
    },
    {
      name: "Фролово",
      lat: 49.7667,
      lng: 43.65,
    },
    {
      name: "Чернышковский",
      lat: 48.4211,
      lng: 42.2333,
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
    {
      name: "Гиагинская",
      lat: 44.8694,
      lng: 40.0661,
    },
    {
      name: "Кошехабль",
      lat: 44.9,
      lng: 40.5028,
    },
    {
      name: "Красногвардейское",
      lat: 45.127,
      lng: 39.573,
    },
    {
      name: "Понежукай",
      lat: 44.8864,
      lng: 39.3831,
    },
    {
      name: "Тахтамукай",
      lat: 44.9172,
      lng: 38.9961,
    },
    {
      name: "Тульский",
      lat: 44.513,
      lng: 40.178,
    },
    {
      name: "Хакуринохабль",
      lat: 45.0192,
      lng: 40.2364,
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
    {
      name: "Андреевка",
      lat: 44.817,
      lng: 33.563,
    },
    {
      name: "Балаклава",
      lat: 44.5,
      lng: 33.6,
    },
    {
      name: "Верхнесадовое",
      lat: 44.6889,
      lng: 33.7056,
    },
    {
      name: "Кача",
      lat: 44.778,
      lng: 33.544,
    },
    {
      name: "Орлиное",
      lat: 44.447,
      lng: 33.775,
    },
    {
      name: "Терновка",
      lat: 44.58,
      lng: 33.75,
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
    {
      name: "Большой Царын",
      lat: 47.8522,
      lng: 45.4342,
    },
    {
      name: "Городовиковск",
      lat: 46.0833,
      lng: 41.9333,
    },
    {
      name: "Ики-Бурул",
      lat: 45.8203,
      lng: 44.64,
    },
    {
      name: "Кетченеры",
      lat: 47.3072,
      lng: 44.5244,
    },
    {
      name: "Комсомольский",
      lat: 45.334,
      lng: 46.042,
    },
    {
      name: "Малые Дербеты",
      lat: 47.9547,
      lng: 44.6808,
    },
    {
      name: "Приютное",
      lat: 46.104,
      lng: 43.509,
    },
    {
      name: "Садовое",
      lat: 47.777,
      lng: 44.508,
    },
    {
      name: "Троицкое",
      lat: 46.42,
      lng: 44.26,
    },
    {
      name: "Цаган Аман",
      lat: 47.5569,
      lng: 46.7183,
    },
    {
      name: "Яшалта",
      lat: 46.3389,
      lng: 42.2722,
    },
    {
      name: "Яшкуль",
      lat: 46.1694,
      lng: 45.3428,
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

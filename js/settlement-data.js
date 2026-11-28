const SETTLEMENT_DATA = {
  "krasnodar": {
    "Краснодар": {
      "type": "Город",
      "road": {
        "text": "Ремонт 15 городских дорог по краевой программе 2026 года.",
        "url": "https://www.kommersant.ru/doc/8909945"
      },
      "tourism": {
        "text": "За январь–ноябрь 2025 года Краснодар посетили 1,2 млн туристов. В оценку входят однодневные визиты.",
        "label": "Администрация Краснодара, BFM Кубань",
        "url": "https://kuban.bfm.ru/news/49869"
      },
      "majorRoadKm": 2,
      "source": "https://ru.wikipedia.org/wiki/Краснодар",
      "quality": {
        "score": 244,
        "url": "https://www.kommersant.ru/doc/7624329"
      }
    },
    "Сочи": {
      "type": "Город",
      "environment": {
        "text": "Первый этап работ в парке 80-летия Краснодарского края.",
        "url": "https://grad-sochi.ru/2024/06/26/30317/"
      },
      "road": {
        "text": "Капитальный ремонт участков улицы Православной.",
        "url": "https://news-kuban.ru/society/2026/09/28/200046.html"
      },
      "tourism": {
        "text": "Более 7,93 млн туристов за 2025 год. Оценка по городу-курорту Сочи.",
        "label": "Глава Сочи, «Ведомости Юг»",
        "url": "https://south.vedomosti.ru/south/news/2026/05/26/1200033-stremitsya-chislo"
      },
      "majorRoadKm": 3,
      "source": "https://ru.wikipedia.org/wiki/Сочи",
      "quality": {
        "score": 263,
        "url": "https://www.kommersant.ru/doc/7624329"
      }
    },
    "Анапа": {
      "type": "Город",
      "environment": {
        "text": "Благоустройство парка «Ореховая роща».",
        "url": "https://xn--80aaaovgbbdc1amxfegf.xn--p1ai/news/v-anape-zavershili-osnovnye-raboty-v-parke-orehovaja-roscha.html"
      },
      "tourism": {
        "text": "Около 3 млн туристов за 2025 год по муниципальному образованию город-курорт Анапа.",
        "label": "Глава Анапы, «Ведомости Юг»",
        "url": "https://south.vedomosti.ru/south/news/2026/04/02/1187596-godu"
      },
      "majorRoadKm": 6,
      "source": "https://ru.wikipedia.org/wiki/Анапа",
      "population": 84804,
      "year": 2025,
      "quality": {
        "score": 262,
        "url": "https://www.kommersant.ru/doc/7624329"
      }
    },
    "Геленджик": {
      "type": "Город",
      "environment": {
        "text": "Открытие парка имени Героя.",
        "url": "https://gelpriboy.ru/kurort/227027-park-imeni-geroya-otkryli-dlya-otdyha-turistov-i-gelendzhichan/"
      },
      "tourism": {
        "text": "4 300 670 посетителей за 2025 год по отчёту муниципального образования город-курорт Геленджик.",
        "label": "Администрация Геленджика",
        "url": "https://t.me/s/adm_gelen?before=27172"
      },
      "majorRoadKm": 2,
      "source": "https://ru.wikipedia.org/wiki/Геленджик",
      "population": 80534,
      "year": 2025,
      "quality": {
        "score": 260,
        "url": "https://www.kommersant.ru/doc/7624329"
      }
    },
    "Абинск": {
      "type": "Город",
      "environment": {
        "text": "Обновление городской набережной.",
        "url": "https://www.smokk.ru/about/settlements-news/11044.html"
      },
      "majorRoadKm": 2,
      "source": "https://ru.wikipedia.org/wiki/Абинск",
      "population": 38440,
      "year": 2025
    },
    "Апшеронск": {
      "type": "Город",
      "environment": {
        "text": "Благоустройство сквера имени Комарова.",
        "url": "https://tvkrasnodar.ru/obshchestvo/2026/10/02/blagoustroystvo-skvera-imeni-komarova-zavershili-v-apsheronske/"
      },
      "majorRoadKm": 30,
      "source": "https://ru.wikipedia.org/wiki/Апшеронск",
      "population": 39047,
      "year": 2025,
      "tourism": {
        "text": "По оценке главы Апшеронского района, район принял около 365 тыс. туристов за 2025 год. Это примерно на 23% больше, чем годом ранее.",
        "label": "Глава района через «Утренний Юг»",
        "url": "https://bot.utyug.info/new/turpotok-v-apsheronskiy-rayon-uvelichilsya-na-23-v-2025-godu-71299/"
      }
    },
    "Армавир": {
      "type": "Город",
      "majorRoadKm": 5,
      "source": "https://ru.wikipedia.org/wiki/Армавир_(Краснодарский_край)",
      "population": 185356,
      "year": 2025,
      "quality": {
        "score": 223,
        "url": "https://www.kommersant.ru/doc/7624329"
      }
    },
    "Белая Глина": {
      "type": "Село",
      "environment": {
        "text": "Обновление сквера в центре села.",
        "url": "https://tvkrasnodar.ru/obshchestvo/2024/10/22/skver-blagoustroili-v-tsentre-sela-belaya-glina/"
      },
      "majorRoadKm": 48,
      "source": "https://ru.wikipedia.org/wiki/Белая_Глина_(Краснодарский_край)",
      "population": 17172,
      "year": 2023
    },
    "Белореченск": {
      "type": "Город",
      "environment": {
        "text": "Обновление городского парка.",
        "url": "https://www.kuban.bfm.ru/news/63948"
      },
      "majorRoadKm": 3,
      "source": "https://ru.wikipedia.org/wiki/Белореченск",
      "population": 54190,
      "year": 2025
    },
    "Брюховецкая": {
      "type": "Станица",
      "road": {
        "text": "Ремонт 7,3 км на дороге Новоджерелиевская — Брюховецкая — Батуринская.",
        "url": "https://newsrus.su/transport/i15320-73-km-trassy-novodjerelievskaya-bryuhoveckaya-baturinskaya.html"
      },
      "majorRoadKm": 46,
      "source": "https://ru.wikipedia.org/wiki/Брюховецкая",
      "population": 19154,
      "year": 2021
    },
    "Выселки": {
      "type": "Станица",
      "majorRoadKm": 4,
      "source": "https://ru.wikipedia.org/wiki/Выселки_(Краснодарский_край)",
      "population": 19955,
      "year": 2021
    },
    "Горячий Ключ": {
      "type": "Город",
      "road": {
        "text": "Ремонт участка подъезда через станицу Саратовскую.",
        "url": "https://krsnd.bkdrf.ru/News/Read/krasnodarskiy-kray-v-goryachem-klyuche-otremontirovan-uchastok-trassy-magistral-don--st-tsa-saratovskaya--goryachiy-klyuch"
      },
      "majorRoadKm": 1,
      "source": "https://ru.wikipedia.org/wiki/Горячий_Ключ",
      "population": 42634,
      "year": 2025,
      "tourism": {
        "text": "К 20 мая 2026 года с начала года город посетили более 40 тыс. туристов и отдыхающих. На дату сообщения загрузка санаторно-курортного комплекса составляла около 85%.",
        "label": "Администрация Горячего Ключа",
        "url": "https://gorkluch.ru/about/visits/38374/"
      }
    },
    "Гулькевичи": {
      "type": "Город",
      "majorRoadKm": 7,
      "source": "https://ru.wikipedia.org/wiki/Гулькевичи",
      "population": 32911,
      "year": 2025
    },
    "Динская": {
      "type": "Станица",
      "environment": {
        "text": "Благоустройство зелёной зоны в станице.",
        "url": "https://tvkrasnodar.ru/stroitelstvo-i-zhkkh/2025/11/05/zelenuyu-zonu-ploshchadyu-okolo-odnogo-gektara-blagoustroili-v-stanitse-dinskoy/"
      },
      "road": {
        "text": "Ремонт в хуторе Новом на направлении Динская — Старомышастовская.",
        "url": "https://kuban.bfm.ru/news/64660"
      },
      "majorRoadKm": 3,
      "source": "https://ru.wikipedia.org/wiki/Динская",
      "population": 36576,
      "year": 2021
    },
    "Ейск": {
      "type": "Город",
      "majorRoadKm": 48,
      "source": "https://ru.wikipedia.org/wiki/Ейск",
      "population": 81099,
      "year": 2025,
      "tourism": {
        "text": "Ейский район: с начала 2025 года к 10 декабря на побережье района отдохнули более 613 тыс. человек. Основная часть гостей приехала с мая по октябрь.",
        "label": "Администрация Ейского района",
        "url": "https://yeiskraion.ru/mnews/munitsipalnye-novosti/80674/"
      }
    },
    "Калининская": {
      "type": "Станица",
      "majorRoadKm": 30,
      "source": "https://ru.wikipedia.org/wiki/Калининская_(Краснодарский_край)",
      "population": 14035,
      "year": 2023
    },
    "Каневская": {
      "type": "Станица",
      "environment": {
        "text": "Молодёжный центр после капитального ремонта.",
        "url": "https://xn--80aaaovgbbdc1amxfegf.xn--p1ai/news/v-stanice-kanevskoi-posle-kapremonta-otkryli-molodezhnyi-centr.html"
      },
      "road": {
        "text": "Обновление 13 км дороги Каневская — Березанская.",
        "url": "https://krsnd.dorogistrany.ru/news/read/v-krasnodarskom-krae-otremontirovano-13-km-trassy-kanevskaya--berezanskaya"
      },
      "majorRoadKm": 61,
      "source": "https://ru.wikipedia.org/wiki/Каневская",
      "population": 41721,
      "year": 2021
    },
    "Кореновск": {
      "type": "Город",
      "majorRoadKm": 4,
      "source": "https://ru.wikipedia.org/wiki/Кореновск",
      "population": 40944,
      "year": 2025
    },
    "Кропоткин": {
      "type": "Город",
      "majorRoadKm": 3,
      "source": "https://ru.wikipedia.org/wiki/Кропоткин_(Краснодарский_край)",
      "population": 73854,
      "year": 2025
    },
    "Крыловская": {
      "type": "Станица",
      "environment": {
        "text": "Новые тротуары и ремонт моста в станице.",
        "url": "https://gazetanovoros.ru/news/bolshie-peremeny-v-stanice-krylovskoj-novye-truby-trotuary-i-otremontirovannyj-most/"
      },
      "road": {
        "text": "Ремонт участка дороги Челбасская — Крыловская — Ленинградская.",
        "url": "https://krsnd.dorogistrany.ru/News/Read/v-krasnodarskom-krae-otremontirovan-uchastok-trassy-chelbasskaya--krylovskaya--leningradskaya"
      },
      "majorRoadKm": 10
    },
    "Крымск": {
      "type": "Город",
      "majorRoadKm": 3,
      "source": "https://ru.wikipedia.org/wiki/Крымск",
      "population": 54756,
      "year": 2025
    },
    "Курганинск": {
      "type": "Город",
      "majorRoadKm": 24,
      "source": "https://ru.wikipedia.org/wiki/Курганинск",
      "population": 46089,
      "year": 2025
    },
    "Кущёвская": {
      "type": "Станица",
      "road": {
        "text": "Ремонт улиц и переулков в станице.",
        "url": "https://krasnodar.bz/news/12336-v-kuschyovskoi-obnovili-neskolko-ulic-i-pereulkov.html"
      },
      "majorRoadKm": 3,
      "source": "https://ru.wikipedia.org/wiki/Кущёвская",
      "population": 30375,
      "year": 2021
    },
    "Лабинск": {
      "type": "Город",
      "road": {
        "text": "Ремонт подъезда к спортивному комплексу.",
        "url": "https://kubnews.ru/vlast/2026/11/26/po-porucheniyu-gubernatora-kubani-v-labinske-otremontirovali-dorogu-k-sportivnomu-kompleksu/"
      },
      "majorRoadKm": 5,
      "source": "https://ru.wikipedia.org/wiki/Лабинск",
      "population": 55434,
      "year": 2025
    },
    "Ленинградская": {
      "type": "Станица",
      "road": {
        "text": "Ремонт участка дороги через Крыловскую в сторону Ленинградской.",
        "url": "https://krsnd.dorogistrany.ru/News/Read/v-krasnodarskom-krae-otremontirovan-uchastok-trassy-chelbasskaya--krylovskaya--leningradskaya"
      },
      "majorRoadKm": 27
    },
    "Мостовской": {
      "type": "Посёлок городского типа",
      "majorRoadKm": 28,
      "source": "https://ru.wikipedia.org/wiki/Мостовской",
      "population": 25285,
      "year": 2025,
      "tourism": {
        "text": "По данным Мостовского района, с начала 2025 года к публикации 29 августа район посетили более 290 тыс. туристов. Термальные базы района отмечали повышенный спрос в холодные месяцы.",
        "label": "Интервью районной администрации, «Коммерсантъ»",
        "url": "https://www.kommersant.ru/doc/7989705"
      }
    },
    "Новокубанск": {
      "type": "Город",
      "majorRoadKm": 7,
      "source": "https://ru.wikipedia.org/wiki/Новокубанск",
      "population": 33048,
      "year": 2025
    },
    "Новопокровская": {
      "type": "Станица",
      "majorRoadKm": 42,
      "source": "https://ru.wikipedia.org/wiki/Новопокровская",
      "population": 18559,
      "year": 2021
    },
    "Новороссийск": {
      "type": "Город",
      "road": {
        "text": "Участки ямочного ремонта в Новороссийске.",
        "url": "https://www.kommersant.ru/doc/8764632"
      },
      "majorRoadKm": 1,
      "source": "https://ru.wikipedia.org/wiki/Новороссийск",
      "quality": {
        "score": 253,
        "url": "https://www.kommersant.ru/doc/7624329"
      },
      "tourism": {
        "text": "По данным администрации Новороссийска, с начала 2026 года к 15 мая муниципалитет принял 316 тыс. туристов. Это на 5,3% больше, чем за тот же период 2025 года.",
        "label": "Администрация Новороссийска через «Коммерсантъ»",
        "url": "https://www.kommersant.ru/doc/8688833"
      }
    },
    "Отрадная": {
      "type": "Станица",
      "road": {
        "text": "Ремонт дороги между Отрадной и Подгорной Синюхой.",
        "url": "https://krsnd.dorogistrany.ru/News/Read/v-krasnodarskom-krae-otremontirovana-doroga-mezhdu-stanitsami-otradnaya-i-podgornaya-sinyuha"
      },
      "majorRoadKm": 30
    },
    "Павловская": {
      "type": "Станица",
      "road": {
        "text": "Реконструкция объездной дороги станицы.",
        "url": "https://pavl23.ru/item/1720626"
      },
      "majorRoadKm": 5,
      "source": "https://ru.wikipedia.org/wiki/Павловская_(Краснодарский_край)",
      "population": 29514,
      "year": 2021
    },
    "Полтавская": {
      "type": "Станица",
      "majorRoadKm": 18,
      "source": "https://ru.wikipedia.org/wiki/Полтавская",
      "population": 23728,
      "year": 2025
    },
    "Приморско-Ахтарск": {
      "type": "Город",
      "majorRoadKm": 94,
      "source": "https://ru.wikipedia.org/wiki/Приморско-Ахтарск",
      "population": 30084,
      "year": 2025
    },
    "Северская": {
      "type": "Станица",
      "majorRoadKm": 1,
      "source": "https://ru.wikipedia.org/wiki/Северская",
      "population": 26973,
      "year": 2021
    },
    "Славянск-на-Кубани": {
      "type": "Город",
      "environment": {
        "text": "Обновление набережной.",
        "url": "https://kuban.mk.ru/social/2024/10/30/v-slavyanskenakubani-zavershili-blagoustroystvo-naberezhnoy.html"
      },
      "majorRoadKm": 8,
      "source": "https://ru.wikipedia.org/wiki/Славянск-на-Кубани",
      "population": 60780,
      "year": 2025
    },
    "Староминская": {
      "type": "Станица",
      "road": {
        "text": "Ремонт трёх километров на направлении Староминская — Кущёвская.",
        "url": "https://kuban.mk.ru/amp/social/2025/10/23/zavershilsya-remont-trekhkilometrovogo-uchastka-avtodorogi-mezhdu-stanicami-starominskaya-i-kushhevskaya.html"
      },
      "majorRoadKm": 47,
      "source": "https://ru.wikipedia.org/wiki/Староминская",
      "population": 30362,
      "year": 2021
    },
    "Старощербиновская": {
      "type": "Станица",
      "majorRoadKm": 61,
      "source": "https://ru.wikipedia.org/wiki/Старощербиновская",
      "population": 17027,
      "year": 2023
    },
    "Тбилисская": {
      "type": "Станица",
      "environment": {
        "text": "Благоустройство станичного сквера.",
        "url": "https://info-tbilisskaya.ru/news/smi_o_nas/v_stanitse_tbilisskoy_blagoustroili_skver/"
      },
      "road": {
        "text": "Ремонт участка трассы Тбилисская — Кропоткин в Кавказском районе.",
        "url": "https://kuban.mk.ru/social/2026/11/09/v-kavkazskom-rayone-zavershili-remont-uchastka-trassy-tbilisskaya-kropotkin.html"
      },
      "majorRoadKm": 27,
      "source": "https://ru.wikipedia.org/wiki/Тбилисская",
      "population": 25650,
      "year": 2021
    },
    "Темрюк": {
      "type": "Город",
      "majorRoadKm": 7,
      "source": "https://ru.wikipedia.org/wiki/Темрюк",
      "population": 40415,
      "year": 2025,
      "tourism": {
        "text": "Темрюкский район: 1,942 млн посетителей за 2025 год, включая однодневные визиты. Для оценки спроса на ночлег потребуется отдельная статистика размещения.",
        "label": "Администрация Темрюкского района",
        "url": "https://temryuk.ru/presscenter/news/temryukskiy-rayon-itogi-kurortnogo-sezona-2025-goda/?type=special"
      }
    },
    "Тимашёвск": {
      "type": "Город",
      "majorRoadKm": 38,
      "source": "https://ru.wikipedia.org/wiki/Тимашёвск",
      "population": 51101,
      "year": 2025
    },
    "Тихорецк": {
      "type": "Город",
      "majorRoadKm": 3,
      "source": "https://ru.wikipedia.org/wiki/Тихорецк",
      "population": 54009,
      "year": 2025
    },
    "Туапсе": {
      "type": "Город",
      "environment": {
        "text": "Новый сквер на пересечении улиц Калараша и Портовиков.",
        "url": "https://newkuban.ru/news/260690039/"
      },
      "majorRoadKm": 1,
      "source": "https://ru.wikipedia.org/wiki/Туапсе",
      "population": 60089,
      "year": 2025,
      "quality": {
        "score": 269,
        "url": "https://www.kommersant.ru/doc/7624329"
      },
      "tourism": {
        "text": "Туапсинский муниципальный округ: 1 149,7 тыс. отдыхающих за 2024 год. Однодневные посетители исключены из подсчёта.",
        "label": "Администрация Туапсинского округа",
        "url": "https://tuapseregion.ru/region/ekonomika/sotsialno-ekonomicheskoe-razvitie-mo-tuapsinskiy-rayon/50309/"
      }
    },
    "Успенское": {
      "type": "Село",
      "majorRoadKm": 3,
      "source": "https://ru.wikipedia.org/wiki/Успенское_(Краснодарский_край)",
      "population": 11286,
      "year": 2021
    },
    "Усть-Лабинск": {
      "type": "Город",
      "majorRoadKm": 3,
      "source": "https://ru.wikipedia.org/wiki/Усть-Лабинск",
      "population": 38572,
      "year": 2025
    }
  },
  "crimea": {
    "Ялта": {
      "type": "Город",
      "road": {
        "text": "Ремонт участка трассы в сторону Севастополя под Ялтой.",
        "url": "https://m.c-inform.info/news/id/119130"
      },
      "tourism": {
        "text": "622 тыс. гостей коллективных средств размещения за январь–сентябрь 2025 года по Ялтинскому муниципалитету. Частный сектор в подсчёт не входит.",
        "label": "Администрация Ялты, постановление № 4941-п",
        "url": "https://base.garant.ru/413196821/5633a92d35b966c2ba2f1e859e7bdd69/"
      },
      "majorRoadKm": 1,
      "source": "https://ru.wikipedia.org/wiki/Ялта",
      "population": 72013,
      "year": 2025
    },
    "Феодосия": {
      "type": "Город",
      "majorRoadKm": 12,
      "source": "https://ru.wikipedia.org/wiki/Феодосия",
      "population": 64493,
      "year": 2025,
      "tourism": {
        "text": "На округ Феодосия пришлось 5,1% всех гостей, учтённых коллективными средствами размещения Республики Крым в 2024 году. Показатель отражает долю размещённых гостей по муниципалитету.",
        "label": "Крымстат, «Туризм», муниципальная разбивка за 2024 год",
        "url": "https://82.rosstat.gov.ru/storage/mediabank/2%20-%20%D0%98%D0%90%D0%9C%20%D0%A2%D0%A3%D0%A0%D0%98%D0%97%D0%9C%20%D0%B3%D0%BE%D0%B4%D0%BE%D0%B2%D0%BE%D0%B9%202024.pdf"
      }
    },
    "Симферополь": {
      "type": "Город",
      "road": {
        "text": "Ремонт четырёх городских улиц.",
        "url": "https://smartik.ru/simferopol/post/258505101"
      },
      "majorRoadKm": 7,
      "source": "https://ru.wikipedia.org/wiki/Симферополь",
      "tourism": {
        "text": "На округ Симферополь пришлось 8,5% всех гостей, учтённых коллективными средствами размещения Республики Крым в 2024 году. Показатель отражает долю размещённых гостей по муниципалитету.",
        "label": "Крымстат, «Туризм», муниципальная разбивка за 2024 год",
        "url": "https://82.rosstat.gov.ru/storage/mediabank/2%20-%20%D0%98%D0%90%D0%9C%20%D0%A2%D0%A3%D0%A0%D0%98%D0%97%D0%9C%20%D0%B3%D0%BE%D0%B4%D0%BE%D0%B2%D0%BE%D0%B9%202024.pdf"
      }
    },
    "Алушта": {
      "type": "Город",
      "environment": {
        "text": "Открытие Советской площади после работ.",
        "url": "https://gorod24.online/alushta/news/368159-ploschad_sovetskuyu_v_alushte_otkryili_k_novomu_godu.html"
      },
      "majorRoadKm": 1,
      "source": "https://ru.wikipedia.org/wiki/Алушта",
      "population": 29641,
      "year": 2025,
      "tourism": {
        "text": "На округ Алушта пришлось 15% всех гостей, учтённых коллективными средствами размещения Республики Крым в 2024 году. Показатель отражает долю размещённых гостей по муниципалитету.",
        "label": "Крымстат, «Туризм», муниципальная разбивка за 2024 год",
        "url": "https://82.rosstat.gov.ru/storage/mediabank/2%20-%20%D0%98%D0%90%D0%9C%20%D0%A2%D0%A3%D0%A0%D0%98%D0%97%D0%9C%20%D0%B3%D0%BE%D0%B4%D0%BE%D0%B2%D0%BE%D0%B9%202024.pdf"
      }
    },
    "Армянск": {
      "type": "Город",
      "environment": {
        "text": "Обновление сквера Строителей.",
        "url": "https://m.c-inform.info/news/id/117282"
      },
      "majorRoadKm": 0,
      "source": "https://ru.wikipedia.org/wiki/Армянск",
      "population": 19934,
      "year": 2025
    },
    "Бахчисарай": {
      "type": "Город",
      "environment": {
        "text": "Благоустройство общественного пространства в Бахчисарае.",
        "url": "https://gorod24.online/bahchisaray/news/397890-v_bahchisarae_zavershenyi_rabotyi_po_blagoustroystvu_obschestvennoy_territorii.html"
      },
      "majorRoadKm": 2,
      "source": "https://ru.wikipedia.org/wiki/Бахчисарай",
      "tourism": {
        "text": "На Бахчисарайский район пришлось 2,9% всех гостей, учтённых коллективными средствами размещения Республики Крым в 2024 году. Показатель отражает долю размещённых гостей по муниципалитету.",
        "label": "Крымстат, «Туризм», муниципальная разбивка за 2024 год",
        "url": "https://82.rosstat.gov.ru/storage/mediabank/2%20-%20%D0%98%D0%90%D0%9C%20%D0%A2%D0%A3%D0%A0%D0%98%D0%97%D0%9C%20%D0%B3%D0%BE%D0%B4%D0%BE%D0%B2%D0%BE%D0%B9%202024.pdf"
      }
    },
    "Белогорск": {
      "type": "Город",
      "majorRoadKm": 2,
      "source": "https://ru.wikipedia.org/wiki/Белогорск_(Крым)",
      "population": 17533,
      "year": 2025
    },
    "Джанкой": {
      "type": "Город",
      "majorRoadKm": 1,
      "source": "https://ru.wikipedia.org/wiki/Джанкой",
      "population": 34988,
      "year": 2025
    },
    "Евпатория": {
      "type": "Город",
      "road": {
        "text": "Обновление участка трассы Евпатория — порт Мирный — Штормовое.",
        "url": "https://dorogistrany.ru/News/Read/v-respublike-krym-obnovili-3-km-trassy-evpatoriya--port-mirnyy--shtormovoe"
      },
      "majorRoadKm": 6,
      "source": "https://ru.wikipedia.org/wiki/Евпатория",
      "tourism": {
        "text": "На округ Евпатория пришлось 11,2% всех гостей, учтённых коллективными средствами размещения Республики Крым в 2024 году. Показатель отражает долю размещённых гостей по муниципалитету.",
        "label": "Крымстат, «Туризм», муниципальная разбивка за 2024 год",
        "url": "https://82.rosstat.gov.ru/storage/mediabank/2%20-%20%D0%98%D0%90%D0%9C%20%D0%A2%D0%A3%D0%A0%D0%98%D0%97%D0%9C%20%D0%B3%D0%BE%D0%B4%D0%BE%D0%B2%D0%BE%D0%B9%202024.pdf"
      }
    },
    "Керчь": {
      "type": "Город",
      "majorRoadKm": 1,
      "source": "https://ru.wikipedia.org/wiki/Керчь",
      "population": 151103,
      "year": 2025
    },
    "Кировское": {
      "type": "Посёлок городского типа",
      "majorRoadKm": 4
    },
    "Красногвардейское": {
      "type": "Посёлок городского типа",
      "road": {
        "text": "Ремонт дороги между Войково и Красногвардейским.",
        "url": "https://www.zaovad.ru/news/198/"
      },
      "majorRoadKm": 0,
      "source": "https://ru.wikipedia.org/wiki/Красногвардейское_(Красногвардейский_район,_Крым)",
      "population": 11073,
      "year": 2021
    },
    "Красноперекопск": {
      "type": "Город",
      "majorRoadKm": 0,
      "source": "https://ru.wikipedia.org/wiki/Красноперекопск",
      "population": 25026,
      "year": 2025
    },
    "Ленино": {
      "type": "Посёлок городского типа",
      "majorRoadKm": 4,
      "source": "https://ru.wikipedia.org/wiki/Ленино_(Крым)",
      "population": 7362,
      "year": 2021
    },
    "Нижнегорский": {
      "type": "Посёлок городского типа",
      "road": {
        "text": "Ремонт подъездной дороги со стороны Азовского.",
        "url": "https://news.mail.ru/society/68377004/"
      },
      "majorRoadKm": 4,
      "source": "https://ru.wikipedia.org/wiki/Нижнегорский_(Крым)",
      "population": 8178,
      "year": 2021
    },
    "Первомайское": {
      "type": "Посёлок городского типа",
      "environment": {
        "text": "Реконструкция парка с летним амфитеатром.",
        "url": "https://gazetacrimea.ru/news/letniy-amfiteatr-i-kolonnada-v-vide-kolosev-v-pgt-pervomayskoe-zavershilas-rekonstruktsiya-parka/"
      },
      "majorRoadKm": 19
    },
    "Раздольное": {
      "type": "Посёлок городского типа",
      "majorRoadKm": 31
    },
    "Саки": {
      "type": "Город",
      "road": {
        "text": "Капитальный ремонт участка дороги Новосёловское — Саки.",
        "url": "https://krym.aif.ru/auto/road/v-krymu-zavershilsya-kapitalnyy-remont-uchastka-dorogi-novoselovskoe-saki"
      },
      "majorRoadKm": 10,
      "tourism": {
        "text": "На округ Саки пришлось 3,8% всех гостей, учтённых коллективными средствами размещения Республики Крым в 2024 году. Показатель отражает долю размещённых гостей по муниципалитету.",
        "label": "Крымстат, «Туризм», муниципальная разбивка за 2024 год",
        "url": "https://82.rosstat.gov.ru/storage/mediabank/2%20-%20%D0%98%D0%90%D0%9C%20%D0%A2%D0%A3%D0%A0%D0%98%D0%97%D0%9C%20%D0%B3%D0%BE%D0%B4%D0%BE%D0%B2%D0%BE%D0%B9%202024.pdf"
      }
    },
    "Советский": {
      "type": "Посёлок городского типа",
      "majorRoadKm": 1,
      "source": "https://ru.wikipedia.org/wiki/Советский_(Крым)",
      "population": 9498,
      "year": 2021
    },
    "Судак": {
      "type": "Город",
      "majorRoadKm": 26,
      "source": "https://ru.wikipedia.org/wiki/Судак_(город)",
      "population": 17268,
      "year": 2025,
      "tourism": {
        "text": "На округ Судак пришлось 4,2% всех гостей, учтённых коллективными средствами размещения Республики Крым в 2024 году. Показатель отражает долю размещённых гостей по муниципалитету.",
        "label": "Крымстат, «Туризм», муниципальная разбивка за 2024 год",
        "url": "https://82.rosstat.gov.ru/storage/mediabank/2%20-%20%D0%98%D0%90%D0%9C%20%D0%A2%D0%A3%D0%A0%D0%98%D0%97%D0%9C%20%D0%B3%D0%BE%D0%B4%D0%BE%D0%B2%D0%BE%D0%B9%202024.pdf"
      }
    },
    "Черноморское": {
      "type": "Посёлок городского типа",
      "majorRoadKm": 53,
      "source": "https://ru.wikipedia.org/wiki/Черноморское",
      "population": 11581,
      "year": 2021
    }
  },
  "astrakhan": {
    "Астрахань": {
      "type": "Город",
      "majorRoadKm": 2,
      "source": "https://ru.wikipedia.org/wiki/Астрахань",
      "population": 465990,
      "year": 2025,
      "road": {
        "text": "По муниципальной концепции развития, на конец 2024 года из 888 км уличной сети около 420 км имели асфальтобетонное покрытие, остальные 468 км — щебёночное или грунтовое.",
        "url": "https://base.garant.ru/412308338/"
      }
    },
    "Ахтубинск": {
      "type": "Город",
      "majorRoadKm": 17,
      "source": "https://ru.wikipedia.org/wiki/Ахтубинск",
      "population": 34873,
      "year": 2025
    },
    "Володарский": {
      "type": "Посёлок",
      "majorRoadKm": 16,
      "source": "https://ru.wikipedia.org/wiki/Володарский_(Астраханская_область)",
      "population": 11158,
      "year": 2025
    },
    "Енотаевка": {
      "type": "Село",
      "majorRoadKm": 3,
      "source": "https://ru.wikipedia.org/wiki/Енотаевка",
      "population": 8140,
      "year": 2021
    },
    "Знаменск": {
      "type": "Город",
      "majorRoadKm": 30,
      "source": "https://ru.wikipedia.org/wiki/Знаменск_(Астраханская_область)",
      "population": 23487,
      "year": 2025
    },
    "Икряное": {
      "type": "Село",
      "environment": {
        "text": "Открытие Петропавловского сквера.",
        "url": "https://infoastra.ru/?action=view&id=71866&module=articles"
      },
      "majorRoadKm": 0,
      "source": "https://ru.wikipedia.org/wiki/Икряное",
      "population": 10452,
      "year": 2021
    },
    "Камызяк": {
      "type": "Город",
      "majorRoadKm": 20,
      "source": "https://ru.wikipedia.org/wiki/Камызяк",
      "population": 15912,
      "year": 2025
    },
    "Красный Яр": {
      "type": "Село",
      "majorRoadKm": 0,
      "source": "https://ru.wikipedia.org/wiki/Красный_Яр_(Астраханская_область)",
      "population": 12254,
      "year": 2021
    },
    "Лиман": {
      "type": "Рабочий посёлок",
      "majorRoadKm": 4,
      "source": "https://ru.wikipedia.org/wiki/Лиман_(Астраханская_область)",
      "population": 8742,
      "year": 2025
    },
    "Нариманов": {
      "type": "Город",
      "majorRoadKm": 0
    },
    "Началово": {
      "type": "Село",
      "road": {
        "text": "Ремонт дороги в селе после проверки прокуратуры.",
        "url": "https://astrakhannews.ru/incident/2026/10/12/51351.html"
      },
      "majorRoadKm": 9,
      "source": "https://ru.wikipedia.org/wiki/Началово",
      "population": 12459,
      "year": 2021
    },
    "Харабали": {
      "type": "Город",
      "majorRoadKm": 26,
      "source": "https://ru.wikipedia.org/wiki/Харабали",
      "population": 18073,
      "year": 2025
    },
    "Чёрный Яр": {
      "type": "Село",
      "majorRoadKm": 2,
      "source": "https://ru.wikipedia.org/wiki/Чёрный_Яр",
      "population": 6775,
      "year": 2021
    }
  },
  "rostov": {
    "Ростов-на-Дону": {
      "type": "Город",
      "tourism": {
        "text": "964,4 тыс. человек за 2025 год. Оценка департамента экономики города, опубликованная в мае 2026 года.",
        "label": "Департамент экономики Ростова-на-Дону, «Коммерсантъ»",
        "url": "https://www.kommersant.ru/doc/8690773"
      },
      "majorRoadKm": 6,
      "source": "https://ru.wikipedia.org/wiki/Ростов-на-Дону",
      "population": 1143123,
      "year": 2025,
      "quality": {
        "score": 238,
        "url": "https://rostov.aif.ru/society/details/20-gorodov-rostovskoy-oblasti-voshli-v-chislo-komfortnyh-dlya-zhizni"
      }
    },
    "Таганрог": {
      "type": "Город",
      "majorRoadKm": 8,
      "source": "https://ru.wikipedia.org/wiki/Таганрог",
      "population": 240055,
      "year": 2025,
      "quality": {
        "score": 245,
        "url": "https://rostov.aif.ru/society/details/20-gorodov-rostovskoy-oblasti-voshli-v-chislo-komfortnyh-dlya-zhizni"
      }
    },
    "Азов": {
      "type": "Город",
      "road": {
        "text": "Ремонт нескольких городских дорог.",
        "url": "https://azov.info/new/111397/"
      },
      "tourism": {
        "text": "Около 300 тыс. экскурсантов за 2024 год в городе Азове. Показатель характеризует экскурсионный спрос. Число ночёвок учитывается отдельно.",
        "label": "РБК Ростов",
        "url": "https://rostov.rbc.ru/rostov/freenews/67c18d789a79472a615c202e"
      },
      "majorRoadKm": 18,
      "source": "https://ru.wikipedia.org/wiki/Азов",
      "population": 79872,
      "year": 2025,
      "quality": {
        "score": 235,
        "url": "https://rostov.aif.ru/society/details/20-gorodov-rostovskoy-oblasti-voshli-v-chislo-komfortnyh-dlya-zhizni"
      }
    },
    "Аксай": {
      "type": "Город",
      "majorRoadKm": 5,
      "source": "https://ru.wikipedia.org/wiki/Аксай_(Ростовская_область)",
      "population": 49004,
      "year": 2025,
      "quality": {
        "score": 246,
        "url": "https://rostov.aif.ru/society/details/20-gorodov-rostovskoy-oblasti-voshli-v-chislo-komfortnyh-dlya-zhizni"
      }
    },
    "Багаевская": {
      "type": "Станица",
      "majorRoadKm": 32,
      "source": "https://ru.wikipedia.org/wiki/Багаевская",
      "population": 13587,
      "year": 2021
    },
    "Батайск": {
      "type": "Город",
      "majorRoadKm": 2,
      "source": "https://ru.wikipedia.org/wiki/Батайск",
      "population": 125378,
      "year": 2025
    },
    "Белая Калитва": {
      "type": "Город",
      "road": {
        "text": "Открытие движения на участке направления Шахты — Белая Калитва.",
        "url": "https://hotrostovnews.ru/news/52083.html"
      },
      "majorRoadKm": 3,
      "source": "https://ru.wikipedia.org/wiki/Белая_Калитва",
      "population": 38597,
      "year": 2025
    },
    "Боковская": {
      "type": "Станица",
      "majorRoadKm": 87,
      "source": "https://ru.wikipedia.org/wiki/Боковская",
      "population": 4832,
      "year": 2010
    },
    "Большая Мартыновка": {
      "type": "Слобода",
      "majorRoadKm": 98,
      "source": "https://ru.wikipedia.org/wiki/Большая_Мартыновка",
      "population": 6158,
      "year": 2010
    },
    "Весёлый": {
      "type": "Посёлок",
      "majorRoadKm": 57
    },
    "Вёшенская": {
      "type": "Станица",
      "road": {
        "text": "Ремонт участка дороги из Миллерово в Шолоховском районе.",
        "url": "https://www.kommersant.ru/doc/8974880"
      },
      "majorRoadKm": 83,
      "source": "https://ru.wikipedia.org/wiki/Вёшенская",
      "population": 9261,
      "year": 2010
    },
    "Волгодонск": {
      "type": "Город",
      "environment": {
        "text": "Обновление бульвара у сквера «Дружба».",
        "url": "https://www.anppt.ru/novosti/v-volgodonske-torzhestvenno-otkryli-obnovlennyy-bulvar-vdol-skvera-druzhba/"
      },
      "majorRoadKm": 96,
      "source": "https://ru.wikipedia.org/wiki/Волгодонск",
      "population": 162908,
      "year": 2025
    },
    "Глубокий": {
      "type": "Рабочий посёлок",
      "majorRoadKm": 1,
      "source": "https://ru.wikipedia.org/wiki/Глубокий_(Ростовская_область)",
      "population": 7787,
      "year": 2025
    },
    "Гуково": {
      "type": "Город",
      "majorRoadKm": 23,
      "source": "https://ru.wikipedia.org/wiki/Гуково",
      "population": 58316,
      "year": 2025
    },
    "Донецк": {
      "type": "Город",
      "majorRoadKm": 1,
      "source": "https://ru.wikipedia.org/wiki/Донецк_(Ростовская_область)",
      "population": 45334,
      "year": 2025
    },
    "Дубовское": {
      "type": "Село",
      "road": {
        "text": "Ремонт дороги, ведущей к селу Дубовское.",
        "url": "https://www.kommersant.ru/doc/9060784"
      },
      "majorRoadKm": 108,
      "source": "https://ru.wikipedia.org/wiki/Дубовское_(Ростовская_область)",
      "population": 8544,
      "year": 2010
    },
    "Егорлыкская": {
      "type": "Станица",
      "majorRoadKm": 2,
      "source": "https://ru.wikipedia.org/wiki/Егорлыкская",
      "population": 14602,
      "year": 2021
    },
    "Заветное": {
      "type": "Село",
      "majorRoadKm": 39,
      "source": "https://ru.wikipedia.org/wiki/Заветное_(Ростовская_область)",
      "population": 6259,
      "year": 2021
    },
    "Зверево": {
      "type": "Город",
      "road": {
        "text": "Ямочный ремонт на городских дорогах.",
        "url": "https://hotrostovnews.ru/news/54388.html"
      },
      "majorRoadKm": 9,
      "source": "https://ru.wikipedia.org/wiki/Зверево",
      "population": 18246,
      "year": 2025
    },
    "Зерноград": {
      "type": "Город",
      "majorRoadKm": 38,
      "source": "https://ru.wikipedia.org/wiki/Зерноград",
      "population": 23305,
      "year": 2025
    },
    "Зимовники": {
      "type": "Посёлок",
      "majorRoadKm": 132,
      "source": "https://ru.wikipedia.org/wiki/Зимовники_(Ростовская_область)",
      "population": 18070,
      "year": 2010
    },
    "Кагальницкая": {
      "type": "Станица",
      "majorRoadKm": 34,
      "source": "https://ru.wikipedia.org/wiki/Кагальницкая",
      "population": 6831,
      "year": 2010
    },
    "Казанская": {
      "type": "Станица",
      "majorRoadKm": 44,
      "source": "https://ru.wikipedia.org/wiki/Казанская_(Ростовская_область)",
      "population": 4721,
      "year": 2010
    },
    "Каменоломни": {
      "type": "Рабочий посёлок",
      "road": {
        "text": "Ремонт подъезда к Каменоломням.",
        "url": "https://novostirostov.ru/news/2534296/"
      },
      "majorRoadKm": 9,
      "source": "https://ru.wikipedia.org/wiki/Каменоломни_(рабочий_посёлок)",
      "population": 12327,
      "year": 2021
    },
    "Каменск-Шахтинский": {
      "type": "Город",
      "majorRoadKm": 3,
      "source": "https://ru.wikipedia.org/wiki/Каменск-Шахтинский",
      "population": 82425,
      "year": 2025
    },
    "Кашары": {
      "type": "Слобода",
      "road": {
        "text": "Ремонт примерно 1,5 км дороги в Кашарах.",
        "url": "https://kasharynews.ru/remont-dorogi-v-kasharah-idet-po-planu/"
      },
      "majorRoadKm": 32,
      "source": "https://ru.wikipedia.org/wiki/Кашары_(Ростовская_область)",
      "population": 6529,
      "year": 2010
    },
    "Константиновск": {
      "type": "Город",
      "environment": {
        "text": "Благоустройство Георгиевского парка.",
        "url": "https://don24.ru/rubric/obschestvo/v-konstantinovske-blagoustroili-georgievskiy-park.html"
      },
      "road": {
        "text": "Ремонт городской дороги после проверки прокуратуры.",
        "url": "https://don24.ru/rubric/transport/dorogu-v-konstantinovske-otremontirovali-posle-vmeshatelstva-prokuratury.html"
      },
      "majorRoadKm": 72,
      "source": "https://ru.wikipedia.org/wiki/Константиновск",
      "population": 16859,
      "year": 2025
    },
    "Красный Сулин": {
      "type": "Город",
      "majorRoadKm": 10,
      "source": "https://ru.wikipedia.org/wiki/Красный_Сулин",
      "population": 34694,
      "year": 2025
    },
    "Куйбышево": {
      "type": "Село",
      "road": {
        "text": "Ремонт двух улиц в селе.",
        "url": "https://mius-media.ru/v-sele-kujbyshevo-posle-vmeshatelstva-prokuratury-otremontirovali-dorogi-na-dvuh-ulicah"
      },
      "majorRoadKm": 1
    },
    "Матвеев Курган": {
      "type": "Посёлок",
      "majorRoadKm": 30,
      "source": "https://ru.wikipedia.org/wiki/Матвеев_Курган",
      "population": 13991,
      "year": 2021
    },
    "Миллерово": {
      "type": "Город",
      "majorRoadKm": 5,
      "source": "https://ru.wikipedia.org/wiki/Миллерово",
      "population": 34246,
      "year": 2025
    },
    "Милютинская": {
      "type": "Станица",
      "majorRoadKm": 30,
      "source": "https://ru.wikipedia.org/wiki/Милютинская",
      "population": 2518,
      "year": 2010
    },
    "Морозовск": {
      "type": "Город",
      "environment": {
        "text": "Ремонт стоянки на улице Подтелкова.",
        "url": "https://hotrostovnews.ru/news/53841.html"
      },
      "road": {
        "text": "Ремонт стоянки на улице Подтелкова.",
        "url": "https://hotrostovnews.ru/news/53841.html"
      },
      "majorRoadKm": 3,
      "source": "https://ru.wikipedia.org/wiki/Морозовск",
      "population": 23753,
      "year": 2025
    },
    "Новочеркасск": {
      "type": "Город",
      "road": {
        "text": "Обновление подъездной дороги со стороны Аксайского района.",
        "url": "https://now61.ru/news/20261123/v-aksayskom-rayone-zavershen-remont-uchastka-dorogi-do-novocherkasska"
      },
      "majorRoadKm": 9,
      "source": "https://ru.wikipedia.org/wiki/Новочеркасск",
      "population": 161060,
      "year": 2025
    },
    "Новошахтинск": {
      "type": "Город",
      "road": {
        "text": "Ремонт участка подъезда к Новошахтинску.",
        "url": "https://www.kommersant.ru/doc/9060405"
      },
      "majorRoadKm": 1,
      "source": "https://ru.wikipedia.org/wiki/Новошахтинск",
      "population": 100738,
      "year": 2025
    },
    "Обливская": {
      "type": "Станица",
      "majorRoadKm": 7,
      "source": "https://ru.wikipedia.org/wiki/Обливская",
      "population": 9908,
      "year": 2010
    },
    "Орловский": {
      "type": "Посёлок",
      "majorRoadKm": 91,
      "source": "https://ru.wikipedia.org/wiki/Орловский_(Ростовская_область)",
      "population": 15411,
      "year": 2025
    },
    "Песчанокопское": {
      "type": "Село",
      "majorRoadKm": 38,
      "source": "https://ru.wikipedia.org/wiki/Песчанокопское",
      "population": 10593,
      "year": 2010
    },
    "Покровское": {
      "type": "Село",
      "majorRoadKm": 14,
      "source": "https://ru.wikipedia.org/wiki/Покровское_(Ростовская_область)",
      "population": 11842,
      "year": 2021
    },
    "Пролетарск": {
      "type": "Город",
      "majorRoadKm": 61,
      "source": "https://ru.wikipedia.org/wiki/Пролетарск_(Ростовская_область)",
      "population": 18750,
      "year": 2025
    },
    "Ремонтное": {
      "type": "Село",
      "majorRoadKm": 45,
      "source": "https://ru.wikipedia.org/wiki/Ремонтное",
      "population": 6437,
      "year": 2021
    },
    "Родионово-Несветайская": {
      "type": "Слобода",
      "majorRoadKm": 21,
      "source": "https://ru.wikipedia.org/wiki/Родионово-Несветайская",
      "population": 6207,
      "year": 2021
    },
    "Романовская": {
      "type": "Станица",
      "majorRoadKm": 91,
      "source": "https://ru.wikipedia.org/wiki/Романовская_(Ростовская_область)",
      "population": 8248,
      "year": 2010
    },
    "Сальск": {
      "type": "Город",
      "road": {
        "text": "Ремонт трассы со стороны Котельниково.",
        "url": "https://tvgram.ru/Yuri_Slusar/7843"
      },
      "majorRoadKm": 43,
      "source": "https://ru.wikipedia.org/wiki/Сальск",
      "population": 56605,
      "year": 2025
    },
    "Семикаракорск": {
      "type": "Город",
      "environment": {
        "text": "Открытие центрального парка после благоустройства.",
        "url": "https://don24.ru/rubric/obschestvo/posle-blagoustroystva-otkrylsya-centralnyy-park-v-semikarakorske.html"
      },
      "road": {
        "text": "Ремонт участка дороги Ростов — Семикаракорск — Волгодонск в Багаевском районе.",
        "url": "https://now61.ru/news/20260914/v-bagaevskom-rayone-dosrochno-zavershili-remont-uchastka-dorogi-rostov-semikarakorsk-volgodonsk"
      },
      "majorRoadKm": 56,
      "source": "https://ru.wikipedia.org/wiki/Семикаракорск",
      "population": 21106,
      "year": 2025
    },
    "Советская": {
      "type": "Станица",
      "majorRoadKm": 64,
      "source": "https://ru.wikipedia.org/wiki/Советская_(Ростовская_область)",
      "population": 2279,
      "year": 2010
    },
    "Тарасовский": {
      "type": "Посёлок",
      "majorRoadKm": 3,
      "source": "https://ru.wikipedia.org/wiki/Тарасовский",
      "population": 9017,
      "year": 2010
    },
    "Тацинская": {
      "type": "Станица",
      "majorRoadKm": 4,
      "source": "https://ru.wikipedia.org/wiki/Тацинская",
      "population": 9144,
      "year": 2021
    },
    "Усть-Донецкий": {
      "type": "Рабочий посёлок",
      "majorRoadKm": 55,
      "source": "https://ru.wikipedia.org/wiki/Усть-Донецкий",
      "population": 9960,
      "year": 2025
    },
    "Целина": {
      "type": "Посёлок",
      "majorRoadKm": 5,
      "source": "https://ru.wikipedia.org/wiki/Целина_(Ростовская_область)",
      "population": 10154,
      "year": 2025
    },
    "Цимлянск": {
      "type": "Город",
      "road": {
        "text": "Ремонт участка на направлении к Морозовску.",
        "url": "https://bloknot-volgodonsk.ru/news/dorogu-na-morozovsk-zavershili-remontirovat-pod-ts"
      },
      "majorRoadKm": 83,
      "source": "https://ru.wikipedia.org/wiki/Цимлянск",
      "population": 14602,
      "year": 2025
    },
    "Чалтырь": {
      "type": "Село",
      "road": {
        "text": "Открытие подъезда от трассы Р-280 после ремонта.",
        "url": "https://oooyds.ru/novosti/doroga-ot-trassy-r-280-novorossiya-do-chaltyrya-otkryta-posle-remonta"
      },
      "majorRoadKm": 1,
      "source": "https://ru.wikipedia.org/wiki/Чалтырь",
      "population": 15334,
      "year": 2010
    },
    "Чертково": {
      "type": "Посёлок",
      "majorRoadKm": 30,
      "source": "https://ru.wikipedia.org/wiki/Чертково_(Ростовская_область)",
      "population": 10814,
      "year": 2010
    },
    "Шахты": {
      "type": "Город",
      "road": {
        "text": "Ремонт участка трассы к Белой Калитве в Октябрьском районе.",
        "url": "https://cityreporter.ru/v-oktyabrskom-rajone-zavershili-remont-pochti-vosmi-kilometrov-dorogi-shahty-belaya-kalitva/"
      },
      "majorRoadKm": 7,
      "source": "https://ru.wikipedia.org/wiki/Шахты",
      "population": 219111,
      "year": 2025
    }
  },
  "volgograd": {
    "Волгоград": {
      "type": "Город",
      "majorRoadKm": 1,
      "source": "https://ru.wikipedia.org/wiki/Волгоград",
      "population": 1012219,
      "year": 2025,
      "tourism": {
        "text": "В 2025 году турпоток в город составил 1,7 млн человек по оценке городской администрации.",
        "label": "Администрация Волгограда",
        "url": "https://volgadmin.ru/d/branches/smi/news/i30028"
      }
    },
    "Волжский": {
      "type": "Город",
      "environment": {
        "text": "Завершение работ в трёх общественных пространствах города.",
        "url": "https://gazeta-vp.ru/v-volzhskom-zavershilos-blagoustrojstvo-tryoh-znakovyh-obektov/"
      },
      "majorRoadKm": 13,
      "source": "https://ru.wikipedia.org/wiki/Волжский",
      "population": 313034,
      "year": 2025
    },
    "Алексеевская": {
      "type": "Станица",
      "majorRoadKm": 41,
      "source": "https://ru.wikipedia.org/wiki/Алексеевская_(Волгоградская_область)",
      "population": 3677,
      "year": 2021
    },
    "Быково": {
      "type": "Рабочий посёлок",
      "majorRoadKm": 12,
      "source": "https://ru.wikipedia.org/wiki/Быково_(Волгоградская_область)",
      "population": 6870,
      "year": 2025
    },
    "Городище": {
      "type": "Рабочий посёлок",
      "majorRoadKm": 1,
      "source": "https://ru.wikipedia.org/wiki/Городище_(Волгоградская_область)",
      "population": 23028,
      "year": 2025
    },
    "Даниловка": {
      "type": "Рабочий посёлок",
      "majorRoadKm": 71,
      "source": "https://ru.wikipedia.org/wiki/Даниловка_(Волгоградская_область)",
      "population": 3894,
      "year": 2025
    },
    "Дубовка": {
      "type": "Город",
      "environment": {
        "text": "Изменения на городской набережной.",
        "url": "https://vlg.aif.ru/society/jkh/kak-preobrazilas-naberezhnaya-v-dubovke-pokazali-volgogradcam"
      },
      "majorRoadKm": 1,
      "source": "https://ru.wikipedia.org/wiki/Дубовка",
      "population": 14491,
      "year": 2025
    },
    "Елань": {
      "type": "Рабочий посёлок",
      "majorRoadKm": 61,
      "source": "https://ru.wikipedia.org/wiki/Елань_(Волгоградская_область)",
      "population": 13600,
      "year": 2025
    },
    "Жирновск": {
      "type": "Город",
      "environment": {
        "text": "Благоустройство Комсомольского парка.",
        "url": "https://sdelanounas.ru/blogs/99066/"
      },
      "majorRoadKm": 57,
      "source": "https://ru.wikipedia.org/wiki/Жирновск",
      "population": 15003,
      "year": 2025
    },
    "Иловля": {
      "type": "Рабочий посёлок",
      "majorRoadKm": 4,
      "source": "https://ru.wikipedia.org/wiki/Иловля_(Волгоградская_область)",
      "population": 10034,
      "year": 2025
    },
    "Калач-на-Дону": {
      "type": "Город",
      "majorRoadKm": 2,
      "source": "https://ru.wikipedia.org/wiki/Калач-на-Дону",
      "population": 23398,
      "year": 2025
    },
    "Камышин": {
      "type": "Город",
      "environment": {
        "text": "Итоги городского благоустройства за 2024 год.",
        "url": "https://xn--b1ats.xn--80asehdb/feed/blagoustr/v-kamyshine-volgogradskoy-oblasti-zaversheny-obekty-blagoustroystva-2024-7917241388.html"
      },
      "majorRoadKm": 3,
      "source": "https://ru.wikipedia.org/wiki/Камышин",
      "population": 104220,
      "year": 2025
    },
    "Клетская": {
      "type": "Станица",
      "majorRoadKm": 54,
      "source": "https://ru.wikipedia.org/wiki/Клетская",
      "population": 4975,
      "year": 2021
    },
    "Котельниково": {
      "type": "Город",
      "majorRoadKm": 81,
      "source": "https://ru.wikipedia.org/wiki/Котельниково",
      "population": 22056,
      "year": 2025
    },
    "Котово": {
      "type": "Город",
      "majorRoadKm": 39,
      "source": "https://ru.wikipedia.org/wiki/Котово_(Волгоградская_область)",
      "population": 19955,
      "year": 2025
    },
    "Кумылженская": {
      "type": "Станица",
      "environment": {
        "text": "Открытие краеведческого музея после капитального ремонта.",
        "url": "https://www.interfax-russia.ru/tourism/news/kraevedcheskiy-muzey-otkrylsya-v-volgogradskoy-stanice-kumylzhenskaya-posle-kapremonta"
      },
      "majorRoadKm": 46,
      "source": "https://ru.wikipedia.org/wiki/Кумылженская",
      "population": 7342,
      "year": 2021
    },
    "Ленинск": {
      "type": "Город",
      "majorRoadKm": 31,
      "source": "https://ru.wikipedia.org/wiki/Ленинск_(Волгоградская_область)",
      "population": 12796,
      "year": 2025
    },
    "Михайловка": {
      "type": "Город",
      "majorRoadKm": 5
    },
    "Нехаевская": {
      "type": "Станица",
      "majorRoadKm": 63,
      "source": "https://ru.wikipedia.org/wiki/Нехаевская",
      "population": 4050,
      "year": 2021
    },
    "Николаевск": {
      "type": "Город",
      "majorRoadKm": 9,
      "source": "https://ru.wikipedia.org/wiki/Николаевск_(Волгоградская_область)",
      "population": 13200,
      "year": 2025
    },
    "Новоаннинский": {
      "type": "Город",
      "majorRoadKm": 1,
      "source": "https://ru.wikipedia.org/wiki/Новоаннинский",
      "population": 14708,
      "year": 2025
    },
    "Новониколаевский": {
      "type": "Рабочий посёлок",
      "majorRoadKm": 4,
      "source": "https://ru.wikipedia.org/wiki/Новониколаевский_(Волгоградская_область)",
      "population": 9059,
      "year": 2021
    },
    "Октябрьский": {
      "type": "Рабочий посёлок",
      "environment": {
        "text": "Открытие центра культуры и кино после реконструкции.",
        "url": "https://volganet.net/2026/76098/"
      },
      "majorRoadKm": 60,
      "source": "https://ru.wikipedia.org/wiki/Октябрьский_(Октябрьский_район,_Волгоградская_область)",
      "population": 6103,
      "year": 2025
    },
    "Ольховка": {
      "type": "Село",
      "road": {
        "text": "Ремонт дороги Ольховка — Гурово — Новоольховка.",
        "url": "https://riac34.ru/news/175962/"
      },
      "majorRoadKm": 44,
      "source": "https://ru.wikipedia.org/wiki/Ольховка_(Волгоградская_область)",
      "population": 5444,
      "year": 2021
    },
    "Палласовка": {
      "type": "Город",
      "majorRoadKm": 108,
      "source": "https://ru.wikipedia.org/wiki/Палласовка",
      "population": 14456,
      "year": 2025
    },
    "Преображенская": {
      "type": "Станица",
      "majorRoadKm": 36,
      "source": "https://ru.wikipedia.org/wiki/Преображенская_(Волгоградская_область)",
      "population": 4889,
      "year": 2021
    },
    "Рудня": {
      "type": "Рабочий посёлок",
      "majorRoadKm": 67,
      "source": "https://ru.wikipedia.org/wiki/Рудня_(Волгоградская_область)",
      "population": 5767,
      "year": 2025
    },
    "Светлый Яр": {
      "type": "Рабочий посёлок",
      "environment": {
        "text": "Памятный знак «Рубеж Сталинградской доблести».",
        "url": "https://volgograd-trv.ru/news/obschestvo/111292-pamjatnyj-znak-rubezh-stalingradskoj-doblesti-otkryli-v-rabochem-poselke-svetlyj-jar.html"
      },
      "majorRoadKm": 1,
      "source": "https://ru.wikipedia.org/wiki/Светлый_Яр",
      "population": 10592,
      "year": 2025
    },
    "Серафимович": {
      "type": "Город",
      "majorRoadKm": 59,
      "source": "https://ru.wikipedia.org/wiki/Серафимович_(город)",
      "population": 8389,
      "year": 2025
    },
    "Средняя Ахтуба": {
      "type": "Рабочий посёлок",
      "majorRoadKm": 22,
      "source": "https://ru.wikipedia.org/wiki/Средняя_Ахтуба",
      "population": 14286,
      "year": 2025
    },
    "Старая Полтавка": {
      "type": "Село",
      "majorRoadKm": 72,
      "source": "https://ru.wikipedia.org/wiki/Старая_Полтавка",
      "population": 4042,
      "year": 2021
    },
    "Суровикино": {
      "type": "Город",
      "majorRoadKm": 3,
      "source": "https://ru.wikipedia.org/wiki/Суровикино",
      "population": 18909,
      "year": 2025
    },
    "Урюпинск": {
      "type": "Город",
      "majorRoadKm": 27,
      "source": "https://ru.wikipedia.org/wiki/Урюпинск",
      "population": 34783,
      "year": 2025
    },
    "Фролово": {
      "type": "Город",
      "environment": {
        "text": "Благоустройство улицы 40 лет Октября.",
        "url": "https://volganet.net/2026/78378/"
      },
      "road": {
        "text": "Благоустройство улицы 40 лет Октября.",
        "url": "https://volgograd-trv.ru/news/obschestvo/117252-zavershen-jetap-blagoustrojstva-samoj-protjazhennoj-ulicy-frolovo.html"
      },
      "majorRoadKm": 7,
      "source": "https://ru.wikipedia.org/wiki/Фролово",
      "population": 33933,
      "year": 2025
    },
    "Чернышковский": {
      "type": "Рабочий посёлок",
      "majorRoadKm": 2,
      "source": "https://ru.wikipedia.org/wiki/Чернышковский",
      "population": 3396,
      "year": 2025
    }
  },
  "adygea": {
    "Майкоп": {
      "type": "Город",
      "road": {
        "text": "В 2024 году заменили покрытие примерно на 800 м улицы Гагарина между улицами Пушкина и Пионерской.",
        "url": "https://maikop.ru/news/V-Maykope-zavershilos-blagoustroystvo-ulitsy-Gagarina-/"
      },
      "majorRoadKm": 5,
      "source": "https://ru.wikipedia.org/wiki/Майкоп"
    },
    "Адыгейск": {
      "type": "Город",
      "environment": {
        "text": "Благоустройство двух детских спортивных площадок.",
        "url": "https://adigea.aif.ru/society/details/v-adygeyske-zavershili-blagoustroystvo-dvuh-detsko-sportivnyh-ploshchadok"
      },
      "majorRoadKm": 1,
      "source": "https://ru.wikipedia.org/wiki/Адыгейск",
      "population": 13247,
      "year": 2025
    },
    "Гиагинская": {
      "type": "Станица",
      "majorRoadKm": 16,
      "source": "https://ru.wikipedia.org/wiki/Гиагинская",
      "population": 14338,
      "year": 2024
    },
    "Кошехабль": {
      "type": "Аул",
      "road": {
        "text": "Ремонт участка северного обхода аула.",
        "url": "https://adigea.aif.ru/society/details/v-adygee-zavershen-remont-uchastka-dorogi-severnyy-obhod-a-koshehabl"
      },
      "majorRoadKm": 29,
      "source": "https://ru.wikipedia.org/wiki/Кошехабль",
      "population": 7372,
      "year": 2025
    },
    "Красногвардейское": {
      "type": "Село",
      "majorRoadKm": 4,
      "source": "https://ru.wikipedia.org/wiki/Красногвардейское_(Адыгея)",
      "population": 9367,
      "year": 2024
    },
    "Понежукай": {
      "type": "Аул",
      "environment": {
        "text": "Обновление территории у районного дома культуры.",
        "url": "https://adigeatoday.ru/news/53511.html"
      },
      "majorRoadKm": 14,
      "source": "https://ru.wikipedia.org/wiki/Понежукай",
      "population": 3401,
      "year": 2024
    },
    "Тахтамукай": {
      "type": "Аул",
      "road": {
        "text": "Ремонт участка дороги в сторону Отрадного.",
        "url": "https://www.kommersant.ru/doc/8208994"
      },
      "majorRoadKm": 4,
      "source": "https://ru.wikipedia.org/wiki/Тахтамукай",
      "population": 6150,
      "year": 2024
    },
    "Тульский": {
      "type": "Посёлок",
      "majorRoadKm": 12
    },
    "Хакуринохабль": {
      "type": "Аул",
      "majorRoadKm": 37,
      "source": "https://ru.wikipedia.org/wiki/Хакуринохабль",
      "population": 3879,
      "year": 2024
    }
  },
  "sevastopol": {
    "Севастополь": {
      "type": "Город",
      "environment": {
        "text": "Спортивная площадка и зона отдыха в сквере на улице Гоголя.",
        "url": "https://vesti92.ru/2026/09/19/skver-na-gogolja-preobrazilsja-novaja-sportploschadka-begovaja-dorozhka-i-zona-otdyha.html"
      },
      "road": {
        "text": "Ремонт уличной сети в микрорайоне на Северной стороне.",
        "url": "https://nia-sevastopol.ru/news/authority/20912.html"
      },
      "majorRoadKm": 8,
      "source": "https://ru.wikipedia.org/wiki/Севастополь"
    },
    "Инкерман": {
      "type": "Город",
      "environment": {
        "text": "Обновление сквера Ветеранов.",
        "url": "https://sev.tv/amp/news/92399.html"
      },
      "majorRoadKm": 3,
      "source": "https://ru.wikipedia.org/wiki/Инкерман",
      "population": 13604,
      "year": 2025
    },
    "Андреевка": {
      "type": "Село",
      "environment": {
        "text": "Благоустройство набережной села.",
        "url": "https://sev.tv/news/110430.html"
      },
      "majorRoadKm": 20,
      "source": "https://ru.wikipedia.org/wiki/Андреевка_(село,_Севастополь)",
      "population": 1498,
      "year": 2014
    },
    "Балаклава": {
      "type": "Город",
      "environment": {
        "text": "Открытие сквера в Балаклаве.",
        "url": "https://sev.tv/news/95674.html"
      },
      "majorRoadKm": 4
    },
    "Верхнесадовое": {
      "type": "Село",
      "road": {
        "text": "Ремонт улицы Гагарина в селе.",
        "url": "https://orlinoe.org/news/v-sevastopole-zavershili-remont-ulitsy-gagarina-v-sele-verkhnesadovoe/"
      },
      "majorRoadKm": 2,
      "source": "https://ru.wikipedia.org/wiki/Верхнесадовое",
      "population": 3200,
      "year": 2021
    },
    "Кача": {
      "type": "Посёлок",
      "road": {
        "text": "Ремонт улицы Авиаторов в посёлке.",
        "url": "https://stv92.ru/news/news-13932/"
      },
      "majorRoadKm": 18,
      "source": "https://ru.wikipedia.org/wiki/Кача_(Севастополь)",
      "population": 6020,
      "year": 2025
    },
    "Орлиное": {
      "type": "Село",
      "majorRoadKm": 4,
      "source": "https://ru.wikipedia.org/wiki/Орлиное_(село,_Севастополь)",
      "population": 2106,
      "year": 2014
    },
    "Терновка": {
      "type": "Село",
      "road": {
        "text": "Ремонт дороги в селе Терновка.",
        "url": "https://nia-sevastopol.ru/news/economy/19546.html"
      },
      "majorRoadKm": 8,
      "source": "https://ru.wikipedia.org/wiki/Терновка_(село,_Севастополь)",
      "population": 3793,
      "year": 2021
    }
  },
  "kalmykia": {
    "Элиста": {
      "type": "Город",
      "road": {
        "text": "Ремонт 3,7 км дороги в направлении Ремонтного.",
        "url": "https://dorogistrany.ru/news/read/v-respublike-kalmykiya-zavershen-remont-37-km-trassy-elista--remontnoe"
      },
      "majorRoadKm": 3,
      "source": "https://ru.wikipedia.org/wiki/Элиста",
      "population": 104082,
      "year": 2025,
      "quality": {
        "score": 198,
        "url": "https://www.urbaneconomics.ru/sites/default/files/pravila_blagoustroistva_v_gorodah_rossiiskoi_federacii_kratkaya_versiya.pdf"
      }
    },
    "Лагань": {
      "type": "Город",
      "majorRoadKm": 24,
      "source": "https://ru.wikipedia.org/wiki/Лагань",
      "population": 13756,
      "year": 2025
    },
    "Большой Царын": {
      "type": "Посёлок",
      "majorRoadKm": 52,
      "source": "https://ru.wikipedia.org/wiki/Большой_Царын",
      "population": 4338,
      "year": 2025
    },
    "Городовиковск": {
      "type": "Город",
      "majorRoadKm": 71,
      "source": "https://ru.wikipedia.org/wiki/Городовиковск",
      "population": 8161,
      "year": 2025
    },
    "Ики-Бурул": {
      "type": "Посёлок",
      "environment": {
        "text": "Открытие Путиловского парка.",
        "url": "https://www.huralrk.ru/news/8550-v-p-iki-burul-otkrylsya-putilovskij-park.html"
      },
      "majorRoadKm": 49,
      "source": "https://ru.wikipedia.org/wiki/Ики-Бурул",
      "population": 3348,
      "year": 2021
    },
    "Кетченеры": {
      "type": "Посёлок",
      "environment": {
        "text": "Открытие сквера памяти Номто Очирова.",
        "url": "https://kalmtv.ru/news/6360-v-poselke-ketchenery-otkryli-skver-pamyati-nomto-ochirova"
      },
      "majorRoadKm": 4,
      "source": "https://ru.wikipedia.org/wiki/Кетченеры",
      "population": 3242,
      "year": 2021
    },
    "Комсомольский": {
      "type": "Посёлок",
      "majorRoadKm": 61,
      "source": "https://ru.wikipedia.org/wiki/Комсомольский_(Калмыкия)",
      "population": 4261,
      "year": 2021
    },
    "Малые Дербеты": {
      "type": "Село",
      "majorRoadKm": 1,
      "source": "https://ru.wikipedia.org/wiki/Малые_Дербеты",
      "population": 6286,
      "year": 2021
    },
    "Приютное": {
      "type": "Село",
      "majorRoadKm": 1,
      "source": "https://ru.wikipedia.org/wiki/Приютное_(Калмыкия)",
      "population": 5182,
      "year": 2021
    },
    "Садовое": {
      "type": "Село",
      "road": {
        "text": "Ремонт моста по направлению к Абганерово.",
        "url": "https://news.mail.ru/society/72733208/"
      },
      "majorRoadKm": 2,
      "source": "https://ru.wikipedia.org/wiki/Садовое_(Калмыкия)",
      "population": 5775,
      "year": 2021
    },
    "Троицкое": {
      "type": "Село",
      "majorRoadKm": 1,
      "source": "https://ru.wikipedia.org/wiki/Троицкое_(Калмыкия)",
      "population": 13151,
      "year": 2025
    },
    "Цаган Аман": {
      "type": "Посёлок",
      "road": {
        "text": "Ремонт трассы Утта — Юста — Цаган Аман.",
        "url": "https://www.kalmtv.ru/news/6015-zavershen-remont-trassy-utta-yusta-tsagan-aman"
      },
      "majorRoadKm": 0,
      "source": "https://ru.wikipedia.org/wiki/Цаган_Аман",
      "population": 5578,
      "year": 2021
    },
    "Яшалта": {
      "type": "Село",
      "majorRoadKm": 77,
      "source": "https://ru.wikipedia.org/wiki/Яшалта",
      "population": 4253,
      "year": 2025
    },
    "Яшкуль": {
      "type": "Посёлок",
      "majorRoadKm": 0,
      "source": "https://ru.wikipedia.org/wiki/Яшкуль",
      "population": 7763,
      "year": 2021
    }
  }
};

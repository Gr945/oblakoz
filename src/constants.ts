import { Article, Rubriks, FilterType } from "./types";

export const Filters = [
    { id: 1, name: Rubriks.innovation, title: 'Инновации' },
    { id: 2, name: Rubriks.psychology, title: 'Психология' },
    { id: 3, name: Rubriks.edu_change, title: 'Изменения в образовании' },
    { id: 4, name: Rubriks.motivation, title: 'Мотивация' },
    { id: 5, name: Rubriks.analytics, title: 'Аналитика' },
    { id: 6, name: Rubriks.useful_adv, title: 'Полезные советы' },
] as FilterType[];

export const ArticlesList = [
    {
        "id": 4662,
        "title": "Химия в классе: как донести важность науки до школьников",
        "views": 78,
        "href": "himiya-v-klasse-kak-donesti-vazhnost-nauki-do-shkol-nikov",
        "date": new Date("2024-05-31T00:00:00.000Z"),
        "coverSrc": "/api/images/pageBanner/4662/full_1",
        "rubricId": "useful_adv"
    },
    {
        "id": 4658,
        "title": "Какое отношение экология имеет к русскому языку?",
        "views": 174,
        "href": "kakoe-otnoshenie-ekologiya-imeet-k-russkomu-yazyku",
        "date": new Date("2024-05-17T00:00:00.000Z"),
        "coverSrc": "/api/images/pageBanner/4658/full_1",
        "rubricId": "useful_adv"
    },
    {
        "id": 4637,
        "title": "Читательская грамотность на уроках химии",
        "views": 273,
        "href": "chitatel-skaya-gramotnost-na-urokah-himii",
        "date": new Date("2024-04-16T00:00:00.000Z"),
        "coverSrc": "/api/images/pageBanner/4637/full_1",
        "rubricId": "useful_adv"
    },
    {
        "id": 4635,
        "title": "Знаниевые vs Компетентностные задания в цифровых работах",
        "views": 270,
        "href": "znanievye-vs-kompetentnostnye-zadaniya-v-cifrovyh-rabotah",
        "date": new Date("2024-04-02T00:00:00.000Z"),
        "coverSrc": "/api/images/pageBanner/4635/full_1",
        "rubricId": "analytics"
    },
    {
        "id": 4629,
        "title": "ЕГЭ-2024 по географии: стратегия подготовки",
        "views": 378,
        "href": "ege-2024-po-geografii-strategiya-podgotovki",
        "date": new Date("2024-03-19T00:00:00.000Z"),
        "coverSrc": "/api/images/pageBanner/4629/full_1",
        "rubricId": "useful_adv"
    },
    {
        "id": 4600,
        "title": "Гид по подготовке к ЕГЭ-24: разбор заданий по разным предметам",
        "views": 566,
        "href": "gid-po-podgotovke-k-ege-24-razbor-zadanij-po-raznym-predmetam",
        "date": new Date("2024-02-28T00:00:00.000Z"),
        "coverSrc": "/api/images/pageBanner/4600/full_1",
        "rubricId": "edu_change"
    },
    {
        "id": 4597,
        "title": "Изучение теории клонально-селективного иммунитета: работы  П. Эрлиха, Ф.М. Бёрнета, С. Тонегавы",
        "views": 1067,
        "href": "izuchenie-teorii-klonal-no-selektivnogo-immuniteta-raboty-p-erliha-f-m-berneta-s-tonegavy",
        "date": new Date("2024-02-20T00:00:00.000Z"),
        "coverSrc": "/api/images/pageBanner/4597/full_1",
        "rubricId": "useful_adv"
    },
    {
        "id": 4595,
        "title": "Изменения в ОГЭ-2024 по русскому языку ",
        "views": 1162,
        "href": "izmeneniya-v-oge-2024-po-russkomu-yazyku",
        "date": new Date("2024-02-16T00:00:00.000Z"),
        "coverSrc": "/api/images/pageBanner/4595/full_1",
        "rubricId": "useful_adv"
    },
    {
        "id": 4594,
        "title": "Дефицит заданий по новым рабочим программам? Эти цифровые работы могут помочь",
        "views": 268,
        "href": "deficit-zadanij-po-novym-rabochim-programmam-eti-cifrovye-raboty-mogut-pomoch",
        "date": new Date("2024-02-12T00:00:00.000Z"),
        "coverSrc": "/api/images/pageBanner/4594/full_1",
        "rubricId": "edu_change"
    },
    {
        "id": 4593,
        "title": "Зачем нужны задания по химии на поиск информации",
        "views": 252,
        "href": "zachem-nuzhny-zadaniya-po-himii-na-poisk-informacii",
        "date": new Date("2024-02-07T00:00:00.000Z"),
        "coverSrc": "/api/images/pageBanner/4593/full_1",
        "rubricId": "useful_adv"
    },
    {
        "id": 4579,
        "title": "Использование алгоритмов на разных предметах школьной программы",
        "views": 395,
        "href": "ispol-zovanie-algoritmov-na-raznyh-predmetah-shkol-noj-programmy",
        "date": new Date("2024-01-22T00:00:00.000Z"),
        "coverSrc": "/api/images/pageBanner/4579/full_1",
        "rubricId": "useful_adv"
    },
    {
        "id": 4577,
        "title": "Межпредметные связи на уроках русского языка",
        "views": 649,
        "href": "mezhpredmetnye-svyazi-na-urokah-russkogo-yazyka",
        "date": new Date("2024-01-16T00:00:00.000Z"),
        "coverSrc": "/api/images/pageBanner/4577/full_1",
        "rubricId": "useful_adv"
    },
    {
        "id": 4557,
        "title": "Решение задач на закон Харди-Вайнберга",
        "views": 3727,
        "href": "reshenie-zadach-na-zakon-hardi-vajnberga",
        "date": new Date("2023-12-25T00:00:00.000Z"),
        "coverSrc": "/api/images/pageBanner/4557/full_1",
        "rubricId": "useful_adv"
    },
    {
        "id": 4548,
        "title": "Опорные конспекты «Облака знаний» в углублённом изучении географии",
        "views": 470,
        "href": "opornye-konspekty-oblaka-znanij-v-uglublennom-izuchenii-geografii",
        "date": new Date("2023-12-19T00:00:00.000Z"),
        "coverSrc": "/api/images/pageBanner/4548/full_1",
        "rubricId": "useful_adv"
    },
    {
        "id": 4538,
        "title": "Зачем нужна читательская грамотность в физике",
        "views": 417,
        "href": "zachem-nuzhna-chitatel-skaya-gramotnost-v-fizike",
        "date": new Date("2023-12-14T00:00:00.000Z"),
        "coverSrc": "/api/images/pageBanner/4538/full_1",
        "rubricId": "useful_adv"
    },
    {
        "id": 4545,
        "title": "Обучаем нейросеть: зачем в технологический проект привлекается методист по школьному предмету?",
        "views": 359,
        "href": "obuchaem-nejroset-zachem-v-tehnologicheskij-proekt-privlekaetsya-metodist-po-shkol-nomu-predmetu",
        "date": new Date("2023-11-15T00:00:00.000Z"),
        "coverSrc": "/api/images/pageBanner/4545/full_1",
        "rubricId": "innovation"
    },
    {
        "id": 4488,
        "title": "Подборка онлайн-экскурсий по Государственному геологическому музею им. В. И. Вернадского ",
        "views": 395,
        "href": "podborka-onlajn-ekskursij-po-gosudarstvennomu-geologicheskomu-muzeyu-im-v-i-vernadskogo",
        "date": new Date("2023-11-14T00:00:00.000Z"),
        "coverSrc": "/api/images/pageBanner/4488/full_1",
        "rubricId": "innovation"
    },
    {
        "id": 4474,
        "title": "Формирование математической и финансовой грамотности на уроках географии",
        "views": 574,
        "href": "formirovanie-matematicheskoj-i-finansovoj-gramotnosti-na-urokah-geografii",
        "date": new Date("2023-10-23T00:00:00.000Z"),
        "coverSrc": "/api/images/pageBanner/4474/full_1",
        "rubricId": "innovation"
    }
] as Article[]

const API_CONSTS = {
  HOST: "185.104.248.25:3000",
  BOOKS: "books",
  ATHLETES: "athletes",
  SEARCH: "search",
};

const URLS = {
  getEntities: (host, ep = "${endpoint}") =>
    `https://${host}/<span class='warning'>${ep}</span>`,
  getEntitiesQS: (host, ep = "${endpoint}") =>
    `https://${host}/<span class='warning'>${ep}</span>?page=<span class='warning'>\${value}</span>&limit=<span class='warning'>\${value}</span>`,
  getSingleEntity: (host, ep = "${endpoint}") =>
    `https://${host}/<span class='warning'>${ep}</span>/<span class='warning'>\${id}</span>`,
  getSearchedEntity: (host, ep = "${endpoint}") =>
    `https://${host}/<span class='warning'>${ep}</span>?q=<span class='warning'>\${value}</span>`,
  addEntity: (host, ep = "${endpoint}") =>
    `https://${host}/<span class='warning'>${ep}</span>`,
  deleteEntity: (host, ep = "${endpoint}") =>
    `https://${host}/<span class='warning'>${ep}</span>/<span class='success'>\${id}</span>`,
  getLimitedEntities: (host, ep = "${endpoint}") =>
    `https://${host}/<span class='warning'>${ep}</span>?limit=<span class='warning'>10</span>`,
  getPaginatedEntities: (host, ep = "${endpoint}") =>
    `https://${host}/<span class='warning'>${ep}</span>?page=<span class='warning'>2</span>&limit=<span class='warning'>10</span>`,
  getSelectedEntities: (host, ep = "${endpoint}") =>
    `https://${host}/<span class='warning'>${ep}</span>?select=<span class='warning'>value1,value2</span>`,
  getSortedEntities: (host, ep = "${endpoint}") =>
    `https://${host}/<span class='warning'>${ep}</span>?sort=<span class='warning'>\${field}:\${dir}</span>`,
};

const REQUEST_CARD_LIST = [
  {
    id: "getEntities",
    title: "получение всех сущностей по конкретному эндпоинту:",
    method: "get",
    url: (host, ep) => URLS.getEntities(host, ep),
    cls: "btn-outline-danger",
    scheme: {
      req: "req",
      res: "res",
    },
    ReqBtn: '<span class="material-icons-round">rocket_launch</span>',
    ResBtn: '<span class="material-icons-round">description</span>',
    note: false,
  },
  {
    id: "getEntitiesQS",
    title:
      "получение сущностей по конкретному эндпоинту c передачей query-параметров:",
    method: "get",
    url: (host, ep) => URLS.getEntitiesQS(host, ep),
    cls: "btn-outline-danger",
    scheme: {
      req: "req",
      res: "res",
    },
    ReqBtn: '<span class="material-icons-round">rocket_launch</span>',
    ResBtn: '<span class="material-icons-round">description</span>',
    note: false,
  },
  {
    id: "getSingleEntity",
    title: "получение сущности с конкретным идентификатором:",
    method: "get",
    url: (host, ep) => URLS.getSingleEntity(host, ep),
    cls: "btn-outline-danger",
    scheme: {
      req: "req",
      res: "res",
    },
    ReqBtn: '<span class="material-icons-round">rocket_launch</span>',
    ResBtn: '<span class="material-icons-round">description</span>',
    note: false,
  },
  {
    id: "getSearchedEntity",
    title: "поиск всех сущностей в сооответствии с запросом:",
    method: "get",
    url: (host, ep) => URLS.getSearchedEntity(host, ep),
    cls: "btn-outline-danger",
    scheme: {
      req: "req",
      res: "res",
    },
    ReqBtn: '<span class="material-icons-round">rocket_launch</span>',
    ResBtn: '<span class="material-icons-round">description</span>',
    note: false,
  },
  {
    id: "addEntity",
    title: "добавление новой сущности:",
    method: "post",
    url: (host, ep) => URLS.addEntity(host, ep),
    cls: "btn-outline-danger",
    scheme: {
      req: "req",
      res: "res",
    },
    ReqBtn: '<span class="material-icons-round">rocket_launch</span>',
    ResBtn: '<span class="material-icons-round">description</span>',
    note: true,
  },
  {
    id: "deleteEntity",
    title: "удаление сущности с конкретным идентификатором:",
    method: "delete",
    url: (host, ep) => URLS.deleteEntity(host, ep),
    cls: "btn-outline-danger",
    scheme: {
      req: "req",
      res: "res",
    },
    ReqBtn: '<span class="material-icons-round">rocket_launch</span>',
    ResBtn: '<span class="material-icons-round">description</span>',
    note: false,
  },
];

const FEATURES_CARD_LIST = [
  {
    icon: `<span class="material-icons-round">http</span>`,
    text: `Возможность запрашивать разные по тематике данные: <span class="success"> посты, книги, спорт и многое другое!</span>`,
    title: "Многообразие эндпоинтов",
  },
  {
    icon: `<span class="material-icons-round">model_training</span>`,
    text: `Практикуйся и изучай основные <abbr title="Create, Read, Update and Delete operations"
    class="success">CRUD</abbr>-операции: <strong class="success">GET</strong>, <strong class="success">POST</strong>, <strong class="success">DELETE</strong>.`,
    title: "Практика и изучение",
  },
  {
    icon: `<span class="material-icons-round">data_object</span>`,
    text: `Все данные предоставлены в популярном, простом и гибком формате <abbr title="JavaScript Object Notation" class="success">JSON</abbr>!`,
    title: "JSON-данные",
  },
  {
    icon: `<span class="material-icons-round">no_accounts</span>`,
    text: `Получай доступ ко всем данным без <abbr class="success">API-ключа</abbr> и регистрации!`,
    title: "Старт без регистрации",
  },
  {
    icon: `<span class="material-icons-round">html</span>`,
    text: `Возможность быстро протестировать внешний вид приложения, используя данные нашего <abbr class="success">API</abbr>.`,
    title: `Тестирование <abbr class="success">UI</abbr> Вашего приложения`,
  },
  {
    icon: `<span class="material-icons-round">monitor_heart</span>`,
    text: `Способность сервиса выдерживать высокие нагрузки 24 часа в сутки.`,
    title: "Высокая нагрузочная способность",
  },
  {
    icon: `<span class="material-icons-round">error</span>`,
    text: `Удобный модуль обработки пользовательских ошибок с визуализацией невалидных параметров запроса.`,
    title: "Обработка пользовательских ошибок",
  },
  {
    icon: `<span class="material-icons-round">search</span>`,
    text: `Для каждой сущности реализован поиск по множеству полей.`,
    title: "Удобный поиск",
  },
];

const ENTITIES_LIST = [
  {
    href: `./docs.html?endpoint=books`,
    endpoint: `books`,
    icon: `<span class="material-icons-round">cloud</span>`,
  },
  {
    href: `./docs.html?endpoint=athletes`,
    endpoint: `athletes`,
    icon: `<span class="material-icons-round">cloud</span>`,
  },
];

const EXAMPLES_LIST = [
  {
    href: `http://${API_CONSTS.HOST}/${API_CONSTS.BOOKS}`,
    text: `http://hostname/books`,
  },
  {
    href: `http://${API_CONSTS.HOST}/${API_CONSTS.BOOKS}/5`,
    text: `http://hostname/${API_CONSTS.BOOKS}/<span class="warning">5</span>`,
  },
  {
    href: `http://${API_CONSTS.HOST}/${API_CONSTS.ATHLETES}?q=Лионель Месси`,
    text: `http://hostname/${API_CONSTS.ATHLETES}?q=Месси</span>`,
  },
  {
    href: `http://${API_CONSTS.HOST}/${API_CONSTS.BOOKS}?select=title,author,pageCount`,
    text: `http://hostname/${API_CONSTS.BOOKS}<span class="warning">?select=title,author,pageCount</span>`,
  },
  {
    href: `http://${API_CONSTS.HOST}/${API_CONSTS.BOOKS}?sort=pageCount:desc`,
    text: `http://hostname/${API_CONSTS.BOOKS}<span class="warning">?sort=pageCount:desc</span>`,
  },
  {
    href: `http://${API_CONSTS.HOST}/${API_CONSTS.BOOKS}?limit=5&page=3`,
    text: `http://hostname/${API_CONSTS.BOOKS}<span class="warning">?limit=5&page=3</span>`,
  },
];

const MENU_LIST = [
  {
    href: `#features`,
    text: `особенности`,
  },
  {
    href: `#entities`,
    text: `эндпоинты`,
  },
  {
    href: `#requests`,
    text: `запросы`,
  },
  {
    href: `#examples`,
    text: `примеры`,
  },
  {
    href: `#documentation`,
    text: `дока`,
  },
];

const DOCUMENTATION_LIST = [
  {
    href: `/docs.html?endpoint=books`,
    text: `Документация по работе с ресурсом <strong class="warning">'books'</strong>`,
  },
  {
    href: `/docs.html?endpoint=athletes`,
    text: `Документация по работе с ресурсом <strong class="warning">'athletes'</strong>`,
  },
];

const SORTING_WHITE_LIST = {
  books: [
    "id",
    "title",
    "author",
    "genre",
    "publicationYear",
    "isbn",
    "pageCount",
    "publisher",
    "ageRating",
    "price",
    "description",
    "scene",
    "originalLanguage",
    "goodreadsRating",
    "movieTitle",
    "lastUpdated",
  ],
  athletes: [
    "id",
    "fullName",
    "sport",
    "country",
    "age",
    "birthDate",
    "birthPlace",
    "zodiacSign",
    "height",
    "nationality",
    "currentTeam",
    "annualSalary",
    "instagramFollowers",
    "olympics",
    "brandAmbassador",
    "firstVictory",
    "hobbies",
    "lastUpdated",
  ],
};

const POST_REQUIRED_FIELDS = {
  athletes: [
    {
      field: "fullName",
      type: "string",
    },
    {
      field: "sport",
      type: "string",
    },
    {
      field: "country",
      type: "string",
    },
    {
      field: "age",
      type: "integer",
    },
  ],
  books: [
    {
      field: "title",
      type: "string",
    },
    {
      field: "author",
      type: "string",
    },
    {
      field: "genre",
      type: "string",
    },
  ],
};


export {
  API_CONSTS,
  DOCUMENTATION_LIST,
  ENTITIES_LIST,
  EXAMPLES_LIST,
  FEATURES_CARD_LIST,
  MENU_LIST,
  REQUEST_CARD_LIST,
  SORTING_WHITE_LIST,
  URLS,
  POST_REQUIRED_FIELDS
};

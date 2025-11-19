// components:
import Components from "./service/Components";
// consts:
import {
  API_CONSTS,
  DOCUMENTATION_LIST,
  ENTITIES_LIST,
  EXAMPLES_LIST,
  FEATURES_CARD_LIST,
  MENU_LIST,
  REQUEST_CARD_LIST,
} from "./models/models";
// utils:
import { draw, getHTMLFromList } from "./helpers/helpers";
// service classes:
import Api from "./Api";
import "./sass/style.sass";
import { Menu } from "./service/Menu";
import { Request } from "./service/Request";

const FEATURES = document.querySelector("#features");
const ENTITIES = document.querySelector("#entities");
const EXAMPLES = document.querySelector("#examples ol");
const DOCUMENTATION = document.querySelector("#documentation ul");

// Отрисовка главного меню:
new Menu({ list: MENU_LIST, Component: Components.MENU });

// !Содержимое секции 'FEATURES':
const FEATURES_HTML = getHTMLFromList(FEATURES_CARD_LIST, (card) =>
  Components.FEATURES_CARD(card)
);
draw(FEATURES, FEATURES_HTML);

// !Содержимое секции 'ENTITIES':
const ENTITIES_HTML = getHTMLFromList(ENTITIES_LIST, (card) =>
  Components.ENTITIES_LINK(card)
);
draw(ENTITIES, ENTITIES_HTML);

// !Содержимое секции 'URLS':
new Request({ list: REQUEST_CARD_LIST, Component: "REQUEST_CARD_MAIN_PAGE" });

// !Содержимое секции 'EXAMPLES':
const EXAMPLES_HTML = getHTMLFromList(EXAMPLES_LIST, (card) =>
  Components.EXAMPLES_LINK(card)
);
draw(EXAMPLES, EXAMPLES_HTML);

// !Содержимое секции 'DOCUMENTATION':
const DOCUMENTATION_HTML = getHTMLFromList(DOCUMENTATION_LIST, (card) =>
  Components.DOCUMENTATION_LINK(card)
);
draw(DOCUMENTATION, DOCUMENTATION_HTML);

// ! getEntities -----------
(async function (endPoint, qs) {
  let res = await Api.getEntities(endPoint, qs);
  console.log(res);
})(API_CONSTS.ATHLETES, "select=fullName,zodiacSign,instagramFollowers");

// ! getSingleEntity -----------
// (async function (endPoint, id) {
//   let res = await Api.getSingleEntity(endPoint, id);
//   console.log(res);
// })(API_CONSTS.BOOKS, "8");

// ! getSearchedEntity -----------
// (async function (endPoint, q) {
//   let res = await Api.getSearchedEntity(endPoint, q);
//   console.log(res);
// })(API_CONSTS.BOOKS, "поттер");

// ! addEntity -----------
(async function (endPoint, body) {
  let res = await Api.addEntity(endPoint, body);
  console.log(res);
})(API_CONSTS.BOOKS, {
  title: "foo",
  genre: "bazz",
  author: "X-mas",
  publicationYear: 2000,
});

// ! deleteEntity-----------
// (async function (endPoint, id) {
//   let res = await Api.deleteEntity(endPoint, id);
//   console.log(res);
// })(API_CONSTS.BOOKS, "5");


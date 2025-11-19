// service classes:
import Components from "./service/Components";
import { Request } from "./service/Request";
// consts:
import { REQUEST_CARD_LIST } from "./models/models";
// utils:
import { draw } from "./helpers/helpers";
import "./sass/style.sass";
import Favicon from "./icons/json.svg"

const endPoint = location.search.replace(/^\?endpoint=/, "");

// Секции и контейнеры:
const limiting = document.querySelector("#limiting");
const pagination = document.querySelector("#pagination");
const selectedFields = document.querySelector("#selectedFields");
const sorting = document.querySelector("#sorting");
const addEntity = document.querySelector("#addEntity");
const deleteEntity = document.querySelector("#deleteEntity");

// !Содержимое секции 'urls':
new Request({list: REQUEST_CARD_LIST, endPoint, Component: 'REQUEST_CARD_DOCS_PAGE'})

// !Содержимое секции 'limiting':
draw(limiting, Components.LIMITING_DOCA("hostname", endPoint));

// !Содержимое секции 'pagination':
draw(pagination, Components.PAGINATION_DOCA("hostname", endPoint));

// !Содержимое секции 'selectedFields':
draw(selectedFields, Components.SELECTEDFIELDS_DOCA("hostname", endPoint));

// !Содержимое секции 'sorting':
draw(sorting, Components.SORTING_DOCA("hostname", endPoint));

// !Содержимое секции 'addEntity':
draw(addEntity, Components.ADD_ENTITY_DOCA("hostname", endPoint));

// !Содержимое секции 'addEntity':
draw(deleteEntity, Components.DELETE_ENTITY_DOCA("hostname", endPoint));


// utils:
import { draw } from "./helpers/helpers.js";
// service classes:
import Components from "./service/Components.js";

const FOOTER = document.querySelector(".footer");

// !Отрисовка Подвала:
draw(FOOTER, Components.FOOTER());

console.log("Друзья, спасибо что Вы с нами!");

         

const draw = (container, html) => container.insertAdjacentHTML("beforeend", html);

const getHTMLFromList = (list, callback) => list.map(callback).join("");

export { draw, getHTMLFromList };

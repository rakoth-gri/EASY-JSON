import { Requests } from "../requests/requests.js";
import { Responses } from "../responses/responses.js";
import { Errors } from "../errors/errors.js";
// classes
import Components from "./Components.js";
// utils
import { draw, getHTMLFromList } from "../helpers/helpers.js";

class Request {
  constructor({
    list,
    endPoint = "${endpoint}",
    host = "hostname",
    Component,
  }) {
    this.$appContainer = document.querySelector(".appContainer");
    this.$requestsContainer = this.$appContainer.querySelector("#requests");
    this.endPoint = endPoint;
    this.list = list;
    this.host = host;
    this.Component = Component;
    this.codeContainers = null;
    // methods
    this.templator(
      this.$appContainer,
      this.$requestsContainer,
      this.list,
      this.endPoint,
      this.host,
      this.Component
    );
  }

  templator(appContainer, requestsContainer, list, endPoint, host, Component) {
    this.render(requestsContainer, list, endPoint, host, Component);
    this.addListenerToAppContainer(appContainer);
  }

  render(requestsContainer, list, endPoint, host, Component) {
    const html = getHTMLFromList(list, (url_card) =>
      Components[Component](url_card, host, endPoint)
    );
    draw(requestsContainer, `${html}${Components.NOTE_MAIN_PAGE()}`);
    this.codeContainers = [...document.querySelectorAll(".code")];
    this.codeContainers.forEach((code) =>
      draw(code.querySelector("pre"), Requests[code.dataset.id](this.endPoint))
    );
  }

  // ! Listeners -------

  addListenerToAppContainerHandler = async (e) => {
    if (!(e.target.closest(".trggr") || e.target.closest(".request-card-copybar")))
      return false;

    if (e.target.closest(".trggr")) {
      const trigger = e.target.closest(".trggr");

      const { id, scheme } = trigger.dataset;

      const codeContainer = this.codeContainers.find((bl) => bl.dataset.id === id);

      if (!codeContainer.offsetHeight) {
        const html =
          scheme === "req"
            ? Requests[id](this.endPoint)
            : scheme === "res" ? Responses[this.endPoint][id]
            : Errors[id];
        codeContainer.querySelector("pre").innerHTML = html;
        codeContainer.style.maxHeight =
          codeContainer.firstElementChild.offsetHeight +
          codeContainer.querySelector("pre").offsetHeight +
          codeContainer.querySelector("textarea").offsetHeight +
          "px";
        trigger.classList.toggle("btn-danger");
        return;
      }
      codeContainer.style.maxHeight = "0px";
      trigger.classList.toggle("btn-danger");
      return;
    }

    const codeElem = e.target.closest(".code").querySelector("code");
    const code = codeElem.textContent;
    const textArea = e.target.closest(".code").querySelector("textarea");
    const copyStatus = e.target.closest(".code").querySelector(".copy-status");

    try {
      copyStatus.textContent = "скопировано";
      copyStatus.classList.toggle("success");
      await navigator?.clipboard?.writeText(code);
    } catch (error) {
      textArea.value = code;
      textArea.select();
      document.execCommand("copy");
    } finally {
      setTimeout(() => {
        copyStatus.textContent = "копировать";
        copyStatus.classList.toggle("success");
      }, 1500);
    }
  };

  addListenerToAppContainer(appContainer) {
    appContainer.addEventListener(
      "click",
      this.addListenerToAppContainerHandler
    );
  }
}

export { Request };

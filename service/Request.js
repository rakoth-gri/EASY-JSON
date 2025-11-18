import { Requests } from "../requests/requests.js";
import { Responses } from "../responses/responses.js";
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
    this.codeBlocks = null;
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
    this.codeBlocks = [...document.querySelectorAll(".code")];
  }

  // ! Listeners -------

  addListenerToAppContainerHandler = async (e) => {
    if (!(e.target.closest(".trggr") || e.target.closest(".request-card-copy")))
      return false;

    if (e.target.closest(".trggr")) {
      const trigger = e.target.closest(".trggr");

      const { id, scheme } = trigger.dataset;

      const codeBlock = this.codeBlocks.find((bl) => bl.dataset.id === id);

      if (!codeBlock.classList.contains("active")) {
        const html =
          scheme === "req"
            ? Requests[id](this.endPoint)
            : Responses[this.endPoint][id];
        codeBlock.querySelector("pre").innerHTML = html;
      }
      codeBlock.classList.toggle("active");
      trigger.classList.toggle("btn-outline-success");
      return;
    }

    const codeElem = e.target.closest(".code").querySelector("code");
    const code = codeElem.textContent;
    const textArea = e.target.closest(".code").querySelector("textarea");

    try {
      e.target
        .closest(".request-card-copy")
        .querySelector(".copy-status").textContent = "скопировано";
      await navigator?.clipboard?.writeText(code);
    } catch (error) {
      textArea.value = code;
      textArea.select();
      document.execCommand("copy");
    } finally {
      setTimeout(() => {
        e.target
          .closest(".request-card-copy")
          .querySelector(".copy-status").textContent = "копировать";
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


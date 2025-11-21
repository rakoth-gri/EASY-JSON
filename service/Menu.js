// utils
import { draw } from "../helpers/helpers.js";

class Menu {
  constructor({ list, Component }) {
    this.$menuContainer = document.querySelector(".header");
    this.$burger = this.$menuContainer.querySelector(".burger");
    this.$mainNav = null;
    this.list = list;
    this.Component = Component;
    this.menuLinks = null;
    // Methods:
    this.render(
      this.$menuContainer,
      this.list,
      this.Component
    ).addListenerToHeader(this.$menuContainer, this.list);
  }

  render(menuContainer, list, Component) {
    const html = Component(list);
    draw(menuContainer, html);
    this.menuLinks = menuContainer.querySelectorAll(".menu-link");
    this.$mainNav = menuContainer.querySelector(".main-nav");
    return this;
  }

  addListenerToHeaderHandler = (e) => {
    if (e.target.closest(".burger")) {
      this.$mainNav.classList.toggle("active");      
    }
    else if (!e.target.matches(".menu-link")) {
      this.$mainNav.classList.remove("active");
    }
    else {
      const { id } = e.target;
      document.querySelector(id).scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
      this.hilightChosenLink(this.menuLinks, e.target);
      this.$mainNav.classList.toggle("active");
    }   
  };

  hilightChosenLink(links, link) {
    links.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");
  }

  addListenerToHeader(container) {
    container.addEventListener("click", this.addListenerToHeaderHandler);
    return this;
  }
}

export { Menu };

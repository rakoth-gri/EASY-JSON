import {
  POST_REQUIRED_FIELDS,
  SORTING_WHITE_LIST,
  URLS,
} from "../models/models.js";
// helpers:
import { getHTMLFromList } from "../helpers/helpers.js";

class Components {
  //! компоненты main.html
  MENU(list) {
    return `
      <nav class='main-nav'>
      <ul class="header-menu">
        ${getHTMLFromList(
          list,
          ({ href, text }) =>
            `<li class="li"><a id="${href}" class="menu-link">${text}</a></li>`
        )}
        
      </ul>
    </nav>
        `;
  }

  REQUEST_CARD_MAIN_PAGE = (
    { id, title, method, url, cls = "" },
    host,
    endpoint
  ) => `
        <article id="${id}" class="request-card">
            <h3>
                <strong class="request-card-title warning">${title}</strong>
            </h3>
            <div class="request-card-info" data-id="${id}" data-method="${method}">
                <button class='btn ${cls}'> ${method} </button>
                <code class='request-card-url'> ${url(host, endpoint)} </code>
            </div>            
        </article>`;
  NOTE_MAIN_PAGE = () => `
    <div>
        <p class="request-card-note">
            <span class="danger">* </span> Переменная 
            <em class="warning"> \${endpoint}</em> представляет
            доступные в API ресурсы:<span class="warning">
            'athletes', 'books'</span>.
        </p>
        <p class="request-card-note">
            <span class="danger">** </span>Переменная
            <em class="warning">\${value}</em> представляет значения
            передаваемых пользователем query-параметров.
        </p>
        <p class="request-card-note">
            <span class="danger">*** </span>Переменная
            <em class="warning">\${id}</em> представляет
            идентификатор запрашиваемого ресурса.
        </p>
    </div>
    `;
  FEATURES_CARD = ({ icon, text, title }) => `
    <article class="features-card">
        <div class="icon-box">${icon}</div>
        <h3 class="features-title">${title}</h3>
        <hr class="features-card-hr"/>
        <p class="features-card-text">${text}</p>
    </article>
    `;
  ENTITIES_LINK = ({ href, endpoint, icon }) => `
    <a class="entities-card" href="${href}">
        <button class="btn btn-entity">
        ${icon}
        ${endpoint} 
        <span class="entities-card-url"> ${URLS.getEntities(
          "hostname",
          endpoint
        )} </span>       
        </button>
        
    </a>
    `;
  EXAMPLES_LINK = ({ href, text }) => `
    <li class="li">
        <a href="${href}">${text}</a>
    </li>
    `;
  DOCUMENTATION_LINK = ({ href, text }) => `
    <li class="li">
        <a href="${href}">
            ${text}
        </a>
    </li>
    `;
  //! компоненты docs.html
  REQUEST_CARD_DOCS_PAGE(
    { id, title, method, url, cls = "", scheme, ReqBtn, ResBtn, note },
    host,
    endpoint
  ) {
    return `
    <article id="${id}" class="request-card">
        <h3>
            <strong class="request-card-title warning">${title}</strong>
        </h3>
        <section class="request-card-info" data-id="${id}" data-method="${method}">
            <a class='btn ${cls}'> ${method} </a>
            <code class='request-card-url'> ${url(host, endpoint)} </code>
        </section>
        ${this.URL_CARD_TRIGGERS({ id, ...scheme, ReqBtn, ResBtn })}        
        <div data-id="${id}" class="code">
          <textarea></textarea>
          <div class="request-card-copy">
            <button class='btn btn-outline-warning'>
              <span class="material-icons-round">copy_all</span>
            </button>
            <em class='copy-status'>копировать</em> 
          </div>
          <pre></pre>
        </div>
        ${note ? this.NOTE_DOCS_PAGE() : ""}            
    </article>`;
  }
  NOTE_DOCS_PAGE = () => `
    <p>
        <span class="danger">*</span> В качестве <strong class="warning">body</strong> передается объект с минимально необходимым набором полей <span class='warning'>см. схему ответа </span>. 
    </p>
    `;
  URL_CARD_TRIGGERS({ id, req, res, ReqBtn, ResBtn }) {
    return `
            <div class="request-card-triggers">
            <div class="request-card-trigger">
                <button
                    class="btn btn-outline-warning trggr"
                    data-id="${id}"
                    data-scheme="${req}"
                >
                    ${ReqBtn}
                </button>
            </div>
            <div class="request-card-trigger ">
                <button
                    class="btn btn-outline-warning trggr"
                    data-id="${id}"
                    data-scheme="${res}"
                >
                    ${ResBtn}
                </button>
            </div>
        </div>
        `;
  }
  PAGINATION_DOCA(host, endpoint) {
    return `
        <p class='section-text'>
          Получение порции данных осуществляется
          <abbr title="" class='warning'>GET</abbr>-запросом с передачей
          параметров: <em class='warning'>"limit", "page"</em>:
        </p>
        <div>
            <code class='request-card-url doca'> ${URLS.getPaginatedEntities(
              host,
              endpoint
            )} </code>
        </div> 
        `;
  }
  SELECTEDFIELDS_DOCA(host, endpoint) {
    return `
        <p class='section-text'>
          Получение данных по выбранным полям сущностей осуществляется
          <abbr class='warning'>GET</abbr>-запросом с передачей
          параметра: <em class='warning'>"select"</em>:
        </p>
        <div>
            <code class='request-card-url doca'>${URLS.getSelectedEntities(
              host,
              endpoint
            )} </code>
        </div> 
        <p>
            <span class="danger">*</span> Наименования полей у разных сущностей отличаются! Для передачи корректных значений <a href="#getEntities" class='warning'>см. схему ответа </a>.
        </p>
        <p>
            <span class="danger">*</span> Значением параметра <em class='warning'>"select"</em> является строка без пробелов, содержащая: название запрашиваемого поля или нескольких полей, разделенных запятыми.
        </p>
        `;
  }
  SORTING_DOCA(host, endpoint) {
    return `
        <p class='section-text'>
          Сортировка данных по выбранным полям сущностей осуществляется
          <abbr class='warning'>GET</abbr>-запросом с передачей
          параметра <em class='warning'>"sort"</em>:
        </p>
        <div>
            <code class='request-card-url doca'>${URLS.getSortedEntities(
              host,
              endpoint
            )}</code>
        </div> 
        <p>
            <span class="danger">*</span> Переменная <span class='warning'>\${field}</span> принимает следующие значения:
            <ul class='warning white-list'>${getHTMLFromList(
              SORTING_WHITE_LIST[endpoint],
              (sortValue) => `<li> ${sortValue} </li>`
            )}
            </ul>            
        </p>
        <p>
            <span class="danger">*</span> Переменная <span class='warning'>\${ dir }</span> принимает значения:<em class='warning'><strong> asc | desc</strong></em>.
        </p>
        `;
  }
  LIMITING_DOCA(host, endpoint) {
    return `
        <p class='section-text'>
          Получение лимитированного количеcтва сущностей осуществляется
          <abbr class='warning'>GET</abbr>-запросом с передачей
          query-параметра: <em class='warning'>"limit"</em>:
        </p>
        <div>
            <code class='request-card-url doca'>${URLS.getLimitedEntities(
              host,
              endpoint
            )}</code>
        </div> 
        `;
  }
  ADD_ENTITY_DOCA(host, endpoint) {
    return `
        <p>
          POST-запрос к API имитирует добавление новой сущности на сервер. В случае успеха, сервер вернет объект, содержащий поля, переданные в запросе (<a href="#addEntity" class='warning'>см. схему</a>):
        </p>
        <div>
            <code class='request-card-url doca'>${URLS.addEntity(
              host,
              endpoint
            )}</code>
        </div>
        <div> Минимально необходимые поля для передачи в теле запроса: <ul class='white-list warning'> 
          ${getHTMLFromList(
            POST_REQUIRED_FIELDS[endpoint],
            ({ field, type }) => `<li>${field}, ${type} </li>`
          )}
          </ul>
        </div> 
        `;
  }
  DELETE_ENTITY_DOCA(host, endpoint) {
    return `
        <p>
          DELETE-запрос к API имитирует удаление конкретной сущности на сервере. В случае успеха, сервер вернет объект с идентификатором, переданным в запросе (<a href="#deleteEntity" class='warning'>см. схему</a>):
        </p>
        <div>
            <code class='request-card-url doca'>${URLS.deleteEntity(
              host,
              endpoint
            )}</code>
        </div>
        <p style='background: none;'>
            <span class="danger">*</span> Переменная <span class='warning'>\${id}</span> - идентификатор удаляемой сущности!            
        </p> 
        `;
  }
}

export default new Components();

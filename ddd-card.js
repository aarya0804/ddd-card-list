/**
 * Copyright 2025 aarya0804
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `ddd-card`
 *
 * @demo index.html
 * @element ddd-card
 */
export class DddCard extends DDDSuper(I18NMixin(LitElement)) {
  static get tag() {
    return "ddd-card";
  }

  constructor() {
    super();
    this.title = "";

    this.image = "";
    this.line = "";
    // this.registerLocalization({
    //   context: this,
    //   localesPath:
    //     new URL("./locales/ddd-card-list.ar.json", import.meta.url).href +
    //     "/../",
    //   locales: ["ar", "es", "hi", "zh"],
    // });
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      image: { type: String },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: inline-block;
          width: 30%;
          color: var(--ddd-theme-primary);
          background-color: var(--ddd-theme-accent);
          font-family: var(--ddd-font-navigation);
        }
        .wrapper {
          margin: var(--ddd-spacing-2);
          padding: var(--ddd-spacing-4);
          margin: auto;
          background-color: var(--ddd-theme-default-white);
        }
        h3 span {
          font-size: var(
            --ddd-card-list-label-font-size,
            var(--ddd-font-size-s)
          );
        }
        img {
          width: 100%;
          height: auto;
          display: block;
          margin: 0;
          padding: 0;
        }

        .line {
          height: 10px;
          background-color: var(--ddd-theme-default-nittanyNavy);
          margin: 0;
        }

        /* a,
        a:link,
        a:visited {
          display: in-line block;
          padding: 10px;
          text-decoration: none;
          color: white;
          background-color: blue;
        } */

        a,
        a:link,
        a:visited {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 10px; /* Adjust spacing */
          width: 85%;
          background-color: #004684;
          color: white;
          border: none;
          padding: 12px 20px;
          font-size: 16px;
          font-weight: bold;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease-in-out;
          margin-bottom: 15px;
        }

        a:hover,
        a:active {
          background-color: var(--ddd-theme-default-nittanyNavy);
        }
      `,
    ];
  }

  // Lit render the HTML
  render() {
    return html` <div class="wrapper">
      <img src="${this.image}" />
      <div class="line"></div>
      <h3>${this.title}</h3>
      <slot></slot>
      <a>Explore ></a>
    </div>`;
  }
}

globalThis.customElements.define(DddCard.tag, DddCard);

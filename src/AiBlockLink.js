const ATTRIBUTE_MAP = { "main-link": "mainLink", mainlink: "mainLink" };
const DEFAULT_SELECTOR = "a";
const LINK_REGEX = /^(ai-blocklink|a)$/i;

/**
 * A simple and super lightweight web component to create block links.
 * @attr {string} main-link - Selector that identifies the main link
 * @attr {string} mainlink - Selector that identifies the main link
 * @slot - The default slot for this component's content
 */
export class AiBlockLink extends HTMLElement {
  constructor() {
    super();
    /**
     * Selector that identifies the main link
     * @type {string}
     * @attr main-link
     */
    this.mainLink = DEFAULT_SELECTOR;
    const css = `:host { display: block; }`;
    const html = `<slot></slot>`;

    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>${css}</style>
      ${html}
    `;
  }

  static get observedAttributes() {
    return ["main-link", "mainlink"];
  }

  attributeChangedCallback(attr, oldVal, newVal) {
    console.log('attributeChangedCallback() called !');
    if (oldVal !== newVal) {
      this[ATTRIBUTE_MAP[attr]] = newVal;
    }
  }

  connectedCallback() {
    console.log('connectedCallback() called !');
    this.addEventListener("click", this._clicked);
  }

  disconnectedCallback() {
    console.log('disconnectedCallback() called');
    this.removeEventListener("click", this._clicked);
  }

  get _mainLinkNode() {
    const custom = this.querySelector(this.mainLink);
    console.log(custom);
    const fallback = this.querySelector(DEFAULT_SELECTOR);
    const ret = custom && LINK_REGEX.test(custom.tagName) ? custom : fallback;
    console.log(ret);
    return ret;
  }

  /**
   * Triggers a click on this component's main link.
   */
  click() {
    const mainLinkNode = this._mainLinkNode
    console.log('mainLinkNode = ' + !! mainLinkNode);
    if (! mainLinkNode) {
      return;
    }
    console.log('mainLinkNode.click() fired !');
    mainLinkNode.click();
  }


  _clicked(e) {
    e.stopPropagation();
    console.log('_clicked(e) called !');
    const selection = window.getSelection();
    const textSelected =
      selection.containsNode(this, true) && !!selection.toString();
    const innerLinkClicked =
      e.target !== this && LINK_REGEX.test(e.target.tagName);
    if (innerLinkClicked || textSelected) {
      return;
    }
    this.click();
  }
}

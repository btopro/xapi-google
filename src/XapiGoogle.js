//import { html, css, LitElement } from 'lit';
import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

export class XapiGoogle extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--xapi-google-text-color, #000);
    }
  `;

  static properties = {
    header: { type: String },
    counter: { type: Number },
  };

  constructor() {
    super();
    this.header = 'Hey there';
    this.counter = 5;
  }
  
  render() {
    return html`
      hello there
    `;
  }
}

import { html, css, LitElement } from 'lit';

export class ScaffoldWidget extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--scaffold-widget-text-color, #000);
      }
    `;
  }

  static get properties() {
    return {
      counter: { type: Number },
    };
  }

  constructor() {
    super();
    this.counter = 5;
  }

  __increment() {
    this.counter += 1;
  }

  render() {
    return html`
      <h2><slot name="title">Hey there</slot> Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment</button>
    `;
  }
}

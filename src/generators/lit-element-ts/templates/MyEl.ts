import { html, css, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export class <%= className %> extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--<%= pkgName %>-text-color, #000);
    }
  `;

  @property({ type: Number }) counter = 5;

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

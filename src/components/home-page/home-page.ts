import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';



@customElement('home-page')
class HomePage extends LitElement {
  render() {
    return html`
      This is the home page :) - ${process.env.NAME}
    `;
  }
}
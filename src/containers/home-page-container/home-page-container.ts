import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('home-page-container')
class HomePageContainer extends LitElement {
  connectedCallback(): void {
      super.connectedCallback();

      console.log('HomePageContainer connected', "TESTE123");
      console.log(process.env.NAME);
  }

  render() {
    return html`
      <home-page></home-page>
    `;
  }
}
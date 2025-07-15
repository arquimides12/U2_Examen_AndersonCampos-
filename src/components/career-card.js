import { LitElement, html, css } from 'lit-element';
import { theme } from '../styles/theme.js'; // Importar el archivo de temas

class CareerCard extends LitElement {
  static get properties() {
    return {
      career: { type: Object }
    };
  }

  constructor() {
    super();
    this.career = {};  // Inicializamos career como un objeto vacío
  }

  // Estilos mejorados
  static get styles() {
    return css`
      :host {
        display: block;
        border: 2px solid #ddd;
        padding: 20px;
        border-radius: 8px;
        margin-top: 20px;
        max-width: 600px;
        background-color: #f9f9f9;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }

      header {
        background-color: var(--header-bg, #ccc);
        color: white;
        padding: 10px;
        font-size: 1.5em;
        text-align: center;
        border-radius: 6px;
      }

      img {
        width: 100%;
        height: auto;
        border-radius: 8px;
        margin-top: 10px;
        display: block;
      }

      p {
        font-size: 1em;
        margin: 10px 0;
      }

      strong {
        color: #333;
      }
    `;
  }

  // Cambiar el tema dependiendo del último dígito de la cédula
  updated(changedProperties) {
    super.updated(changedProperties);
    const lastDigit = 6; // Cambia este número con el último dígito de tu cédula
    const selectedTheme = theme[lastDigit];
    this.style.setProperty('--header-bg', selectedTheme.headerBg);
  }

  render() {
    return html`
      <header>${this.career?.name || 'Selecciona una carrera'}</header>
      ${this.career?.image ? html`<img src="${this.career?.image}" alt="${this.career?.name}" />` : ''}
      <p><strong>Facultad:</strong> ${this.career?.faculty || 'Sin información'}</p>
      <p><strong>Descripción:</strong> ${this.career?.description || 'Sin descripción'}</p>
    `;
  }
}

customElements.define('career-card', CareerCard);

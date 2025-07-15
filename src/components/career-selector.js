import { LitElement, html, css } from 'lit-element';

class CareerSelector extends LitElement {
  static get properties() {
    return {
      careers: { type: Array }
    };
  }

  constructor() {
    super();
    this.careers = [
      { name: "Software", faculty: "Facultad de Tecnología", description: "Desarrollo de software", image: "./src/img/software.png" },
      { name: "Mecatrónica", faculty: "Facultad de Ingeniería", description: "Mecatrónica avanzada", image: "mecatronica.jpg" },
      { name: "Biotecnología", faculty: "Facultad de Ciencias", description: "Innovación en biotecnología", image: "biotecnologia.jpg" },
      { name: "Petroquímica", faculty: "Facultad de Química", description: "Procesos petroquímicos", image: "petroquimica.jpg" }
    ];
  }

  selectCareer(career) {
    this.dispatchEvent(new CustomEvent('career-selected', {
      detail: career // Pasar los detalles de la carrera seleccionada
    }));
  }

  // Estilos para mejorar la visualización
  static get styles() {
    return css`
      :host {
        display: block;
        font-family: Arial, sans-serif;
      }

      ul {
        list-style-type: none;
        padding: 0;
      }

      li {
        margin: 10px 0;
      }

      button {
        background-color: #007bff;
        color: white;
        border: none;
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
        border-radius: 5px;
        width: 100%;
        transition: background-color 0.3s ease;
      }

      button:hover {
        background-color: #0056b3;
      }

      button:active {
        background-color: #003f75;
      }
    `;
  }

  render() {
    return html`
      <div>
        <h2>Seleccione una carrera</h2>
        <ul>
          ${this.careers.map(career => html`
            <li>
              <button @click="${() => this.selectCareer(career)}">${career.name}</button>
            </li>
          `)}
        </ul>
      </div>
    `;
  }
}

customElements.define('career-selector', CareerSelector);

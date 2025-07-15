import { LitElement, html, css } from 'lit-element';
import softwareImage from '../img/software.png';
import mecatronicaImage from '../img/mecatronica.png';
import biotecnologiaImage from '../img/biotecnologia.png';
import petroquimicaImage from '../img/petroquimica.png';

class CareerSelector extends LitElement {
  static get properties() {
    return {
      careers: { type: Array }
    };
  }

  constructor() {
    super();
    this.careers = [
      { 
        name: "Software", 
        faculty: "Facultad de Tecnología", 
        description: "La carrera de Software forma profesionales capaces de diseñar, desarrollar y mantener sistemas informáticos. Los estudiantes aprenderán sobre lenguajes de programación, bases de datos, desarrollo web y móvil, así como la integración de sistemas en diversas plataformas.", 
        image: softwareImage
      },
      { 
        name: "Mecatrónica", 
        faculty: "Facultad de Ingeniería", 
        description: "Mecatrónica es una disciplina que combina la ingeniería electrónica, mecánica y computacional para el diseño y creación de sistemas automáticos y robots. Los estudiantes aprenderán a diseñar, programar y operar sistemas mecatrónicos avanzados en diversas industrias.", 
        image: mecatronicaImage
      },
      { 
        name: "Biotecnología", 
        faculty: "Facultad de Ciencias", 
        description: "La Biotecnología es una rama de la ciencia que utiliza organismos vivos y sus sistemas para desarrollar productos innovadores en áreas como la salud, la agricultura, la industria y la energía. Los estudiantes aprenderán sobre genética, microbiología, bioinformática y bioprocesos.", 
        image: biotecnologiaImage
      },
      { 
        name: "Petroquímica", 
        faculty: "Facultad de Química", 
        description: "La carrera en Petroquímica está orientada a la formación de expertos en los procesos industriales que transforman el petróleo y gas natural en productos químicos útiles. Los estudiantes aprenderán sobre procesos químicos, producción de polímeros, fertilizantes, y procesos de refinación de petróleo.", 
        image: petroquimicaImage
      }
    ];
  }

  selectCareer(career) {
    this.dispatchEvent(new CustomEvent('career-selected', {
      detail: career  // Pasar los detalles de la carrera seleccionada
    }));
  }

  // Estilos mejorados para la visualización de botones
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
              <button @click="${() => this.selectCareer(career)}">
                ${career.name}
              </button>
            </li>
          `)}
        </ul>
      </div>
    `;
  }
}

customElements.define('career-selector', CareerSelector);

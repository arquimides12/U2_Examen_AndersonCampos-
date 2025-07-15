import './components/career-card.js';
import './components/career-selector.js';

const careerSelector = document.querySelector('career-selector');
const careerCard = document.querySelector('career-card');

// Cuando se selecciona una carrera en el selector, actualizar el contenido del career-card
careerSelector.addEventListener('career-selected', (e) => {
  careerCard.career = e.detail;
});

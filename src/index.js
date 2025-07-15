import './components/career-card.js';
import './components/career-selector.js';

const careerSelector = document.querySelector('career-selector');
const careerCard = document.querySelector('career-card');

// Escuchar el evento 'career-selected' del componente 'career-selector'
careerSelector.addEventListener('career-selected', (e) => {
  console.log(e.detail);  // Verifica que los detalles de la carrera se pasen correctamente
  careerCard.career = e.detail;  // Actualizar el contenido de 'career-card' con la carrera seleccionada
});

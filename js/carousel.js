document.addEventListener('DOMContentLoaded', function () {
  const slider = document.querySelector('.slider');
  const prevBtn = document.querySelector('.nav .prev');
  const nextBtn = document.querySelector('.nav .next');

  if (!slider || !prevBtn || !nextBtn) return;

  prevBtn.addEventListener('click', function (e) {
    const items = slider.querySelectorAll('.item');
    slider.prepend(items[items.length - 1]);
  });

  nextBtn.addEventListener('click', function (e) {
    const items = slider.querySelectorAll('.item');
    slider.append(items[0]);
  });

  // Ajouter les liens pour les boutons "En savoir plus"
  const carouselButtons = slider.querySelectorAll('button');
  carouselButtons.forEach((button, index) => {
    button.addEventListener('click', function(e) {
      e.stopPropagation();
      
      // Pour l'instant, seule la première prestation (cuisine) a sa page dédiée
      if (index === 0) {
        window.location.href = 'cuisine.html';
      } else {
        // Les autres redirigent vers le formulaire de devis
        window.location.href = 'devis.html';
      }
    });
  });
});
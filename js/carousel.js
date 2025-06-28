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
});
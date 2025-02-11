document.addEventListener('DOMContentLoaded', function() {
  const nextButton = document.getElementById('nextButton');
  const prevButton = document.getElementById('prevButton');
  const carousel = document.getElementById('refurbishedPhonesCarousel');
  const barDiv = document.querySelector('.Bar');

  nextButton.addEventListener('click', function() {
    carousel.scrollBy({ left: 300, behavior: 'smooth' });
  });

  prevButton.addEventListener('click', function() {
    carousel.scrollBy({ left: -300, behavior: 'smooth' });
  });

  // Show the Bar div
  barDiv.classList.remove('d-none');
});



// Add a simple click event for the "Search" button
document.querySelector('.search-btn').addEventListener('click', function () {
  alert('Search functionality is not implemented yet!');
});
let currentIndex = 0;

function moveSlide(direction) {
  const track = document.querySelector('.carousel-track');
  const items = document.querySelectorAll('.carousel-item');
  const itemsPerView = 3;
  const itemWidth = 300 + 20; // item width + margin

  // Update the index
  const totalItems = items.length;
  currentIndex += direction;

  if (currentIndex < 0) currentIndex = Math.ceil(totalItems / itemsPerView) - 1;
  if (currentIndex >= Math.ceil(totalItems / itemsPerView)) currentIndex = 0;

  updateDots(currentIndex);

  // Move the carousel track
  const newTranslateValue = -(currentIndex * itemWidth * itemsPerView);
  track.style.transform = `translateX(${newTranslateValue}px)`;
}

function updateDots(index) {
  const dots = document.querySelectorAll('.dot');
  dots.forEach(dot => dot.classList.remove('active'));
  if (dots[index]) dots[index].classList.add('active');
}

function currentSlide(index) {
  currentIndex = index;
  moveSlide(0);
}

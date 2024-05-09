const slider = document.querySelector('.slider');
const circle = document.querySelector('.circle');

slider.addEventListener('click', function() {
  if (circle.offsetLeft === 5) {
    circle.style.left = '32px';
    circle.style.backgroundColor = 'white';
    slider.style.backgroundColor = 'rgb(117, 234, 152)';
  } else {
    circle.style.left = '5px';
    circle.style.backgroundColor = 'gray';
    slider.style.backgroundColor = 'white';
  }
});
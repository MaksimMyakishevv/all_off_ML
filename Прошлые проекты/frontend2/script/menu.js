const menuButton = document.querySelector('.menu-button');
const menuContent = document.querySelector('.menu-content');

menuButton.addEventListener('click', function() {
  menuContent.classList.toggle('show');
});
//Mobile Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', function() {
  navLinks.classList.toggle('nav-open');
});

//Close Hamburger On Scroll
window.addEventListener('scroll', function() {
  navLinks.classList.remove('nav-open');
});
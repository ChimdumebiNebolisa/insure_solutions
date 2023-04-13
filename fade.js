window.addEventListener('scroll', function() {
  var element = document.querySelector('.all-card');
  var position = element.getBoundingClientRect();

  // Checking whether the element is in the viewport
  if (position.top >= 0 && position.bottom <= window.innerHeight) {
    element.classList.add('fadeIn');
  }
});
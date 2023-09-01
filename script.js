// Contoh interaksi JavaScript
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('nav a');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth'
      });
    });
  });
});

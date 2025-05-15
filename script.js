// script.js

// Placeholder for interactivity
// Add animations, scroll effects, or nav logic here

document.addEventListener('DOMContentLoaded', () => {
  console.log('Website loaded');

  // Example: Smooth scroll for nav links
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});

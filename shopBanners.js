// Toggle the product banner for the clicked product card
function toggleBanner(card) {
    // Toggle the "open" class on the product card
    card.classList.toggle("open");
  }
  
  // Scroll Fade-In Animation
  document.addEventListener('DOMContentLoaded', () => {
    const faders = document.querySelectorAll('.fade-on-scroll');
  
    const appearOnScroll = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible-up');
        } else {
          entry.target.classList.remove('visible-up');
        }
      });
    }, { threshold: 0.1 });
  
    faders.forEach((el) => appearOnScroll.observe(el));
  });
  
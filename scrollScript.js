const faders = document.querySelectorAll('.text-area section, .fade-on-scroll');

const appearOnScroll = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible-up');
      } else {
        entry.target.classList.remove('visible-up');
      }
    });
  },
  {
    threshold: 0.1,
  }
);

faders.forEach((el) => appearOnScroll.observe(el));

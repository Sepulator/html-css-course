// Current Year
const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// Mobile Navigation
const header = document.querySelector('.header');
const btnNav = document.querySelector('.btn-mobile-nav');

btnNav.addEventListener('click', function () {
  header.classList.toggle('nav-open');
});

// Smooth scrolling animation
const containers = document.querySelectorAll('.main-nav-list, .hero-text-box');
containers.forEach((container) => {
  container.addEventListener('click', function (e) {
    e.preventDefault();
    const link = e.target.classList.contains('scroll') ? e.target : null;
    if (!link) return;

    const href = link.getAttribute('href');

    if (href === '#')
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });

    if (href !== '#' && href.startsWith('#')) {
      const element = document.querySelector(href);
      element.scrollIntoView({ behavior: 'smooth' });
    }

    if (link.classList.contains('main-nav-link')) {
      header.classList.toggle('nav-open');
    }
  });
});

// Sticky navigation

const sectionHeroEl = document.querySelector('.section-hero');

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (!ent.isIntersecting) {
      document.body.classList.add('sticky');
    }

    if (ent.isIntersecting) {
      document.body.classList.remove('sticky');
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: '-80px',
  }
);
obs.observe(sectionHeroEl);

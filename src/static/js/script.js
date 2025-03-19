/*
 * Portfolio JavaScript - Main script for Mahmoud Eid Elsayed's portfolio
 * Author: Mahmoud Eid Elsayed
 * Version: 1.0
 */

document.addEventListener('DOMContentLoaded', function () {
  initTypedText();
  initNavbarScroll();
  initSmoothScroll();
  initProjectFilters();
  initProgressBars();
  setCurrentYear();
  initContactForm();
});

// Initialize Typed.js text animation
function initTypedText() {
  const roles = [
    'Backend Software Engineer',
    'Cloud Solutions Specialist',
    'DevOps Engineer',
    'Full Stack Developer'
  ];

  new Typed('.typed-text', {
    strings: roles,
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 2000,
    loop: true
  });
}

// Add scroll effect to navbar
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', function () {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });
}

// Initialize smooth scrolling for navigation links
function initSmoothScroll() {
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      window.scrollTo({
        top: targetSection.offsetTop - 70,
        behavior: 'smooth'
      });

      // Close mobile menu if open
      const navbarCollapse = document.querySelector('.navbar-collapse');
      navbarCollapse.classList.remove('show');
    });
  });
}

// Initialize project filtering functionality
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectItems = document.querySelectorAll('.project-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      filterBtns.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');

      const filterValue = this.getAttribute('data-filter');
      projectItems.forEach(item => {
        item.style.display = (filterValue === 'all' || item.getAttribute('data-category') === filterValue)
          ? 'block'
          : 'none';
      });
    });
  });
}

// Initialize progress bars with animation
function initProgressBars() {
  const progressBars = document.querySelectorAll('.progress-bar');

  function animateProgressBars() {
    progressBars.forEach(bar => {
      const position = bar.getBoundingClientRect();
      if (position.top < window.innerHeight && position.bottom >= 0) {
        const width = bar.getAttribute('aria-valuenow') + '%';
        if (bar.style.width !== width) {
          bar.style.width = width;
        }
      }
    });
  }

  window.addEventListener('scroll', animateProgressBars);
  animateProgressBars();
}

// Set current year in footer
function setCurrentYear() {
  document.getElementById('current-year').textContent = new Date().getFullYear();
}

// Initialize contact form
function initContactForm() {
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    document.getElementById('contactForm').addEventListener('submit', function (e) {
      e.preventDefault();
      // Form validation and submission logic is handled in form.js
    });
  }
}
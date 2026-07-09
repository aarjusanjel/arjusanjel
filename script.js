const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
const year = document.querySelector('#year');

year.textContent = new Date().getFullYear();

toggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});

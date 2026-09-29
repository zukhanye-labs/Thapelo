// Mobile menu
const menuBtn = document.querySelector('.menu');
const nav = document.getElementById('nav');
menuBtn.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open);
});
nav.addEventListener('click', e => {
  if (e.target.tagName === 'A') { nav.classList.remove('open'); menuBtn.setAttribute('aria-expanded', false); }
});

// Image slots: show a dashed "Add image" placeholder until the file exists
document.querySelectorAll('.slot').forEach(slot => {
  const img = slot.querySelector('img');
  const mark = () => slot.classList.add('empty');
  if (!img) return mark();
  img.addEventListener('error', mark);
  if (img.complete && img.naturalWidth === 0) mark();
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
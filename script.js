// Nav shrinks once the page scrolls (NexaCore's floating pill).
const nav = document.querySelector('.nav');
const onScroll = () => nav.classList.toggle('is-scrolled', scrollY > 20);
addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Close the mobile menu after picking a section.
const menu = document.getElementById('menu');
menu.addEventListener('click', (e) => e.target.closest('a') && menu.hidePopover());

// The hero's light tilts toward the pointer.
const hero = document.querySelector('.hero');
if (matchMedia('(pointer: fine) and (prefers-reduced-motion: no-preference)').matches) {
  hero.addEventListener('pointermove', (e) => hero.style.setProperty('--tilt', (e.clientX / innerWidth) * 2 - 1));
  hero.addEventListener('pointerleave', () => hero.style.setProperty('--tilt', 0));
}

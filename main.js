const nav = document.querySelector('.nav');
const buybar = document.querySelector('.buybar');
const hero = document.querySelector('.hero');
const final = document.querySelector('.final');

// nav solida + barra de compra depois do hero, some no CTA final
let finalVisible = false;
const onScroll = () => {
  const y = window.scrollY;
  nav.classList.toggle('is-solid', y > 40);
  buybar.classList.toggle('is-on', y > hero.offsetHeight * .8 && !finalVisible);
};
window.addEventListener('scroll', onScroll, { passive: true });

new IntersectionObserver(([e]) => { finalVisible = e.isIntersecting; onScroll(); })
  .observe(final);

// revela ao rolar
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
  });
}, { threshold: .15 });
document.querySelectorAll('.reveal').forEach((el, i) => {
  el.style.transitionDelay = `${(i % 4) * 70}ms`;
  io.observe(el);
});

onScroll();

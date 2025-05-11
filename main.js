// Кнопка "Наверх"
document.getElementById('back-to-top').addEventListener('click', scrollToTop);

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Показать/скрыть кнопку
window.addEventListener('scroll', () => {
  const btn = document.getElementById('back-to-top');
  btn.style.display = (window.pageYOffset > 300) ? 'block' : 'none';
});
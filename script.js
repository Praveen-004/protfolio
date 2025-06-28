// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Typing effect for name/title (optional enhancement)
const titleEl = document.querySelector('.title');
const fullText = "Java Full Stack Developer";
let idx = 0;

function typeEffect() {
  if (idx < fullText.length) {
    titleEl.textContent += fullText.charAt(idx);
    idx++;
    setTimeout(typeEffect, 100);
  }
}

// Clear and start typing animation on load
window.addEventListener('DOMContentLoaded', () => {
  titleEl.textContent = "";  // clear original
  typeEffect();
});


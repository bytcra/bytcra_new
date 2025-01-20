// Function to check if an element is visible in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top <= (window.innerHeight || document.documentElement.clientHeight) && rect.bottom >= 0;
}

// Function to handle the fade-in effect
function handleFadeIn() {
  const elements = document.querySelectorAll('.grid-item, .text-content, .about-header span, .about-header h2, .about-philosophy h3, .about-philosophy p');
  elements.forEach((item) => {
    if (isInViewport(item)) {
      item.classList.add('visible');
    }
  });
}

// Attach event listeners
document.addEventListener('DOMContentLoaded', handleFadeIn); // Run on page load
window.addEventListener('scroll', handleFadeIn); // Run on scroll


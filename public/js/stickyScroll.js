let lastKnownScrollPosition = 0;
let ticking = false;

function handleScroll() {
    const aboutSection = document.querySelector('.about-section');
    const aboutPhilosophy = document.querySelector('.about-philosophy');
    const sectionTop = aboutSection.getBoundingClientRect().top;
    const sectionBottom = aboutSection.getBoundingClientRect().bottom;
    const viewportHeight = window.innerHeight;

    // Check if about-section is in the viewport
    const isInViewport = sectionTop < viewportHeight && sectionBottom > 0;

    // Check if about-philosophy is close to the top of the viewport
    if (isInViewport && sectionTop <= 0 && sectionBottom > viewportHeight) {
        aboutPhilosophy.classList.add('sticky');
    }
}

document.addEventListener('scroll', () => {
    lastKnownScrollPosition = window.scrollY;

    if (!ticking) {
        window.requestAnimationFrame(() => {
            handleScroll();
            ticking = false;
        });

        ticking = true;
    }
});
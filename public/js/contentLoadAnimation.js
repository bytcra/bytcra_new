document.addEventListener("DOMContentLoaded", () => {
    // Select all elements with the class 'fade-in'
    const fadeElements = document.querySelectorAll(".fade-in");

    const observerOptions = {
        threshold: 0.2, // Trigger when 20% of the element is visible
    };

    // Intersection Observer callback
    const fadeInObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible"); // Add the visible class
                observer.unobserve(entry.target); // Stop observing after it's visible
            }
        });
    }, observerOptions);

    // Observe each fade-in element
    fadeElements.forEach((el) => {
        fadeInObserver.observe(el);
    });
});
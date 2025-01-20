document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll('.nav-link'); // Select all nav links
    const sections = document.querySelectorAll('section');  // Select all sections

    // Function to highlight active link while scrolling
    const highlightNavOnScroll = () => {
        let currentSectionId = '';

        // Loop through each section to find the current one
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 70; // Offset for sticky header
            const sectionHeight = section.offsetHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        // Update the active class for links
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    };

    // Add smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }
        });
    });

    // Add scroll event listener to highlight nav
    window.addEventListener('scroll', highlightNavOnScroll);
});

document.addEventListener("DOMContentLoaded", () => {
    const contactButton = document.getElementById("contactButton");

    if (contactButton) {
        contactButton.addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelector("#contact").scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        });
    }
});
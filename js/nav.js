document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll('.nav-link'); // Select all nav links
    const sections = document.querySelectorAll('section');  // Select all sections
    const homeLink = document.querySelector('.nav-link[href="#home"]'); // Select Home link
    const header = document.querySelector('header'); // Select header

    // Function to highlight active link while scrolling
    const highlightNavOnScroll = () => {
        let currentSectionId = 'home';

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
            if (targetId === "home") {
                // Scroll to the very top including the header
                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                });
            } else {
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                    });
                }
            }
        });
    });
    homeLink.classList.add('active');
    window.addEventListener('scroll', () => {
        if (window.scrollY === 0) {
            navLinks.forEach(link => link.classList.remove('active'));
            homeLink.classList.add('active');
        }
        highlightNavOnScroll();
    });

    // Ensure Home is active when touching the header
    header.addEventListener('mouseover', () => {
        if (window.scrollY === 0) {
            navLinks.forEach(link => link.classList.remove('active'));
            homeLink.classList.add('active');
        }
    });

    // Add scroll event listener to highlight nav
    // window.addEventListener('scroll', highlightNavOnScroll);
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

document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("menuButton");
    const closeButton = document.getElementById("closeButton");
    const mobileNav = document.getElementById("mobileNav");

    menuButton.addEventListener("click", () => {
        mobileNav.classList.add("open");
    });

    closeButton.addEventListener("click", () => {
        mobileNav.classList.remove("open");
    });
});
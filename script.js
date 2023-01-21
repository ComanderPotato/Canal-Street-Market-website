"use strict";
const images = document.querySelectorAll("[data-image]");
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
}, {
    threshold: 0.5,
});
images.forEach((image) => observer.observe(image));

const images = document.querySelectorAll("[data-image]");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry);
      }
    });
  },
  {
    threshold: 0.5,
  }
);

images.forEach((image) => observer.observe(image));

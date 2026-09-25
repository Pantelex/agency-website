"use strict";
const counters = document.querySelectorAll(".counter");

const startCounter = (counter) => {
  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const current = +counter.innerText;

    const increment = Math.max(target / 100, 1);

    if (current < target) {
      counter.innerText = Math.ceil(current + increment);

      setTimeout(updateCounter, 40);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      startCounter(entry.target);

      observer.unobserve(entry.target);
    }
  });
});

counters.forEach((counter) => {
  observer.observe(counter);
});

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

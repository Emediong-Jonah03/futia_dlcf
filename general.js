// general.js

document.addEventListener("DOMContentLoaded", () => {
  // Toggle navigation menu
  const toggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  if (toggle && navLinks) {
    toggle.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  }

  // Highlight current page nav link
  document.querySelectorAll("nav a").forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add("active");
    }
  });

  // Update footer year
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});

// Scroll to top button behavior
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  scrollTopBtn.style.display = window.scrollY > 200 ? "block" : "none";
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


// === Testimonial Carousel with Fade + Auto-Rotate ===
let testimonies = JSON.parse(localStorage.getItem("testimonies") || "[]");

if (testimonies.length === 0) {
  // fallback example testimonies
  testimonies = [
   
  ];
}
testimonies = testimonies.slice(-5);


let currentTestimony = 0;

const textElement = document.getElementById("testimonial-text");
const authorElement = document.getElementById("testimonial-author");
const nextBtn = document.getElementById("nextTestimony");
const prevBtn = document.getElementById("prevTestimony");
const box = document.querySelector(".testimonial-box");

function showTestimony(index) {
  box.classList.add("fade");
  setTimeout(() => {
    textElement.textContent = testimonies[index].text;
    authorElement.textContent = testimonies[index].author;
    box.classList.remove("fade");
  }, 300);
}

// Manual controls
nextBtn.addEventListener("click", () => {
  currentTestimony = (currentTestimony + 1) % testimonies.length;
  showTestimony(currentTestimony);
});

prevBtn.addEventListener("click", () => {
  currentTestimony = (currentTestimony - 1 + testimonies.length) % testimonies.length;
  showTestimony(currentTestimony);
});

// Auto-rotate every 7 seconds
setInterval(() => {
  currentTestimony = (currentTestimony + 1) % testimonies.length;
  showTestimony(currentTestimony);
}, 7000);

// Load first testimony
showTestimony(currentTestimony);
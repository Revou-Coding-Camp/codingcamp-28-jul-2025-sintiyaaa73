// Navbar active on click
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", function () {
    document.querySelectorAll("nav a").forEach((l) => l.classList.remove("active"));
    this.classList.add("active");
  });
});

// Navbar active on scroll
window.addEventListener("scroll", function () {
  const sections = document.querySelectorAll("main section");
  const navLinks = document.querySelectorAll("nav a");
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 80;
    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + currentSection) {
      link.classList.add("active");
    }
  });
});

// Set Home active on first load
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("nav a").forEach((l) => l.classList.remove("active"));
  document.querySelector('nav a[href="#home"]').classList.add("active");
});

// Function to display a welcome message
function welcomeMessage() {
  const popup = prompt("Please enter your name:");

  // If the user provides a name, update the welcome speech element
  if (popup) {
    const welcomeElement = document.getElementById("welcome-speech");
    welcomeElement.textContent = popup;
  }
}

// Jalankan kode ini setelah DOM siap
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("nav a").forEach((l) => l.classList.remove("active"));
  document.querySelector('nav a[href="#home"]').classList.add("active");
  welcomeMessage();
});

// Form validation and submission
const form = document.querySelector(".contact-form");
const result = document.getElementById("result-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  try {
    if (name && email && message) {
      result.textContent = `Hi ${name}! Your message sent successfully!`;
      result.style.color = "green";
      result.style.display = "block";

      form.reset();

      // Hide the result message after 5 seconds
      setTimeout(() => {
        result.style.display = "none";
      }, 5000);
    } else {
      result.textContent = "Please fill in all fields.";
      result.style.color = "red";
      result.style.display = "block";
    }
  } catch (error) {
    result.innerText = "Something went wrong!";
    result.style.display = "block";
    result.style.color = "red";
  }
});

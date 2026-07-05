const menuButton = document.querySelector(".menu-button");
const mainNav = document.querySelector(".main-nav");
const themeToggle = document.querySelector(".theme-toggle");
const themeIcon = document.querySelector(".theme-icon");
const quoteForm = document.querySelector(".quote-form");

if (menuButton && mainNav) {
  menuButton.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");

    menuButton.setAttribute("aria-expanded", isOpen ? "true" : "false");
    menuButton.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu"
    );
  });

  document.querySelectorAll(".main-nav a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation menu");
    });
  });
}

function updateThemeIcon() {
  if (!themeToggle || !themeIcon) return;

  const isDarkMode = document.body.classList.contains("dark-mode");

  themeIcon.textContent = isDarkMode ? "☀" : "☾";
  themeToggle.setAttribute(
    "aria-label",
    isDarkMode ? "Switch to light mode" : "Switch to dark mode"
  );
}

const savedTheme = localStorage.getItem("clearout-theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
}

updateThemeIcon();

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    const isDarkMode = document.body.classList.contains("dark-mode");

    localStorage.setItem("clearout-theme", isDarkMode ? "dark" : "light");
    updateThemeIcon();
  });
}

if (quoteForm) {
  quoteForm.addEventListener("submit", (event) => {
    event.preventDefault();

    alert(
      "Thanks! This demo form is not connected yet, but a real business version can send quote requests by email or Jobber."
    );
  });
}
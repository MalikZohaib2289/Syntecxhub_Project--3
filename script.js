const themeToggle = document.getElementById("themeToggle");
const themeBadge = document.getElementById("themeBadge");
const heroTitle = document.getElementById("heroTitle");
const heroText = document.getElementById("heroText");
const statusText = document.getElementById("statusText");

const STORAGE_KEY = "themePreference";

function applyTheme(theme) {
  const isDark = theme === "dark";

  document.body.classList.toggle("dark", isDark);
  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeToggle.setAttribute(
    "aria-label",
    isDark ? "Switch to light mode" : "Switch to dark mode"
  );

  themeBadge.textContent = isDark ? "DARK MODE" : "LIGHT MODE";
  heroTitle.textContent = isDark
    ? "A focused, comfortable workspace."
    : "A bright, clean workspace.";
  heroText.textContent = isDark
    ? "Dark mode reduces bright surfaces and gives the interface a calm, focused feel."
    : "Toggle the switch to change the theme. Your preference is automatically saved in your browser.";
  statusText.textContent = `Current theme: ${isDark ? "Dark" : "Light"}`;

  localStorage.setItem(STORAGE_KEY, theme);
}

function getSavedTheme() {
  const savedTheme = localStorage.getItem(STORAGE_KEY);

  if (savedTheme === "dark" || savedTheme === "light") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

themeToggle.addEventListener("click", () => {
  const nextTheme = document.body.classList.contains("dark") ? "light" : "dark";
  applyTheme(nextTheme);
});

applyTheme(getSavedTheme());

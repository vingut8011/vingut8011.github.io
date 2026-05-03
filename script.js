// Close modal
const modal = document.getElementById("welcomeModal");
const closeModal = document.getElementById("closeModal");

closeModal.addEventListener("click", function () {
  modal.style.display = "none";
});

// Dark mode localStorage
const darkModeToggle = document.getElementById("darkModeToggle");

if (localStorage.getItem("darkMode") === "enabled") {
  document.body.classList.add("dark-mode");
  darkModeToggle.checked = true;
}

darkModeToggle.addEventListener("change", function () {
  if (darkModeToggle.checked) {
    document.body.classList.add("dark-mode");
    localStorage.setItem("darkMode", "enabled");
  } else {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("darkMode", "disabled");
  }
});
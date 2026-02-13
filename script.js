const toggleBtn = document.getElementById("themeToggle");

if (toggleBtn) {
  toggleBtn.addEventListener("click", function () {
    document.body.classList.toggle("light-mode");
  });
}


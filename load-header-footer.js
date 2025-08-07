// load-header-footer.js
document.addEventListener("DOMContentLoaded", () => {
  // Load header
  fetch("header.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("header").innerHTML = data;
    })
    .catch(err => console.error("Header load error:", err));

  // Load footer
  fetch("footer.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("footer").innerHTML = data;
      // Auto-update year AFTER footer is loaded
      const startYear = 2025;
      const currentYear = new Date().getFullYear();
      const yearSpan = document.getElementById("copyright-year");
      if (yearSpan) {
        yearSpan.textContent = currentYear > startYear ? `${startYear} - ${currentYear}` : `${startYear}`;
      }
    document.getElementById("copyright-year").textContent = copyright;
    })
    .catch(err => console.error("Footer load error:", err));
});

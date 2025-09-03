document.addEventListener("DOMContentLoaded", () => {
  // ----------- Load Header -----------
  fetch("header.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("header").innerHTML = data;

      // Mobile menu toggle
      const toggle = document.querySelector('.menu-toggle');
      const navLinks = document.getElementById('navLinks');
      if (toggle && navLinks) {
        toggle.addEventListener('click', () => {
          navLinks.classList.toggle('active');
        });
      }

      // Highlight active link based on current page
      const links = navLinks?.querySelectorAll('a');
      if (links) {
        links.forEach(link => {
          const hrefPage = link.getAttribute('href').split("/").pop();
          if (hrefPage === path || (hrefPage === "index.html" && path === "")) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    })
    .catch(err => console.error("Header load error:", err));

  // ----------- Load Footer -----------
  fetch("footer.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("footer").innerHTML = data;

      // Update copyright year dynamically
      const startYear = 2025;
      const currentYear = new Date().getFullYear();
      const yearSpan = document.getElementById("year");
      if (yearSpan) {
        yearSpan.textContent = currentYear > startYear ? `${startYear} - ${currentYear}` : `${startYear}`;
      }

      // Optional: back-to-top button
      const backToTop = document.querySelector('.back-to-top');
      if (backToTop) {
        window.addEventListener('scroll', () => {
          backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
        });
        backToTop.addEventListener('click', e => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });
      }
    })
    .catch(err => console.error("Footer load error:", err));
});

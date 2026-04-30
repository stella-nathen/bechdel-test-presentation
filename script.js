const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    console.log(`jumping to ${link.textContent}`);
  });
});

console.log("Bechdel Archive process page loaded.");

// Basic UX only. Replace demo form handling with your real system (Calendly, Tally, etc.)
document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("demoForm");
const msg = document.getElementById("demoMsg");

// This is a placeholder "success" interaction.
// For real use: send to a form provider endpoint, or replace the whole form with a booking link.
form.addEventListener("submit", (e) => {
  e.preventDefault();
  msg.textContent = "Thanks — we’ll reply shortly to book your demo.";
  form.reset();
});

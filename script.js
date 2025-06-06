// Basic form submission logic
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you for reaching out, Mohit will contact you soon!');
  this.reset();
});
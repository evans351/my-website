// Log a welcome message to the console
console.log('Welcome to the Blog Website!');

// Optional: Add interactivity for the navigation menu
const navLinks = document.querySelectorAll('header nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = '#ff6347'; // Change color on hover
    });

    link.addEventListener('mouseout', () => {
        link.style.color = '#fff'; // Revert color on mouse out
    });
});

// Optional: Add a simple form submission handler
const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent actual form submission
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset(); // Clear the form
    });
}

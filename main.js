// Form submission handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send this data to a server
            // For now, we'll just show an alert
            alert(`Thank you for your message, ${name}! We'll get back to you at ${email} soon.`);
            
            // Clear the form
            contactForm.reset();
        });
    }
});

// Add smooth scrolling to all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add active class to current nav item
const currentLocation = window.location.pathname;
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    if (link.getAttribute('href') === currentLocation.split('/').pop()) {
        link.classList.add('active');
    }
});
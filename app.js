// Smooth Scrolling for Navigation Links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.error(`Element with ID "${targetId}" not found.`);
        }
    });
});

// Mobile Menu Toggle
const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Form Submission Alert
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = this.querySelector('input[placeholder="Your Name"]').value.trim();
    const email = this.querySelector('input[placeholder="Your Email"]').value.trim();
    const message = this.querySelector('textarea[placeholder="Your Message"]').value.trim();

    if (!name || !email || !message) {
        alert('Please fill out all fields.');
        return;
    }

    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
});

// Modal Functionality
const knowMoreLinks = document.querySelectorAll('.know-more');

knowMoreLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const modalId = this.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.style.display = 'block';
    });
});

document.querySelectorAll('.modal').forEach(modal => {
    const closeButton = modal.querySelector('.close');

    closeButton.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});

// Close Modal on Escape Key Press
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal').forEach(modal => {
            modal.style.display = 'none';
        });
    }
});

// Progress Bar Animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBar = entry.target;
            const progressFill = progressBar.querySelector('.progress-fill');
            const progress = progressBar.getAttribute('data-progress');
            progressFill.style.width = `${progress}%`;
        }
    });
});

document.querySelectorAll('.progress-bar').forEach(bar => {
    observer.observe(bar);
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Back-to-Top Button
const backToTopButton = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
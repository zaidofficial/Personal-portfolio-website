const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');

// Open/Close Menu
hamburger.addEventListener('click', () => {
    mobileNav.classList.toggle('show');
});

// Smooth scroll with offset (mobile + desktop)
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            const navbarHeight = document.querySelector('nav').offsetHeight;
            const elementPosition = targetSection.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - navbarHeight - 20;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }

        // Close menu on click
        mobileNav.classList.remove('show');
    });
});

// Intersection Observer for section animation
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-section');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

sections.forEach(section => {
    observer.observe(section);
});


//Form validation
document.getElementById('contact-Form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();

    // Basic validation
    if (name === '' || email === '' || message === '') {
        alert('Please fill out all fields.');
    } else {
        alert('Your message has been sent successfully!');
    }
});


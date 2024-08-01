 // Typed.js for typing animation
const typed = new Typed('#typed', {
    strings: ["Engineer", "Student", "Gamer", "Otaku", "Brother"],
    typeSpeed: 60,
    backSpeed: 40,
    backDelay: 1500,
    loop: true
});

// Menu toggle for responsive design
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    navbar.classList.toggle('active');
};

// Active link state
const navLinks = document.querySelectorAll('.navbar a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.navbar a.active').classList.remove('active');
        link.classList.add('active');
    });
});

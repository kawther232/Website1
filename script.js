function toggleMenu() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('active');
}
document.querySelector('.menu-toggle').addEventListener('click', toggleMenu);

function handleFormSubmit(event) {
    event.preventDefault(); 
    alert('Thank you for contacting us!');
}

const contactForm = document.querySelector('#contact-form');


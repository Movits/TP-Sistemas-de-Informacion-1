const opciones = document.querySelector('.opciones');
const burgerIcon = document.querySelector('.burger-icon');

burgerIcon.addEventListener('click', () => {
    opciones.classList.toggle('active');
});

const form = document.getElementById('contact-form');

form.addEventListener('submit', (event) => {
    const name = form.querySelector('#nombre');
    const email = form.querySelector('#email');
    const mensaje = form.querySelector('#mensaje');
    
    if (!name.value || !email.value || !mensaje.value) {
        event.preventDefault();
        alert('Please fill in all fields.');
    }
});


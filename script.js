const opciones = document.querySelector('.opciones');
const burgerIcon = document.querySelector('.burger-icon');

burgerIcon.addEventListener('click', () => {
    opciones.classList.toggle('active');
});

const form = document.getElementById('contact-form');

form.addEventListener('submit', (event) => {
    const nombre = form.querySelector('#nombre');
    const email = form.querySelector('#email');
    const mensaje = form.querySelector('#mensaje');
    
    if (!nombre.value || !email.value || !mensaje.value) {
        event.preventDefault();
        alert('Please fill in all fields.');
    }
});


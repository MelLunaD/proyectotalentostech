// Obtengo el elemento del formulario
const formulario = document.getElementById("contact-form");

// Agrego el evento al formulario
formulario.addEventListener("submit", event =>{
    // Obtengo los datos de cada campo
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Obtengo los elementos de los mensajes de error
    const errorName = document.getElementById("errorName");
    const errorEmail = document.getElementById("errorEmail");
    const errorMessage = document.getElementById("errorMessage");

    let formularioValido = true;

    // Verifico que el campo nombre no esté vacío.
    if (name === "") {
        errorName.classList.remove("d-none");
        formularioValido = false;
    } else {
        errorName.classList.add("d-none");
    }

    // Verifico que el email tenga un formato válido.
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errorEmail.classList.remove("d-none");
        formularioValido = false;
    } else {
        errorEmail.classList.add("d-none");
    }
    
    // Verifico que el mensaje tenga al menos 10 caracteres.
    if (message.length < 10) {
        errorMessage.classList.remove("d-none");
        formularioValido = false;
    } else {
        errorMessage.classList.add("d-none");
    }

    // Si los campos están todos validados, envío el formulario.
    if (formularioValido) {
        alert("Formulario enviado correctamente.");
        const formularioContacto = {
            name: name,
            email: email,
            message: message
        };
    }
})
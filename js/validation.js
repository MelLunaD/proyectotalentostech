const formulario = document.getElementById("contact-form");
console.log(formulario);

formulario.addEventListener("submit", event =>{
    event.preventDefault();

    const name =document.getElementById("name").value.trim();
    const email =document.getElementById("email").value.trim();
    const message =document.getElementById("message").value.trim();

    console.log(name);
    console.log(email);
    console.log(message);

    const errorName = document.getElementById("errorName");
    const errorEmail = document.getElementById("errorEmail");
    const errorMessage = document.getElementById("errorMessage");

    let formularioValido = true;
//Poner un mensaje general que se modifique en orden segun error
    if (name === "") {
        errorName.classList.remove("d-none");
        formularioValido = false;
    }else {
        errorName.classList.add("d-none");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errorEmail.classList.remove("d-none");
        formularioValido = false;
    } else {
        errorEmail.classList.add("d-none");
    }

    if (message.length < 10) {
        errorMessage.classList.remove("d-none");
        formularioValido = false;
    } else {
        errorMessage.classList.add("d-none");
    }

    if (formularioValido) {
        alert("Formulario enviado correctamente.");
        const formularioContacto = {
            name: name,
            email: email,
            message: message
        };
    }
})
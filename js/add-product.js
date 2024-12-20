document.addEventListener("DOMContentLoaded", () => {
    // guardo en una constante, un array de etiquetas 
    // es un nodeList del tipo element, adentro guarda todas las anclas que encuentra que tengan la clase btn-agregar
    const addBtns = document.querySelectorAll(".cart-add");
    const cartQuantity = document.querySelector("#cartQuantity")

    console.log(addBtns);
    
    // recorrreme la lista de nodos (array)
    // y para cada boton (ancla)
    addBtns.forEach(boton => {
        // quedate escuchando si alguien hace click en ese boton
        boton.addEventListener("click", (event) => {
            event.preventDefault();

            // Obtener datos del producto
            const name = boton.getAttribute("data-name");
            const price = boton.getAttribute("data-price");


            // Obtener el carrito actual de localStorage
            // dame el item carrito de la memoria local del navegador y sino dame un array vacio
            const cart = JSON.parse( localStorage.getItem("cart") ) || [];
            
            // Agregar el producto al carrito
            cart.push(
                { name, price }
            );

            // Guardar el carrito actualizado en localStorage
            localStorage.setItem("cart", JSON.stringify(cart));
            
            alert(`
Producto [ ${name} ] agregado.
Total de productos en el carrito: ${cart.length}
            `)
        });
    });
});
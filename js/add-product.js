document.addEventListener("DOMContentLoaded", () => {
    // guardo en una constante, un array de etiquetas 
    // es un nodeList del tipo element, adentro guarda todas las anclas que encuentra que tengan la clase btn-agregar
    const addBtns = document.querySelectorAll(".cart-add");

    // recorrreme la lista de nodos (array)
    // y para cada boton (ancla)
    addBtns.forEach(boton => {
        // quedate escuchando si alguien hace click en ese boton
        boton.addEventListener("click", (event) => {
            event.preventDefault();

            const name = boton.getAttribute("data-name");
            const price = boton.getAttribute("data-price");


            const cart = JSON.parse( localStorage.getItem("cart") ) || [];
            
            if ( cart.length === 0 ) {
                cart.push(
                    {   
                        name: name,
                        price: price,
                        quantity: 1
                    }
                );
            } else {
                let productInCart = cart.find( product => product.name === name );
                if ( productInCart ) {
                    productInCart.quantity++;
                } else {
                    cart.push(
                        {   
                            name: name,
                            price: price,
                            quantity: 1
                        }
                    );
                }
            }

            localStorage.setItem("cart", JSON.stringify(cart));
            
            alert(`
Producto [ ${name} ] agregado.
Total de productos en el carrito: ${cart.length}
            `)
        });
    });
});
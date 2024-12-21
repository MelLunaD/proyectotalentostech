document.addEventListener("DOMContentLoaded", () => {
    // guardo en una constante, un array de etiquetas 
    // es un nodeList del tipo element, adentro guarda todas las anclas que encuentra que tengan la clase btn-agregar
    const addBtns = document.querySelectorAll(".cart-add");

    // Recorro los botones, agregándoles un evento.
    addBtns.forEach(boton => {
        // Agrego un evento para agregar el producto al carrito
        boton.addEventListener("click", (event) => {
            event.preventDefault();

            // Obtengo los datos del producto.
            const name = boton.getAttribute("data-name");
            const price = boton.getAttribute("data-price");


            // Busco los datos del carrito en el localStorage. (Si no existe, creo un array vacío)
            const cart = JSON.parse( localStorage.getItem("cart") ) || [];
            
            // Si el carrito está vacío, agrego el producto.
            if ( cart.length === 0 ) {
                cart.push(
                    {   
                        name: name,
                        price: price,
                        quantity: 1
                    }
                );
            }
            // Si el carrito ya tiene productos, verifico si el producto ya está.
            else {
                let productInCart = cart.find( product => product.name === name );
                // Si este producto ya está en el carrito, incremento la cantidad.
                if ( productInCart ) {
                    productInCart.quantity++; 
                }
                // Si el producto no está en el carrito, lo agrego.
                else {
                    cart.push(
                        {   
                            name: name,
                            price: price,
                            quantity: 1
                        }
                    );
                }
            }

            // Actualizo el carrito en el localStorage.
            localStorage.setItem("cart", JSON.stringify(cart));
            
            // Mando un alert al usuario para informarle que el producto fue agregado. (Con la cantidad total de productos)
            alert(`
Producto [ ${name} ] agregado.
Total de productos en el carrito: ${cart.length}
            `)
        });
    });
});
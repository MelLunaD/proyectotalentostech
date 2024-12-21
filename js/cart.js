document.addEventListener("DOMContentLoaded", () => {
    const cartable = document.getElementById("cartable");
    const totalCart= document.getElementById("totalCart");
    const totalCartDiv = document.getElementById("totalCartDiv");
    const emptyCartSection = document.getElementById("emptyCartSection");
    const cartMain = document.getElementById("cart-main");

    const cart = JSON.parse(localStorage.getItem("cart")) || [];


    // Vuelvo a renderizar el carrito cuando lo requiero.
    const cartRender = () => {
        cartable.innerHTML = "";
        
        // Si el carrito está vacío, muestro un mensaje y oculto el resto de la tabla.
        if (cart.length === 0) {
            cartable.innerHTML = "<tr><td colspan='3'>El carrito está vacío.</td></tr>";
            document.querySelector("#cartable tr td").classList.add("empty-table");
            document.getElementById("cartable-head").classList.add("d-none");
            totalCartDiv.classList.add("d-none");
            emptyCartSection.classList.remove("d-none");
            emptyCartSection.style.display = "flex"; // Fuerzo que el elemento se muestre ya que la clase d-none tiene menos prioridad que el CSS.
            cartMain.classList.add("cart-main-empty");

            return;
        }

        // Si hay productos en el carrito, muestro la tabla con los datos.
        cart.forEach((product, index) => {
            emptyCartSection.style.display = "none";
            const row = document.createElement("tr");
            row.innerHTML = `
                <td class="prod-name">${product.name}</td>
                <td class="prod-price">$${parseFloat(product.price).toFixed(2)}</td>
                <td class="prod-quantity">
                    ${product.quantity}
                    <button class="btn btn-less btn-sm" data-index="${index}">-</button>
                    <button class="btn btn-plus btn-sm" data-index="${index}">+</button>
                </td>
                <td class="prod-subtotal">$${( parseFloat(product.price) * parseInt(product.quantity) ).toFixed(2)}</td>
                <td class="prod-remove">
                    <button class="btn btn-danger btn-sm" data-index="${index}">Eliminar</button>
                </td>
            `;
            cartable.appendChild(row);
        });

        // Calculo el total de la compra.
        totalResult();
    }

    // Función que calcula el total de la compra.
    const totalResult =() => {
        const total = cart.reduce((suma, product) => suma + parseFloat(product.price) * parseInt(product.quantity), 0);
        totalCart.textContent = "$" + total.toFixed(2);
    }

    // Agrego evento para los botones.
    cartable.addEventListener("click", (event) => {
        // Si se clickea el botón de elminar (REMOVE), remueve el producto de el carrito.
        if (event.target.classList.contains("btn-danger")) { 
            const index = event.target.getAttribute("data-index"); 
            cart.splice(index, 1);
            localStorage.setItem("cart", JSON.stringify(cart));
            cartRender(); 
        }
        
        // Si se clickea el botón de menos (-), disminuye la cantidad del producto. (Si hay 1, directamente lo eliminamos).
        if (event.target.classList.contains("btn-less")) {
            const index = event.target.getAttribute("data-index");
            if (cart[index].quantity > 1) {
                cart[index].quantity--;
                localStorage.setItem("cart", JSON.stringify(cart));
                cartRender();
            } else {
                // Si hay sólo 1 producto, se elimina del carrito.
                cart.splice(index, 1);
                localStorage.setItem("cart", JSON.stringify(cart));
                cartRender();
            }
        }
        
        // Si se clickea el botón de más (+), aumenta la cantidad del producto.
        if (event.target.classList.contains("btn-plus")) {
            const index = event.target.getAttribute("data-index"); 
            cart[index].quantity++;
            localStorage.setItem("cart", JSON.stringify(cart));
            cartRender(); 
        } 
    })

    // Vuelvo a renderizar el carrito con los últimos cambios.
    cartRender();
});
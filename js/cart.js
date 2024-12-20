document.addEventListener("DOMContentLoaded", () => {
    const cartable = document.getElementById("cartable");
    const totalCart= document.getElementById("totalCart");

    const cart = JSON.parse(localStorage.getItem("cart")) || [];


    const cartRender = () => {
        cartable.innerHTML = "";

        console.log(cart)
        
        if (cart.length === 0) {
            cartable.innerHTML = "<tr><td colspan='3'>El carrito está vacío.</td></tr>";
            totalCart.textContent = "0.00";
            return;
        }

        cart.forEach((producto, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${producto.name}</td>
                <td>$${producto.price}</td>
                <td>
                    <button class="btn btn-danger btn-sm" data-index="${index}">Eliminar</button>
                </td>
            `;
            cartable.appendChild(row);
        });

        totalResult();
    }

    const totalResult =() => {
        const total = cart.reduce((suma, producto) => suma + parseFloat(producto.price), 0);
        totalCart.textContent = total.toFixed(2);
    }

    cartable.addEventListener("click", (event) => { 
        if (event.target.classList.contains("btn-danger")) { 
            const index = event.target.getAttribute("data-index"); 
            cart.splice(index, 1);
            localStorage.setItem("cart", JSON.stringify(cart));
            cartRender(); 
        } 
    })

    cartRender();

});

/*
<article>
    <img src="../assets/img/huesito.jpg" alt="producto">
<h3>Huesito de tela</h3>
<h4>$2000.00</h4>
<a href="../pages/cart.html"><i class="fa-solid fa-cart-plus"></i></a>
</article>
<article>
<img src="../assets/img/pelotas.jpg" alt="producto">
<h3>Pelota de lana</h3>
<h4>$2000.00</h4>
<a href="../pages/cart.html"><i class="fa-solid fa-cart-plus"></i></a>
</article>
<article>
<img src="../assets/img/mordillocontira.jpg" alt="producto">
<h3>Mordillo con soga</h3>
<h4>$2000.00</h4>
<a href="../pages/cart.html"><i class="fa-solid fa-cart-plus"></i></a>
</article>
<article>
<img src="../assets/img/huesitoypelota.jpg" alt="producto">
<h3>Huesitos y pelota de goma</h3>
<h4>$2000.00</h4>
<a href="../pages/cart.html"><i class="fa-solid fa-cart-plus"></i></a>
</article>



/*
const HOW_I_MET = {
    id: 4,
    serie_name: "How I Met Your Mother",
    seasons: [
        {id: 1, chapters: 22},
        {id: 2, chapters: 22},
        {id: 3, chapters: 20},
        {id: 4, chapters: 24},
        {id: 5, chapters: 24},
        {id: 6, chapters: 24},
        {id: 7, chapters: 24},
        {id: 8, chapters: 24},
        {id: 9, chapters: 24}
    ],
    genre: "Sitcom, Comedia, Drama, Comedia Romántica",
    cast: [
        {name: "Josh Radnor", wiki_name: "Josh_Radnor"},
        {name: "Jason Segel", wiki_name: "Jason_Segel"},
        {name: "Cobie Smulders", wiki_name: "Cobie_Smulders"},
        {name: "Neil Patrick Harris", wiki_name: "Neil_Patrick_Harris"},
        {name: "Alyson Hannigan", wiki_name: "Alyson_Hannigan"},
        {name: "Cristin Milioti", wiki_name: "Cristin_Milioti"}
    ],
    desc: 'En el año 2030, el arquitecto Ted Mosby (Josh Radnor) decide contarles a sus dos hijos la historia de cómo conoció a su madre. Por lo tanto, inicia una narración de recuerdos recopilados desde el 2005, año en el que dos de sus mejores amigos, Marshall Eriksen (Jason Segel) y Lily Aldrin (Alyson Hannigan), deciden casarse tras nueve años de noviazgo. Esa decisión hace que Ted, soltero empedernido, al igual que su otro mejor amigo Barney Stinson (Neil Patrick Harris), decida encontrar al amor de su vida desesperadamente. De una manera curiosa, aparece en ese instante la reportera canadiense Robin Scherbatsky (Cobie Smulders), que se convertirá en una nueva amiga del grupo y parte importante en la vida de Ted. A partir de este hecho, inicia la búsqueda implacable de una esposa que se convierta en madre de sus hijos.',
    trailer_id: "BxJ9wBuQUFI?si=PhsYv_P6yy_KiiV2",
    video_id: "Dqf1BmN4Dag",
    similars: [0, 1, 2, 3, 4],
    portada_id: "how-i-met-your-mother",
    html_link:  "./details-series.html?id=",
    img_src: "how-i-met-your-mother.png"
}

localStorage.setItem("PELICULA", JSON.stringify(HOW_I_MET));

localStorage.getItem("PELICULA");

localStorage.removeItem("PELICULA");

const PRODUCTS = [
    {
        id: 1,
        nombre: "Collar para perro",
        precio: 5000.25
    }
]
*/
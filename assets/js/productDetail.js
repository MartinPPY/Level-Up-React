//SCRIPT PARA MOSTRAR EL DETALLE DEL PRODUCTO
function getDetails() {
    const urlParams = new URLSearchParams(window.location.search)
    const id = urlParams.get("id")
    const product = productos.find(p => p.codigo === id)
    if (product) {
        document.querySelector("#product-name").textContent = product.nombre
        document.querySelector("#product-price").textContent = "$ " + new Intl.NumberFormat('es-CL').format(product.precio) + " CLP"
        document.querySelector("#product-description").textContent = product.descripcion
        document.querySelector("#product-img").src = product.image
        document.querySelector("#product-code").textContent = product.codigo
    }
}

addEventListener("load", () => {
    getDetails()
})

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault()
    const authenticated = localStorage.getItem("authenticated");
    if(!authenticated){
        window.location.href = '/login.html';
        return;
    }
    const carrito = localStorage.getItem("carrito") ? JSON.parse(localStorage.getItem("carrito")) : []
    const product = productos.find(p => p.codigo === document.querySelector("#product-code").textContent)
    const quantity = parseInt(document.querySelector("#quantity").value)
    const productInCart = carrito.find(p => p.codigo === product.codigo)

    if (!productInCart) {

        product.cantidad = quantity;
        product.stock -= quantity;
        carrito.push(product);

        localStorage.setItem('carrito', JSON.stringify(carrito));

        if (window.location.pathname === '/cart.html') {
            getProductsOfCart()
        }

    } else {

        productInCart.cantidad += quantity
        product.stock -= quantity

        localStorage.setItem('carrito', JSON.stringify(carrito));

        if (window.location.pathname === '/cart.html') {
            getProductsOfCart()
        }


    }

    const cart = JSON.parse(localStorage.getItem('carrito')) || [];
    if (cart.length > 0) {
        const cantidadProductos = cart.reduce((acc, item) => acc + item.cantidad, 0);
        document.querySelector("#cart-resumen").innerHTML = `
        <i class="bi bi-cart fs-5"></i>
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">${cantidadProductos}</span>
        `;
    } else {
        document.querySelector("#cart-resumen").innerHTML += `
        <i class="bi bi-cart fs-5"></i>
        `;
    }


})


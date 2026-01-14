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

    console.log("agreando al carrito")

    const carrito = localStorage.getItem("carrito") ? JSON.parse(localStorage.getItem("carrito")) : []
    const product = productos.find(p => p.codigo === document.querySelector("#product-code").textContent)
    const quantity = document.querySelector("#quantity").value
    const productInCart = carrito.find(p => p.codigo === product.codigo)

    if (!productInCart) {

        product.cantidad = quantity;
        product.stock-= quantity;
        carrito.push(product);

        localStorage.setItem('carrito', JSON.stringify(carrito));

        if (window.location.pathname === '/cart.html') {
            getProductsOfCart()
        }

    } else {

        productInCart.cantidad = quantity
        product.stock -= quantity;

        localStorage.setItem('carrito', JSON.stringify(carrito));

        if (window.location.pathname === '/cart.html') {
            getProductsOfCart()
        }


    }
    
    
})


//SCRIPT PARA MOSTRAR EL DETALLE DEL PRODUCTO
const getDetails = () => {
    const urlParams = new URLSearchParams(window.location.search)
    const id = urlParams.get("id")
    const product = productos.find(p => p.codigo === id)
    if (product) {
        document.querySelector("#product-name").textContent = product.nombre
        document.querySelector("#product-price").textContent = "$ "+new Intl.NumberFormat('es-CL').format(product.precio)+" CLP"
        document.querySelector("#product-description").textContent = product.descripcion
    }
}

addEventListener("load", () => {
    getDetails()
})
//SCRIPT PARA COLOCAR PRODUCTOS EN EL LA SECCION PRODUCTOS
const renderProducts = () => {
    let container

    if (window.location.pathname.endsWith("products.html")) {

        container = document.querySelector("#products > .row")

    } else {

        container = document.querySelector("#products > .scroll> .row")
    }

    for (let i = 0; i < productos.length; i++) {
        container.innerHTML += `
        <div class="col">
            <div class="card bg-black text-white h-100 border-secondary">
                <img src="${productos[i].image}" class="card-img-top" alt="Juego">            
                <div class="card-body">
                    <h5 class="card-title">${productos[i].nombre}</h5>
                    <p class="card-text">
                    Categoria: ${productos[i].categoria}
                    </p>
                </div>
                <div class="card-footer d-flex flex-column gap-2 border-secondary">
                    <div>
                        <span class="fw-bold text-info">
                            $ ${new Intl.NumberFormat('es-CL').format(productos[i].precio)} CLP
                        </span>
                    </div>
                    <div class="d-flex gap-2 justify-content-between align-items-center">
                        <button 
                            class="btn btn-sm btn-outline-info"
                            onclick="getProductDetail('${productos[i].codigo}')"
                        >
                            <i class="bi bi-eye"></i>
                            Ver detalle
                        </button>
                        <button class="btn btn-sm btn-level-up text-white" onclick="addToCart('${productos[i].codigo}')">
                            <i class="bi bi-cart-plus"></i>
                            Añadir al carrito
                        </button>
                    </div>
                </div>
            </div>
        </div>
        `
    }
}


const getProductDetail = (id) => {
    window.location.href = "product-detail.html?id=" + id
}


//LISTENER PARA CARGAR LAS FUNCIONES EN TODA LA PAGINA
addEventListener("load", () => {
    renderProducts()
})



//SCRIPT PARA COLOCAR PRODUCTOS EN EL HOME
const renderProducts = () => {
    const container = document.querySelector("#products > .row")

    for (let i = 0; i <= 2; i++) {
        container.innerHTML += `
        <div class="col">
            <div class="card bg-black text-white h-100 border-secondary">
                <img src="${productos[i].image}" class="card-img-top" alt="Juego">
                <div class="card-body">
                    <h5 class="card-title">${productos[i].nombre}</h5>
                    <p class="card-text">
                        ${productos[i].descripcion}
                    </p>
                </div>
                <div class="card-footer d-flex justify-content-between align-items-center border-secondary">
                    <span class="fw-bold text-info">$ ${new Intl.NumberFormat('es-CL').format(productos[i].precio)} CLP</span>
                    <button class="btn btn-sm btn-level-up text-white">                        
                        <i class="bi bi-cart-plus"></i>
                        <span>Añadir al carrito</span>
                    </button>
                </div>
            </div>
        </div>
        `
    }
}



//LISTENER PARA CARGAR LAS FUNCIONES EN TODA LA PAGINA
addEventListener("load", () => {
    renderProducts()
})
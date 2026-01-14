/* 
ARCHIVO PARA COLOCAR SCRIPTS GENERALES QUE SIRVEN PARA TODA LA APLICACIÓN
Logica que se ejecutara aqui
- Mostrar estado del carrito
- Mostrar estado de autenticación
- Renderizar categorias

*/

//FUNCION PARA RENDERIZAR CATEGORIAS
const renderCategories = () => {
    const categoriesMenu = document.querySelector("#categories-menu")
    categorias.map(categoria => {
        categoriesMenu.innerHTML += `
            <li><a class="dropdown-item" href="#">${categoria.nombre}</a></li>
        `
    })
}

//CARRITO
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

function traerResumen() {
    if (carrito.length <= 0) {
        document.querySelector(".offcanvas-body").innerHTML = `
            <p>Aun no has agregado productos al carrito</p>
        `
    } else {
        document.querySelector(".offcanvas-body").innerHTML = `
            <p>Has agregado ${carrito.length} productos al carrito</p>
            <div class="d-flex flex-column gap-2 mb-3">
                ${carrito.map(item => `
                    <div class="card bg-dark text-white border">
                        <div class="row g-0 align-items-center">
                            <div class="col-4">
                                <img src="${item.image}" class="img-fluid rounded-start" alt="${item.nombre}">
                            </div>
                            <div class="col-8">
                                <div class="card-body py-2">
                                    <h6 class="card-title mb-1">${item.nombre}</h6>
                                    <p class="card-text mb-0">Cantidad: ${item.cantidad}</p>
                                    <p class="card-text mb-0">
                                        $${(item.precio * item.cantidad).toLocaleString()}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
            <a href="./cart.html" class="btn btn-level-up-secondary w-100 mt-3">
                Ver carrito
            </a>
        `
    }
}

//LISTENER PARA CARGAR LAS FUNCIONES EN TODA LA PAGINA
addEventListener("load", () => {
    renderCategories()
    document.querySelector("#year").textContent = new Date().getFullYear()
})
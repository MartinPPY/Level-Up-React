/* 
ARCHIVO PARA COLOCAR SCRIPTS GENERALES QUE SIRVEN PARA TODA LA APLICACIÓN
Logica que se ejecutara aqui
- Mostrar estado del carrito
- Mostrar estado de autenticación
- Renderizar categorias

*/

//CARRITO
function traerResumen() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
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

function isAuthenticated() {
    const authenticated = localStorage.getItem("authenticated")
    if (!authenticated) {
        document.querySelector("#cart-resumen").innerHTML = ""
    } else {
        const cart = JSON.parse(localStorage.getItem('carrito')) || [];
        document.querySelector("#auth-options").innerHTML = `
            <button class="btn btn-sm btn-outline-light" onclick="logOut()" >Cerrar sesión</button>
            <a href="#cart" class="position-relative" role="button" data-bs-toggle="offcanvas" id="cart-resumen"
                aria-controls="cart" onclick="traerResumen()">
                <i class="bi bi-cart fs-5"></i>
                ${cart.length > 0 ? `<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">${cart.reduce((acc, item) => acc + item.cantidad, 0)}</span>` : ""}
            </a>
        `
    }
}

function logOut() {
    localStorage.removeItem("authenticated")
    localStorage.removeItem("isAdmin")
    window.location.href = "login.html"
}

//LISTENER PARA CARGAR LAS FUNCIONES EN TODA LA PAGINA
addEventListener("load", () => {
    document.querySelector("#year").textContent = new Date().getFullYear()
    isAuthenticated()
})

//SCRIPT PARA HARCODEAR EL USUARIO ADMIN
let admin = localStorage.getItem("admin")
if (!admin) {
    admin = {
        email: "admin@gmail.com",
        password: "12345678"
    }

    localStorage.setItem("admin", JSON.stringify(admin))
}

//SCRIPT PARA VERIFICAR USUARIO ADMINISTRADOR
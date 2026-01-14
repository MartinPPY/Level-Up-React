// 1. ESTADO DEL CARRITO (Cargar de LocalStorage)


// 2. SELECTORES DE ELEMENTOS


// 4. LÓGICA DEL CARRITO (Funciones Globales)
window.agregarAlCarrito = function(codigo) {
    const producto = productos.find(p => p.codigo === codigo);
    const itemEnCarrito = carrito.find(i => i.codigo === codigo);

    if (itemEnCarrito) {
        itemEnCarrito.cantidad += 1;
    } else {
        // Creamos una copia del producto y añadimos cantidad
        carrito.push({ ...producto, cantidad: 1 });
    }
    actualizarTodo();
    
    // Opcional: Abrir el carrito automáticamente al añadir
    const cartOffcanvas = document.getElementById('cart');
    const bsOffcanvas = bootstrap.Offcanvas.getOrCreateInstance(cartOffcanvas);
    bsOffcanvas.show();
};

window.disminuirCantidad = function(codigo) {
    const item = carrito.find(i => i.codigo === codigo);
    if (item) {
        item.cantidad -= 1;
        if (item.cantidad <= 0) {
            carrito = carrito.filter(i => i.codigo !== codigo);
        }
    }
    actualizarTodo();
};

window.eliminarDelCarrito = function(codigo) {
    carrito = carrito.filter(item => item.codigo !== codigo);
    actualizarTodo();
};

window.vaciarCarrito = function() {
    if(confirm('¿Estás seguro de que quieres vaciar el carrito?')) {
        carrito = [];
        actualizarTodo();
    }
};

// 5. ACTUALIZAR INTERFAZ Y LOCALSTORAGE
function actualizarTodo() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
    renderizarCarrito();
}

function renderizarCarrito() {
    if (!cartList) return;
    cartList.innerHTML = '';

    if (carrito.length === 0) {
        cartList.innerHTML = `
            <div class="text-center py-5">
                <i class="bi bi-cart-x fs-1 text-secondary"></i>
                <p class="mt-2">Tu carrito está vacío</p>
            </div>`;
        return;
    }

    carrito.forEach(item => {
        const div = document.createElement('div');
        div.className = 'card bg-dark border-secondary mb-2 p-2';
        div.innerHTML = `
            <div class="d-flex align-items-center gap-2">
                <img src="${item.image}" alt="${item.nombre}" style="width: 50px; height: 50px; object-fit: cover;" class="rounded">
                <div class="flex-grow-1">
                    <h6 class="mb-0 small fw-bold text-white">${item.nombre}</h6>
                    <small class="text-info">$${(item.precio * item.cantidad).toLocaleString('es-CL')}</small>
                </div>
            </div>
            <div class="d-flex justify-content-between align-items-center mt-2">
                <div class="btn-group btn-group-sm">
                    <button onclick="disminuirCantidad('${item.codigo}')" class="btn btn-outline-light border-secondary">-</button>
                    <span class="btn btn-dark border-secondary disabled text-white">${item.cantidad}</span>
                    <button onclick="agregarAlCarrito('${item.codigo}')" class="btn btn-outline-light border-secondary">+</button>
                </div>
                <button onclick="eliminarDelCarrito('${item.codigo}')" class="btn btn-sm btn-link text-danger p-0">
                    <i class="bi bi-trash"></i>
                </button>
            </div>
        `;
        cartList.appendChild(div);
    });

    const total = carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
    const resumenDiv = document.createElement('div');
    resumenDiv.className = 'mt-4 border-top border-secondary pt-3';
    resumenDiv.innerHTML = `
        <div class="d-flex justify-content-between align-items-center">
            <span class="fs-5">Total:</span>
            <span class="fs-4 fw-bold text-info">$${total.toLocaleString('es-CL')}</span>
        </div>
    `;
    cartList.appendChild(resumenDiv);
}
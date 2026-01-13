import { productos } from "../assets/js/products/data";

// 1. Inicializar el carrito (faltaba esta variable en tu código)
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

const productList = document.getElementById('product-list');
const cartList = document.getElementById('cart-List');

// Corrección: "mostrarProductos" (escrito correctamente)
function mostrarProductos() {
    if (!productList) return; // Seguridad por si no existe el elemento
    productList.innerHTML = '';
    
    productos.forEach(producto => { // Corrección: plural (productos) a singular (producto)
        const div = document.createElement('div'); // Corrección: document en minúscula
        div.className = 'product';
        div.innerHTML = `
            <strong>${producto.nombre}</strong><br>
            Precio: $${producto.precio}<br>
            <button onclick="agregarAlCarrito(${producto.codigo})">Agregar al carrito</button>
        `;
        productList.appendChild(div);
    });
}

// Corrección: Usar la variable 'carrito' para buscar, no el nombre de la función
window.agregarAlCarrito = function(codigo) {
    const producto = productos.find(p => p.codigo === codigo);
    const item = carrito.find(i => i.codigo === codigo);

    if (item) {
        item.cantidad += 1;
    } else {
        carrito.push({ ...producto, cantidad: 1 });
    }
    guardarCarrito();
    mostrarCarrito();
};

window.disminuirCantidad = function(codigo) {
    const item = carrito.find(i => i.codigo === codigo);
    if (item) {
        item.cantidad -= 1;
        if (item.cantidad <= 0) {
            carrito = carrito.filter(i => i.codigo !== codigo);
        }
        guardarCarrito();
        mostrarCarrito();
    }
};

window.eliminarDelCarrito = function(codigo) {
    carrito = carrito.filter(item => item.codigo !== codigo);
    guardarCarrito();
    mostrarCarrito();
};

window.vaciarCarrito = function() { // Corrección: vaciarVarrito -> vaciarCarrito
    carrito = [];
    guardarCarrito();
    mostrarCarrito();
};

function guardarCarrito() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

function mostrarCarrito() {
    if (!cartList) return;
    cartList.innerHTML = '';

    if (carrito.length === 0) {
        cartList.innerHTML = '<p>El carro está vacío.</p>';
        return;
    }

    carrito.forEach(item => {
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
            <strong>${item.nombre}</strong><br>
            Precio: $${item.precio} x ${item.cantidad} = $${item.precio * item.cantidad}<br>
            <button onclick="agregarAlCarrito(${item.codigo})">+</button>
            <button onclick="disminuirCantidad(${item.codigo})">-</button>
            <button onclick="eliminarDelCarrito(${item.codigo})">Eliminar</button>
        `;
        cartList.appendChild(div);
    });
    
    const total = carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
    cartList.innerHTML += `<h3>Total: $${total}</h3>`;
}

// Inicializar
mostrarProductos();
mostrarCarrito();
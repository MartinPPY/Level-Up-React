function addToCart(codigo) {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const producto = productos.find(producto => producto.codigo === codigo);
    const cartItem = carrito.find(item => item.codigo === codigo);

    if (!cartItem) {
        producto.cantidad = 1;
        producto.stock--;
        carrito.push(producto);
        localStorage.setItem('carrito', JSON.stringify(carrito));
        if (window.location.pathname === '/cart.html') {
            getProductsOfCart()
        }
        getCartLength();
    } else {
        cartItem.cantidad ? cartItem.cantidad++ : cartItem.cantidad = 1;
        producto.stock--;
        localStorage.setItem('carrito', JSON.stringify(carrito));
        if (window.location.pathname === '/cart.html') {
            getProductsOfCart()
        }
        getCartLength();
    }
}

function delToCart(codigo) {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const cartItem = carrito.find(item => item.codigo === codigo);
    if (cartItem) {
        cartItem.cantidad--;
        if (cartItem.cantidad === 0) {
            carrito = carrito.filter(item => item.codigo !== codigo);
        }
        localStorage.setItem('carrito', JSON.stringify(carrito));
        getProductsOfCart()
    }
}

function delAllFromCart() {
    Swal.fire({
        title: "¿Estás seguro?",
        text: "No podrás revertir esto!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, Vaciar carrito"
    }).then((result) => {
        if (result.isConfirmed) {
            localStorage.removeItem('carrito');
            getProductsOfCart()
            Swal.fire({
                text: "El carrito ha sido vaciado.",
                icon: "success"
            });
        }
    });

}

function getProductsOfCart() {
    const cart = JSON.parse(localStorage.getItem('carrito')) || [];
    const container = document.querySelector("#cart-items");
    const user = JSON.parse(localStorage.getItem("user"));
    container.innerHTML = "";
    for (let item of cart) {
        container.innerHTML += `
        <div class="card mb-3 cart-item bg-dark text-white border">
            <div class="row g-0 align-items-center">
                <div class="col-md-3 text-center">
                    <img src="${item.image}" class="img-fluid rounded" alt="Producto">
                </div>                        
                <div class="col-md-5">
                    <div class="card-body">
                        <h5 class="card-title mb-1">${item.nombre}</h5>
                        <p class="card-text text-white">${item.categoria}</p>
                        <p class="card-text text-white">${item.precio.toLocaleString('es-CL')} CLP</p>
                    </div>
                </div>
                <div class="col-md-4 text-center">
                    <div class="d-flex justify-content-center align-items-center">
                        <button class="btn btn-outline-secondary btn-sm" onclick="delToCart('${item.codigo}')">−</button>
                            <span class="mx-3 cantidad">${item.cantidad}</span>
                        <button class="btn btn-outline-secondary btn-sm" onclick="addToCart('${item.codigo}')">+</button>
                    </div>
                </div>
            </div>
        </div>
        `
    }

    if (window.location.pathname === '/cart.html') {
        document.querySelector("#total").textContent = cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0).toLocaleString('es-CL') + ' CLP';

        if (user.email.endsWith("@duoc.cl") || user.email.endsWith("@duocuc.cl")) {
            document.querySelector("#is-duoc").textContent = "Por ser parte de duoc tienes un descuento del 20%";
            document.querySelector("#total").textContent = (cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0) * 0.8).toFixed(0).toLocaleString('es-CL') + ' CLP';
        }
    }
}

function getCartLength() {

    if (window.location.pathname === '/cart.html') return;

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
}


addEventListener('DOMContentLoaded', () => {
    getProductsOfCart();
    getCartLength();
});

function comprar() {
    Swal.fire({
        icon: 'success',
        title: 'Gracias por tu compra',
        text: 'Tu compra ha sido realizada con exito',
        showConfirmButton: false,
        timer: 2000
    }).then(() => {

    localStorage.removeItem('carrito');
    getProductsOfCart()
    window.location.href = '/index.html'
    })  
}

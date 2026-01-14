const addToCart = (codigo) => {
    const producto = productos.find(producto => producto.codigo === codigo);
    const cartItem = carrito.find(item => item.codigo === codigo);

    if (!cartItem) {
        producto.cantidad = 1;
        producto.stock--;
        carrito.push(producto);
        localStorage.setItem('carrito', JSON.stringify(carrito));
        traerResumen();
    } else {
        cartItem.cantidad ? cartItem.cantidad++ : cartItem.cantidad = 1;
        producto.stock--;
        localStorage.setItem('carrito', JSON.stringify(carrito));

        traerResumen();
    }
}

const getProductsOfCart = () => {
    const cart = JSON.parse(localStorage.getItem('carrito')) || [];
    const container = document.querySelector("#cart-items");
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
                        <button class="btn btn-outline-secondary btn-sm" onclick="">−</button>
                            <span class="mx-3 cantidad">${item.cantidad}</span>
                        <button class="btn btn-outline-secondary btn-sm" onclick="addToCart('${item.codigo}')">+</button>
                    </div>
                </div>
            </div>
        </div>
        `
    }

    document.querySelector("#total").textContent = cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0).toLocaleString('es-CL') + ' CLP';


}

addEventListener('DOMContentLoaded', () => {
    getProductsOfCart();
});

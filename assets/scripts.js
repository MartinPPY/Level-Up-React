//SCRIPT PARA COLOCAR PRODUCTOS EN EL HOME
const renderProducts = () => {
    const container = document.querySelector("#products > .row")

    for (let i = 0; i <= 2; i++) {
        container.innerHTML += `
        <div class="card p-4 col-lg bg-dark text-white border-white d-flex flex-column justify-content-between ">
            <img src="${productos[i].image}" class="card-img-top" alt="...">
            <h5 class="card-title" id="card-title"> ${productos[i].nombre}</h5>
            <p class="card-text" id="card-text">  ${productos[i].precio} CLP </p>
            <a href="#" class="btn btn-level-up">Agregar al carrito</a>
        </div>
        `
    }
}

addEventListener("load", () => {
    renderProducts()
    document.querySelector("#year").textContent = new Date().getFullYear()
})
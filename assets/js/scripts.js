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



//LISTENER PARA CARGAR LAS FUNCIONES EN TODA LA PAGINA
addEventListener("load", () => {
    renderCategories()
    document.querySelector("#year").textContent = new Date().getFullYear()
})
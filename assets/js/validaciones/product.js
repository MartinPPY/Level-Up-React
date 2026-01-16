document.querySelector("#product-form").addEventListener("submit", (e) => {
    e.preventDefault()
    const errors = []
    const productCode = document.querySelector("#product-code").value
    const productName = document.querySelector("#product-name").value
    const productPrice = document.querySelector("#product-price").value
    const productStock = parseInt(document.querySelector("#product-stock").value)
    const productStockCritico = parseInt(document.querySelector("#product-stock-critico").value)

    if (productCode.trim() === "") {
        errors.push("El codigo del producto es obligatorio")
    }

    if (productCode.trim().length < 3) {
        errors.push("El codigo del producto debe tener al menos 3 caracteres")
    }

    if (productName.trim() === "") {
        errors.push("El nombre del producto es obligatorio")
    }

    if (productName.trim().length < 3) {
        errors.push("El nombre del producto debe tener al menos 3 caracteres")
    }

    if (!Number.isInteger(productStock)) {
        errors.push("El stock del producto debe ser un numero entero")
    }

    if (!isNaN(productStockCritico)) {
        if (!Number.isInteger(productStockCritico)) {
            errors.push("El stock critico del producto debe ser un numero entero")
        }
    }


    if (errors.length > 0) {
        document.querySelector("#product-form-errors").innerHTML = `
        <div class="alert alert-danger" role="alert">
        <ul>
            ${errors.map(error => `<li>${error}</li>`).join("")}
        </ul>
        </div>
        `
        return
    }

    Swal.fire({
        icon: 'success',
        title: 'Producto creado correctamente',
        showConfirmButton: false,
        timer: 1500
    })


})
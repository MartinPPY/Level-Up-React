//VALIDACIONES PARA FORMULARIOS

//FUNCION PARA VALIDAR EL RUT
function validarRut(rut) {
    rut = rut.toString().trim().toUpperCase();

    // Debe tener al menos 8 caracteres
    if (!/^\d{7,8}[0-9K]$/.test(rut)) return false;

    const cuerpo = rut.slice(0, -1);
    const dv = rut.slice(-1);

    let suma = 0;
    let multiplicador = 2;

    for (let i = cuerpo.length - 1; i >= 0; i--) {
        suma += parseInt(cuerpo[i]) * multiplicador;
        multiplicador = multiplicador < 7 ? multiplicador + 1 : 2;
    }

    const resto = 11 - (suma % 11);

    let dvCalculado;
    if (resto === 11) dvCalculado = '0';
    else if (resto === 10) dvCalculado = 'K';
    else dvCalculado = resto.toString();

    return dv === dvCalculado;
}


document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault()
    const errores = []
    const name = document.querySelector("#name").value
    const lastname = document.querySelector("#lastname").value
    const birthday = document.querySelector("#birthday").value
    const phone = parseInt(document.querySelector("#phone").value)
    const rut = document.querySelector("#run").value

    if (rut.trim() === "") {
        errores.push("El rut es obligatorio")
    }

    if (!validarRut(rut)) {
        errores.push("El rut es invalido")
    }


    if (name.trim() === "") {
        errores.push("El nombre es obligatorio")
    }

    if (lastname.trim() === "") {
        errores.push("El apellido es obligatorio")
    }


    const age = (new Date().getFullYear()  - new Date(birthday).getFullYear())

    if (age < 18) {
        errores.push("Debes tener al menos 18 años")
    }




    if (errores.length > 0) {
        const erroresDiv = document.querySelector(".errores")
        erroresDiv.innerHTML = ""
        erroresDiv.innerHTML = `
        <div class="alert alert-danger" role="alert">
            <ul>
            ${errores.map(error => `<li class="text-black text-start" >${error}</li>`).join("")}
            </ul>
        </div>
        `
        return
    }
})
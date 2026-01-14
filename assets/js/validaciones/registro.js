addEventListener("DOMContentLoaded", () => {
    const selectComunas = document.querySelector("#comunas");

    let options = "";

    comunas.forEach(comuna => {
        options += `<option value="${comuna.id}" class="text-black" >${comuna.nombre}</option>`;
    });

    selectComunas.innerHTML += options;
});


//funcion para validar el rut
function validarRut(rut) {
    if (!rut) return false;

    rut = rut.toUpperCase();

    // Validar formato básico: números + K o número al final
    if (!/^\d+[0-9K]$/.test(rut)) return false;

    const cuerpo = rut.slice(0, -1);
    const dv = rut.slice(-1);

    let suma = 0;
    let multiplo = 2;

    for (let i = cuerpo.length - 1; i >= 0; i--) {
        suma += parseInt(cuerpo[i]) * multiplo;
        multiplo = multiplo < 7 ? multiplo + 1 : 2;
    }

    const resto = suma % 11;
    const dvEsperado = 11 - resto;

    let dvCalculado;
    if (dvEsperado === 11) dvCalculado = '0';
    else if (dvEsperado === 10) dvCalculado = 'K';
    else dvCalculado = dvEsperado.toString();

    return dv === dvCalculado;
}

//funcion para validar el mail
function validarEmail(email) {
    if (!email) return false;

    email = email.trim().toLowerCase();

    const regex = /^[a-z0-9._%+-]+@(gmail\.com|duocuc\.cl|duoc\.cl)$/;

    return regex.test(email);
}



//Validar formulario de registro
document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const errors = [];
    const run = document.querySelector("#run").value;
    const name = document.querySelector("#name").value;
    const lastname = document.querySelector("#lastname").value;
    const birthday = document.querySelector("#birthday").value;
    const phone = parseInt(document.querySelector("#phone").value);
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const confirmPassword = document.querySelector("#confirm-password").value;

    if (run.trim() === "") {
        errors.push("El RUT es requerido");
    }

    if (!validarRut(run)) {
        errors.push("El RUT es inválido");
    }

    if (name.trim() === "") {
        errors.push("El nombre es requerido");
    }

    if (lastname.trim() === "") {
        errors.push("El apellido es requerido");
    }

    const age = new Date().getFullYear() - new Date(birthday).getFullYear();
    if (age < 18) {
        errors.push("Debes ser mayor de 18 años");
    }

    if (isNaN(phone)) {
        errors.push("El teléfono debe ser un número");
    }

    if (!validarEmail(email)) {
        errors.push("El email es inválido");
    }

    if(password.trim() === "" || confirmPassword.trim() === "") {
        errors.push("La contraseña es requerida");
    }
    
    if(password !== confirmPassword) {
        errors.push("Las contraseñas no coinciden");
    }


    if (errors.length > 0) {
        const errorDiv = document.querySelector(".error");
        errorDiv.innerHTML = ""
        errorDiv.innerHTML = `
        <div class="alert alert-danger" role="alert">
            <ul>
                ${errors.map(error => `<li class="text-black text-start">${error}</li>`).join("")}
            </ul>
        </div>
        `
        return
    }


});
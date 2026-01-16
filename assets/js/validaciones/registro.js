
//LISTENER PARA TRAER REGIONES
addEventListener("DOMContentLoaded", () => {
    const selectRegiones = document.querySelector("#regiones");
    let regionOptions = "";
    regiones.forEach(region => {
        regionOptions += `<option value="${region.id}" class="text-black">${region.nombre}</option>`;
    });
    selectRegiones.innerHTML += regionOptions;
});

document.querySelector("#regiones").addEventListener("change", (e) => {

    e.preventDefault();
    const selectRegion = document.querySelector("#regiones");
    const selectComunas = document.querySelector("#comunas");
    const comunasByRegion = comunas.filter(comuna => comuna.regionId === parseInt(selectRegion.value));

    selectComunas.innerHTML = "";

    if (comunasByRegion.length > 0) {

        selectComunas.disabled = false;
        let comunasOptions = "";
        comunasByRegion.forEach(comuna => {
            comunasOptions += `<option value="${comuna.id}" class="text-black">${comuna.nombre}</option>`;
        });

        selectComunas.innerHTML += comunasOptions;
    } else {
        selectComunas.disabled = true;
    }

})




// Función para validar el RUT
function validarRut(rut) {
    if (!rut) return false;

    rut = rut.toUpperCase();

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

// Función para validar email
function validarEmail(email) {
    if (!email) return false;

    email = email.trim().toLowerCase();
    const regex = /^[a-z0-9._%+-]+@(gmail\.com|duocuc\.cl|duoc\.cl)$/;
    return regex.test(email);
}


// Validar formulario de registro
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
    const direction = document.querySelector("#direction").value;

    if (run.trim() === "") errors.push("El RUT es requerido");
    if (!validarRut(run)) errors.push("El RUT es inválido");
    if (name.trim() === "") errors.push("El nombre es requerido");
    if (lastname.trim() === "") errors.push("El apellido es requerido");


    if (birthday) {
        const age = new Date().getFullYear() - new Date(birthday).getFullYear();
        if (age < 18) errors.push("Debes ser mayor de 18 años");
    }

    if (direction.trim() === "") errors.push("La dirección es requerida");

    if(phone){
        if (isNaN(phone)) errors.push("El teléfono debe ser un número");
    }

    if (!validarEmail(email)) errors.push("El email es inválido");

    if (password.trim() === "" || confirmPassword.trim() === "")
        errors.push("La contraseña es requerida");

    if (password !== confirmPassword)
        errors.push("Las contraseñas no coinciden");

    if (errors.length > 0) {
        const errorDiv = document.querySelector(".error");
        errorDiv.innerHTML = `
            <div class="alert alert-danger">
                <ul>
                    ${errors.map(e => `<li class="text-black">${e}</li>`).join("")}
                </ul>
            </div>
        `;
        return;
    }

    const user = { run, name, lastname, email, password };
    localStorage.setItem("user", JSON.stringify(user));

    if (window.location.href.endsWith("admin.html")) {
        Swal.fire({
            icon: "success",
            title: "Usuario registrado",
            confirmButtonText: "OK"
        }).then(() => {
            window.location.href = "admin.html";
        });
        return
    }

    Swal.fire({
        icon: "success",
        title: "Registrado con éxito",
        text: "Bienvenido a la tienda",
        confirmButtonText: "OK"
    }).then(() => {
        window.location.href = "login.html";
    });

});

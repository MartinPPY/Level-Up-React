/* Parte de Ignacio */
const email = document.getElementById("email");
const pass = document.getElementById("password");
const form = document.getElementById("form");

form.addEventListener("submit", e => {
    e.preventDefault();

    const errores = [];

    const regexEmail = /^[a-zA-Z0-9._%+-]+@(gmail\.com|duoc\.cl|duocuc\.cl)$/;

    if (!regexEmail.test(email.value)) {
        errores.push("Solo se permiten correos @gmail.com, @duoc.cl o @duocuc.cl");
    }

    if (pass.value.length < 8) {
        errores.push("La contraseña debe tener al menos 8 caracteres");
    }

    if (errores.length > 0) {
        document.querySelector("#errores").innerHTML = `
        <div class="alert alert-danger">
            <ul>
                ${errores.map(e => `<li class="text-black text-start">${e}</li>`).join("")}
            </ul>
        </div>
        `
        return;
    }

    const user = JSON.parse(localStorage.getItem("user"));


    if (!user) {

        const admin = JSON.parse(localStorage.getItem("admin"))

        if (admin.password === pass.value && admin.email === email.value) {
            localStorage.setItem("authenticated", true)
            localStorage.setItem("isAdmin", true)
            window.location.href = "admin.html"
            return
        }

        Swal.fire({
            icon: "warning",
            title: "Ha ocurrido un error",
            text: "El usuario no existe",
            confirmButtonText: "Ok"
        })
        return
    }

    if (user.password !== pass.value || user.email !== email.value) {

        const admin = JSON.parse(localStorage.getItem("admin"))

        if (admin.password === pass.value || admin.email === email.value) {
            localStorage.setItem("authenticated", true)
            localStorage.setItem("isAdmin", true)
            window.location.href = "admin.html"

        }

        Swal.fire({
            icon: "warning",
            title: "Ha ocurrido un error",
            text: "La contraseña o el correo no coinciden",
            confirmButtonText: "Intentar de nuevo"
        })
        return;
    }

    localStorage.setItem("authenticated", true)
    window.location.href = "index.html"

});

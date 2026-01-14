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
        Swal.fire({
            icon: "error",
            title: "Error en el formulario",
            html: `
                <ul style="text-align:left">
                    ${errores.map(err => `<li>${err}</li>`).join("")}
                </ul>
            `,
            confirmButtonText: "Intentar de nuevo"
        });
        return;
    }

    Swal.fire({
        icon: "success",
        title: "Registro exitoso 🎉",
        text: "Bienvenido a Level Up",
        confirmButtonText: "Continuar"
    }).then(() => {
        window.location.href = "index.html";
    });
});

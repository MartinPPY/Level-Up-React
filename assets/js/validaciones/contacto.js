const email = document.getElementById("email")
const name = document.getElementById("name")
const message = document.getElementById("message")
const form = document.getElementById("form")

form.addEventListener("submit", e => {
    e.preventDefault()

    const errores = []

    let regexEmail = /^[a-zA-Z0-9._%+-]+@(gmail\.com|duoc\.cl|duocuc\.cl)$/

    if (!regexEmail.test(email.value)) {
        errores.push("Solo se permiten correos @gmail.com, @duoc.cl o @duocuc.cl")
    }

    if (errores.length > 0) {
        const errorDiv = document.querySelector("#errores")
        errorDiv.innerHTML = `
        <div class="alert alert-danger" role="alert">
            <ul>
                ${errores.map(error => `<li class="text-black text-start">${error}</li>`).join("")}
            </ul>
        </div>
        `
        return

    }
    Swal.fire({
        icon: "success",
        title: "Mensaje enviado con exíto",
        text: "Espere nuestra pronta respuesta",
        confirmButtonText: "OK"
    }).then(() => {
        window.location.href = "contacto.html";
    });

    // Aquí podrías enviar el formulario si todo está correcto
    // form.submit()
})
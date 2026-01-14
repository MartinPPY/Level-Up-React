/*Parte de Ignacio*/
const email = document.getElementById("email")
const pass = document.getElementById("password")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")
const errores = []

form.addEventListener("submit", e => {
    e.preventDefault()
    let warnings = ""

    let entrar = false

    let regexEmail = /^[a-zA-Z0-9._%+-]+@(gmail\.com|duoc\.cl|duocuc\.cl)$/

    if (!regexEmail.test(email.value)) {
        warnings = "Solo se permiten correos @gmail.com, @duoc.cl o @duocuc.cl"
        errores.push("Solo se permiten correos @gmail.com, @duoc.cl o @duocuc.cl")
        console.log(warnings)
        warnings += `El email no es valido <br>`
        entrar = true
    }

    console.log("Correo válido")
    if (errores.length > 0){
        const erroresDiv = document.getElementById("errores")
        erroresDiv.innerHTML = ""
        erroresDiv.innerHTML = `
        <div class="alert alert-danger" role="alert">
            <ul>
            ${errores.map(error => `<li class="text-black text-start">${error}</li>`).join("")}
            </ul>
        </div>
        `
        return
        
    }

    if(pass.value.length < 4 && pass.value.length > 10){
        warnings += `La contraseña no es valida <br>`
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = warnings
    }
})

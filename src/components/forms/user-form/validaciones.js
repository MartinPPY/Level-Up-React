const validateRut = (rut) => {
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

export const validateForm = (formData) => {
    const  errors = {}

    //validar rut
    if (!formData.run || formData.run.trim().length < 7) {
        errors.run = 'El RUT es obligatorio'
    }

    if (!validateRut(formData.run)) {
        errors.run = 'El RUT no es válido'
    }

    // Validar nombre
    if (!formData.name || formData.name.trim().length < 2) {
        errors.name = 'El nombre debe tener al menos 2 caracteres'
    }

    // Validar apellidos
    if (!formData.lastName || formData.lastName.trim().length < 2) {
        errors.lastName = 'Los apellidos deben tener al menos 3 caracteres'
    }

    // Validar email
    const emailRegex = /^[a-z0-9._%+-]+@(gmail\.com|duocuc\.cl|duoc\.cl)$/i;

    if (!formData.email || !emailRegex.test(formData.email)) {
        errors.email = 'Ingrese un email válido'
    }

    //Validar fecha de nacimiento
    if (formData.birthday) {
        const birthDate = new Date(formData.birthday);
        const today = new Date();
        const age = today.getFullYear() - birthDate.getFullYear();
        if (age < 18) {
            errors.birthday = 'Debe ser mayor de 18 años'
        }
    }

    //Validar dirección
    if (formData.addres.trim().length < 3) {
        errors.addres = 'La dirección debe tener al menos 3 caracteres'
    }

    // Validar contraseña
    if (!formData.password || formData.password.length < 4) {
        errors.password = 'La contraseña debe tener al menos 6 caracteres'
    }

    if (!formData.confirmPassword || formData.confirmPassword !== formData.password) {
        errors.confirmPassword = 'Las contraseñas no coinciden'
    }

    return errors ? errors : null
}

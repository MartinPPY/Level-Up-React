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
    const errors = {}

    //validar rut
    if (!formData.rut || formData.rut.trim().length < 7) {
        errors.rut = 'El RUT es obligatorio'
    }

    if (!validateRut(formData.rut)) {
        errors.rut = 'El RUT no es válido'
    }

    // Validar nombre
    if (!formData.nombre || formData.nombre.trim().length < 2) {
        errors.nombre = 'El nombre debe tener al menos 2 caracteres'
    }

    // Validar email
    const emailRegex = /^[a-z0-9._%+-]+@(gmail\.com|duocuc\.cl|duoc\.cl)$/
    if (!formData.email || !emailRegex.test(formData.email)) {
        errors.email = 'Ingrese un email válido'
    }

    // Validar contraseña
    if (!formData.password || formData.password.length < 6) {
        errors.password = 'La contraseña debe tener al menos 6 caracteres'
    }

    return errors
}

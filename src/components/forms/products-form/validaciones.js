export const validateForm = (formData) => {
    const errors = {};

    //Validar codigo
    if (!formData.codigo || formData.codigo.trim() === "") {
        errors.codigo = "El codigo es requerido";
    }
    
    //Validar nombre
    if (!formData.nombre || formData.nombre.trim() === "") {
        errors.nombre = "El nombre es requerido";
    }

    //Validar precio
    if (!formData.precio || formData.precio < 0) {
        errors.precio = "El precio es requerido";
    }
    
    //Validar stock
    if (!formData.stock) {
        errors.stock = "El stock es requerido";
    }
    
    //Validar categoria
    if (!formData.categoria) {
        errors.categoria = "La categoria es requerida";
    }
    
    
    return errors
}
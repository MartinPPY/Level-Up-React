export const getFields = (
    categories
) => {
    return [
        {
            id: "codigo",
            label: "Código",
            type: "text",
            placeholder: "Código del producto",
            required: true,
            minLength: 3
        }, {
            id: "nombre",
            label: "Nombre",
            type: "text",
            placeholder: "Nombre del producto",
            required: true,
            maxLength: 100
        },
        {
            id: "descripcion",
            label: "Descripción",
            type: "textarea",
            placeholder: "Descripción del producto",
            required: false,
            maxLength: 500
        },
        {
            id: "precio",
            label: "Precio",
            type: "number",
            placeholder: "Precio del producto",
            required: true,
            value: 0,
            step: 0.01
        },
        {
            id: "stock",
            label: "Stock",
            type: "number",
            placeholder: "Stock del producto",
            required: true,
            value: 0,
            step: 1
        }, {
            id: "stockCritico",
            label: "Stock Crítico (Opcional)",
            type: "number",
            placeholder: "Stock crítico del producto",
            required: false,
            value: 0,
            step: 1
        }, {
            id: "categoria",
            label: "Categoría",
            type: "select",
            options: [
                { value: "", label: "Seleccione una categoría" },
                ...categories.map(cat => ({
                    value: cat.id, 
                    label: cat.name
                }))
            ],
            required: true
        },
        {
            id: "imagen",
            label: "Imagen (Opcional)",
            type: "file",
            accept: "image/*",
            required: false
        }


    ]
}
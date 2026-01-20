export const getFields = () => {
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
            id: "stock-critico",
            label: "Stock Crítico",
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
                { value: "1", label: "Juegos de Mesa" },
                { value: "2", label: "Accesorios" },
                { value: "3", label: "Videojuegos" },
            ],
            required: true
        },
        {
            id: "imagen",
            label: "Imagen",
            type: "file",
            accept: "image/*",
            required: false
        }


    ]
}
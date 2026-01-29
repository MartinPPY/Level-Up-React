export const getFields = ({
    roles,
    regiones,
    comunasFiltradas,
    regionId,
    setRegionId
}) => [
        {
            id: "run",
            label: "Rut (Sin guión y con dígito verificador)",
            type: "text",
            placeholder: "Ej: 12345678K",
            minLength: 7,
            maxLength: 9,
            pattern: "^\\d{7,9}[kK]?$",
            required: true
        },
        {
            id: "name",
            label: "Nombres (Máximo 50 caracteres)",
            type: "text",
            placeholder: "John Martin",
            maxLength: 50,
            required: true
        },
        {
            id: "lastName",
            label: "Apellidos (Máximo 100 caracteres)",
            type: "text",
            placeholder: "Doe Smith",
            maxLength: 100,
            required: true
        },
        {
            id: "email",
            label: "Correo Electrónico",
            type: "email",
            placeholder: "Dominios válidos: gmail, duoc, duocuc",
            maxLength: 100,
            required: true
        },
        {
            id: "birthday",
            label: "Fecha de nacimiento",
            type: "date",
            required: window.location.pathname.endsWith("registro") ? true : false
        },
        {
            id: "userType",
            label: "Tipo de usuario",
            type: "select",
            options: [
                { value: "", label: "Seleccione un tipo de usuario" },
                ...roles.map(role => ({ value: role.id, label: role.name === "ROLE_ADMIN" ? "Administrador" : role.name === "ROLE_VENDEDOR" ? "Vendedor" : "Usuario" }))
            ],
            required: true 
        },
        {
            id: "region",
            label: "Región",
            type: "select",
            options: [
                { value: "", label: "Seleccione una región" },
                ...regiones.map(r => ({ value: r.id, label: r.name }))
            ],
            required: true,
            onChange: (e) => setRegionId(Number(e.target.value))
        },
        {
            id: "comuna",
            label: "Comuna",
            type: "select",
            options: [
                { value: "", label: "Seleccione una comuna" },
                ...comunasFiltradas.map(c => ({ value: c.id, label: c.name }))
            ],
            required: true,
            disabled: !regionId
        },
        {
            id: "addres",
            label: "Dirección",
            type: "text",
            placeholder: "Ingrese su dirección",
            maxLength: 300,
            required: true
        },
        {
            id: "password",
            label: "Contraseña",
            type: "password",
            placeholder: "Mínimo 4 caracteres",
            minLength: 4,
            maxLength: 10,
            required: true
        },
        {
            id: "confirmPassword",
            label: "Confirmar Contraseña",
            type: "password",
            placeholder: "Confirme su contraseña",
            minLength: 4,
            maxLength: 10,
            required: true
        }
    ]

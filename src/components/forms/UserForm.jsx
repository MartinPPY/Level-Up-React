import { useState } from "react"
import { comunas, regiones } from "../../data"

export const UserForm = () => {

    const [regionId, setRegionId] = useState(null)

    const comunasFiltradas = comunas.filter(
        comuna => comuna.regionId === regionId
    )

    const onSubmit = (e) => {
        e.preventDefault()
        console.log("Formulario enviado")
    }

    const fields = [
        {
            id: "rut",
            label: "Rut (Sin guión ni dígito verificador)",
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
            required: window.location.pathname.endsWith("/register") ? true : false
        },
        {
            id: "userType",
            label: "Tipo de usuario",
            type: "select",
            options: [
                { value: "", label: "Seleccione un tipo" },
                { value: "admin", label: "Administrador" },
                { value: "seller", label: "Vendedor" },
                { value: "user", label: "Usuario" }
            ],
            required: true
        },
        {
            id: "region",
            label: "Región",
            type: "select",
            options: [
                { value: "", label: "Seleccione una región" },
                ...regiones.map(r => ({ value: r.id, label: r.nombre }))
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
                ...comunasFiltradas.map(c => ({ value: c.id, label: c.nombre }))
            ],
            required: true,
            disabled: !regionId
        },
        {
            id: "direccion",
            label: "Dirección",
            type: "text",
            placeholder: "Ingrese su dirección",
            required: true,
            maxLength:300
        },
        {
            id: "password",
            label: "Contraseña",
            type: "password",
            placeholder: "Ingrese su contraseña",
            required: true,
            maxLength:10,
            minLength:4
        },
        {
            id: "confirmPassword",
            label: "Confirmar Contraseña",
            type: "password",
            placeholder: "Confirme su contraseña",
            required: true,
            maxLength:10,
            minLength:4
        },
    ]

    return (
        <form onSubmit={onSubmit}>
            {fields.map(field => (
                <div className="mb-3" key={field.id}>
                    <label htmlFor={field.id} className="form-label">
                        {field.label}
                    </label>

                    {field.type === "select" ? (
                        <select
                            className="form-select"
                            id={field.id}
                            required={field.required}
                            disabled={field.disabled}
                            onChange={field.onChange}
                        >
                            {field.options.map((option, index) => (
                                <option key={index} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    ) : (
                        <input
                            type={field.type}
                            className="form-control"
                            id={field.id}
                            placeholder={field.placeholder}
                            minLength={field.minLength}
                            maxLength={field.maxLength}
                            pattern={field.pattern}
                            required={field.required}
                        />
                    )}
                </div>
            ))}

            <button type="submit" className="btn btn-dark">
                Registrar Usuario
            </button>
        </form>
    )
}

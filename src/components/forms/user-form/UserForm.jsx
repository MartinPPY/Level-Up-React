import { useRef, useState } from "react"
import { comunas, regiones } from "../../../data"
import { getFields } from "./fields"
import { validateForm } from "./validaciones"
import Swal from "sweetalert2"

export const UserForm = () => {

    const [regionId, setRegionId] = useState(null)
    const [formData, setFormData] = useState({})
    const [errors, setErrors] = useState({})
    const formRef = useRef(null)

    const comunasFiltradas = comunas.filter(
        comuna => comuna.regionId === regionId
    )

    const onSubmit = (e) => {
        e.preventDefault()

        console.log(formData)
        const validationErrors = validateForm(formData)

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors)
            console.log(errors)
            Swal.fire({
                title: "Error",
                text: "Por favor, complete todos los campos correctamente",
                icon: "error"
            })
            return
        }

        Swal.fire({
            title: "Éxito",
            text: "Usuario creado correctamente",
            icon: "success",
            timer: 3000,
            showConfirmButton: false
        }).then(() => {
            setFormData({})
            setErrors({})
            formRef.current.reset()
        })

    }

    const fields = getFields({
        regiones,
        comunasFiltradas,
        regionId,
        setRegionId
    })

    return (
        <form onSubmit={onSubmit} ref={formRef}>
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
                            onInput={(e) => setFormData({ ...formData, [field.id]: e.target.value })}
                        />
                    )}
                </div>
            ))}

            {
                errors && Object.keys(errors).length > 0 && (
                    <div className="alert alert-danger">
                        <ul>
                            {Object.values(errors).map((error, index) => (
                                <li key={index}>{error}</li>
                            ))}
                        </ul>
                    </div>
                )
            }

            <button type="submit" className="btn btn-dark">
                Registrar Usuario
            </button>
        </form>
    )
}

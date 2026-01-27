import { useEffect, useRef, useState } from "react"
import { getFields } from "./fields"
import { validateForm } from "./validaciones"
import Swal from "sweetalert2"
import { getLocations } from "../../../services/location.service"
import { registerUser } from "../../../services/auth.service"
import { getAllRoles } from "../../../services/role.service"
import { getAllUsers } from "../../../services/user.service"

export const UserForm = ({setUser}) => {

    const [regionId, setRegionId] = useState(null)
    const [formData, setFormData] = useState({})
    const [errors, setErrors] = useState({})
    const [locations, setLocations] = useState({ comunas: [], regions: [] })
    const [roles, setRoles] = useState([])
    const [loading, setLoading] = useState(false)
    const formRef = useRef(null)

    useEffect(() => {
        const getLocationsData = async () => {
            const { comunas, regions } = await getLocations()
            setLocations({ comunas, regions })
        }
        const getRoles = async () => {
            const roles = await getAllRoles()
            setRoles(roles)
        }

        getLocationsData()
        getRoles()

    }, [])

    const comunasFiltradas = locations?.comunas.filter(
        comuna => comuna.region.id === regionId
    )

    const fields = getFields({
        roles,
        regiones: locations.regions,
        comunasFiltradas,
        regionId,
        setRegionId
    })


    const onSubmit = async (e) => {
        e.preventDefault()

        setLoading(true)
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

        try {

            await registerUser({
                run: formData.run,
                name: formData.name,
                lastname: formData.lastName,
                email: formData.email,
                birthday: formData.birthday,
                password: formData.password,
                addres: formData.addres,
                comunaId: parseInt(formData.comuna)
            })

            const users = await getAllUsers()
            setUser(users)

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

        } catch (error) {
            console.error(error)

            Swal.fire({
                title: "Error",
                text: error.response?.data?.message || "Error al crear el usuario",
                icon: "error"
            })
            return

        } finally {
            setLoading(false)
        }

    }

    return (
        <form onSubmit={onSubmit} ref={formRef} className="row">
            {fields.map(field => (
                <div className="mb-3 col-lg-3" key={field.id}>
                    <label htmlFor={field.id} className="form-label d-flex gap-2">
                        {field.label}
                        {
                            field.required && <span className="text-danger">*</span>
                        }
                    </label>

                    {field.type === "select" ? (
                        <select                        
                            className="form-select"
                            id={field.id}
                            required={field.required}
                            disabled={field.disabled}
                            onChange={(e) => {
                                // actualizar formData
                                setFormData({ ...formData, [field.id]: e.target.value })

                                // Si es región, actualizar regionId también
                                if (field.id === "region") {
                                    setRegionId(Number(e.target.value))
                                }
                            }}
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

            <div className="mb-3 col-lg-12">
                <button type="submit" className="btn btn-dark" disabled={loading}>
                    {loading ? "Registrando..." : "Registrar Usuario"}
                </button>
            </div>
        </form>
    )
}

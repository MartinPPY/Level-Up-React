import { useEffect, useRef, useState } from "react"
import { validateForm } from "./validaciones"
import Swal from "sweetalert2"
import { getFields } from "./fields"
import { getLocations } from "../../../services/location.service"
import { registerUser } from "../../../services/auth.service"
import { useNavigate } from "react-router-dom"

export const TiendaUserForm = () => {

    const [regionId, setRegionId] = useState(null)
    const [formData, setFormData] = useState({})
    const [errors, setErrors] = useState({})
    const [locations, setLocations] = useState({ comunas: [], regions: [] })
    const [loading, setLoading] = useState(false)

    const formRef = useRef(null)
    const navigate = useNavigate()

    useEffect(() => {
        const getLocationsData = async () => {
            const { comunas, regions } = await getLocations()
            setLocations({ comunas, regions })

        }
        getLocationsData()

    }, [])

    const comunasFiltradas = locations.comunas?.filter(
        comuna => comuna.region.id === regionId
    )

    const fields = getFields({
        roles:[],
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
            setLoading(false)
            return
        }else{
            setErrors({})
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

        } catch (error) {
            Swal.fire({
                title: "Error",
                text: error.response?.data?.message || "Error al crear el usuario",
                icon: "error"
            })
            return


        } finally {
            setLoading(false)
        }

        Swal.fire("Éxito","Usuario creado correctamente","success").then(() => {
            setFormData({})
            setErrors({})
            formRef.current.reset()
            navigate("/tienda/login")
        })

    }

    return (
        <form onSubmit={onSubmit} ref={formRef} className="d-flex flex-column">
            {fields
                .filter(field => field.id !== "userType")
                .map(field => (
                    <div className="mb-3" key={field.id}>
                        <label htmlFor={field.id} className="form-label">
                            {field.label}
                        </label>

                        {field.type === "select" ? (
                            <select
                                id={field.id}
                                className="form-select"
                                required={field.required}
                                disabled={field.disabled}
                                value={formData[field.id] || ""}
                                onChange={(e) => {
                                    // actualizar formData
                                    setFormData({ ...formData, [field.id]: e.target.value })

                                    // Si es región, actualizar regionId también
                                    if (field.id === "region") {
                                        setRegionId(Number(e.target.value))
                                    }
                                }}
                            >
                                {field.options.map((option) => (
                                    <option key={option.value} value={option.value}>
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
                                onInput={(e) =>
                                    setFormData({ ...formData, [field.id]: e.target.value })
                                }
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

            <button type="submit" className="btn btn-info" disabled={loading}>
                {loading ? "Registrando..." : "Registrar Usuario"}
            </button>
        </form>
    )
}

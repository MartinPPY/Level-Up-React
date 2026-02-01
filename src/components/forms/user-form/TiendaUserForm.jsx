import { useEffect, useState } from "react"
import { getLocations } from "../../../services/location.service"
import { useNavigate } from "react-router-dom"
import { set, useForm } from "react-hook-form"

export const TiendaUserForm = () => {

    const [regionId, setRegionId] = useState(null)
    const [locations, setLocations] = useState({ comunas: [], regions: [] })
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm({
        run: "",
        name: "",
        lastname: "",
        email: "",
        birthday: "",
        password: "",
        addres: "",
        comunaId: null
    })

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

    const onSubmit = async (data) => {
        try {
            setLoading(true)

        } catch (error) {

        } finally {
            setLoading(false)

        }

    }



    return (
        <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>

            <div className="mb-3">
                <label htmlFor="run" className="form-label">Run (Sin puntos y con guion)</label>
                <input
                    type="text"
                    className="form-control"
                    id="run"
                    {...register("run", {
                        required: "El run es obligatorio",
                        minLength: { value: 7, message: "Minimo 7 caracteres!" },
                        maxLength: { value: 9, message: "Maximo 9 caracteres!" },
                        pattern: { value: /^\d+[0-9K]$/, message: "Formato invalido!" }
                    })}
                />
                {errors.run && <p className="text-danger mt-2">{errors.run.message}</p>}
            </div>

            <div className="mb-3">
                <label htmlFor="name" className="form-label">Nombre</label>
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    {...register("name", {
                        required: "El nombre es obligatorio",
                        minLength: { value: 2, message: "Minimo 2 caracteres!" },
                        maxLength: { value: 50, message: "Maximo 50 caracteres!" },
                    })}
                />
                {errors.name && <p className="text-danger mt-2">{errors.name.message}</p>}
            </div>

            <div className="mb-3">
                <label htmlFor="lastName" className="form-label">Apellido</label>
                <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    {...register("lastName", {
                        required: "El apellido es obligatorio",
                        minLength: { value: 2, message: "Minimo 2 caracteres!" },
                        maxLength: { value: 50, message: "Maximo 50 caracteres!" },
                    })}
                />
                {errors.lastName && <p className="text-danger mt-2">{errors.lastName.message}</p>}
            </div>

            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                    type="email"
                    className="form-control"
                    id="email"
                    {...register("email", {
                        required: "El correo es obligatorio",
                        minLength: { value: 2, message: "Minimo 2 caracteres!" },
                        maxLength: { value: 50, message: "Maximo 50 caracteres!" },
                        pattern: { value: /^[a-z0-9._%+-]+@(gmail\.com|duocuc\.cl|duoc\.cl)$/i, message: "Dominio invalido!" }
                    })}
                />
                {errors.email && <p className="text-danger mt-2">{errors.email.message}</p>}
            </div>

            <div className="mb-3">
                <label htmlFor="birthday" className="form-label">Fecha de nacimiento:</label>
                <input
                    type="date"
                    className="form-control"
                    id="birthday"
                    {...register("birthday", {
                        required: "La fecha de nacimiento es obligatoria",
                    })}
                />
                {errors.birthday && <p className="text-danger mt-2">{errors.birthday.message}</p>}
            </div>

            <div className="mb-3">
                <label htmlFor="region" className="form-label">Region:</label>
                <select id="region" className="form-select" onChange={(e) => setRegionId(Number(e.target.value))}>
                    <option value=""> Seleccione una region </option>
                    {
                        locations.regions.map((reg, index) => (
                            <option key={index} value={reg.id}> {reg.name}  </option>
                        ))
                    }
                </select>
            </div>

            <div className="mb-3">
                <label htmlFor="comunaId" className="form-label"> Comuna: </label>
                <select id="comunaId" className="form-select" disabled={regionId ? false : true}
                    {...register("comunaId", {
                        required: "Comuna es requerida"
                    })}>
                    <option value="">Selecciona una comuna</option>
                    {
                        comunasFiltradas.map((com, index) => (
                            <option key={index} value={com.id}>{com.name}</option>
                        ))
                    }                    
                </select>
                {errors.comunaId && <p className="text-danger mt-2">{errors.comunaId.message}</p>}
            </div>

            <div className="mb-3">
                <label htmlFor="addres">Direccion:</label>
                <input 
                    type="text" 
                    className="form-control"
                    {...register("addres",{
                        required:"La direccion es requerida!",
                        maxLength:{value:500,message:"Maximo 500 caracteres"}
                    })}
                />
            </div>






            <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? "Registrando..." : "Registrar Usuario"}
            </button>
        </form>
    )
}

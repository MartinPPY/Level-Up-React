import { useState } from "react"
import Swal from "sweetalert2"
import { Mail, MapPin, Phone } from "lucide-react"
import { useForm } from "react-hook-form"

export const Contacto = () => {

    const [loading, setLoading] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting, isValid },
        reset
    } = useForm({
        name: "",
        email: "",
        message: ""
    })

    const onSubmit = () => {
        

        setLoading(true)
        setTimeout(() => {
            Swal.fire({
                icon: 'success',
                title: 'Exito',
                text: 'El mensaje se envio correctamente',
                showConfirmButton: false,
                timer: 1500
            }).then(() => {
                setLoading(false)
                reset()
            })

        }, 3000);


    }


    return (
        <main className="container-fluid p-4 bg-dark text-white">

            <div className="text-center mb-5">
                <h1 className="fw-bold">Contacto</h1>
                <p className="text-secondary">¿Tienes dudas? Escríbenos</p>
            </div>

            <div className="row g-5">

                <div className="col-md-6 d-flex justify-content-center">
                    <div>
                        <h4>Información de contacto</h4>
                        <p className="d-flex gap-2"><Mail /> contacto@levelup.cl</p>
                        <p className="d-flex gap-2"><Phone /> +56 9 1234 5678</p>
                        <p className="d-flex gap-2"><MapPin /> Chile</p>
                    </div>
                </div>

                <div className="col-md-6">

                    <form onSubmit={handleSubmit(onSubmit)} noValidate>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="name">Nombre y Apellido:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                maxLength="100"
                                {...register("name", {
                                    setValueAs: (value) => value.trim(),
                                    required: "El nombre es obligatorio",
                                    minLength: {
                                        value: 3,
                                        message: "El nombre debe tener al menos 3 caracteres"
                                    }
                                })}
                            />
                            {errors.name && <p className="text-danger mt-2">{errors.name.message}</p>}
                        </div>

                        <div className="mb-3">
                            <label className="form-label" htmlFor="email">Correo Electronico: </label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                maxLength="100"
                                {...register("email",{
                                    setValueAs: (value) => value.trim(),
                                    required:"El correo es obligatorio",
                                    pattern:{
                                        value:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/,
                                        message:"El correo no es valido"
                                    }
                                })}
                            />
                            {errors.email && <p className="text-danger mt-2">{errors.email.message}</p>}
                        </div>

                        <div className="mb-3">
                            <label className="form-label" htmlFor="message">Mensaje:</label>
                            <textarea 
                                className="form-control" 
                                rows="4" 
                                id="message" 
                                maxLength="500" 
                                {...register("message",{
                                    setValueAs: (value) => value.trim(),
                                    required:"El mensaje es obligatorio",
                                    minLength:{
                                        value:10,
                                        message:"El mensaje debe tener al menos 10 caracteres"
                                    }
                                })} 
                            ></textarea>
                            {errors.message && <p className="text-danger mt-2">{errors.message.message}</p>}
                        </div>

                        <button 
                            type="submit" 
                            className="btn btn-primary" 
                            disabled={loading}> {loading ? "Enviando..." : "Enviar mensaje"}
                        </button>
                    </form>
                </div>
            </div>

        </main>
    )
}

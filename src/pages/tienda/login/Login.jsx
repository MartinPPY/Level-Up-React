import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { login } from "../../../services/auth.service";
import { useAuth } from "../../../context/AuthContext";
import { Eye, EyeClosed, LucideMessageCircleWarning } from "lucide-react";
import { useForm } from "react-hook-form";
import {Spinner} from "react-bootstrap"

export const Login = () => {

    const [loading,setLoading] = useState(false)
    const {setAuthenticated} = useAuth()
    const [showPassword,setShowPassword] = useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting, isValid },
        setValue,
        reset
    } = useForm({
        email: "",
        password: ""
    })

    const navigate = useNavigate()

    const onSubmit = async (data) => {

        setLoading(true)

        try {
            const response  = await login(data.email,data.password)
            localStorage.setItem("token",response.token)
            setAuthenticated(true)
            if(response.roles[0].authority === "ROLE_ADMIN" || response.roles[0].authority === "ROLE_VENDEDOR"){
                navigate("/admin")
            }else{
                navigate("/tienda")
            }
        } catch (error) {
            Swal.fire({
                title: "Error",
                text: "Correo o contraseña incorrectos",
                icon: "error"
            })
        } finally {
            setLoading(false)
        }


    }


    return (
        <main className="container-fluid p-4 bg-dark text-white">
            <div className="row d-flex align-items-center flex-column gap-2 justify-content-center">
                <div className="col-lg-6">
                    <h2 className="text-center">Inicio de sesión</h2>
                    <p className="text-center">Ingresa tus datos para iniciar sesión</p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Correo electrónico</label>
                            <input 
                                type="email" 
                                className="form-control" 
                                id="email" 
                                {...register("email",{
                                    setValueAs: (value) => value.trim(),
                                    required: "El correo es obligatorio"
                                })}
                            />
                            {errors.email && <p className="text-danger mt-2">{errors.email.message}</p>}
                        </div>
                        <div className="mb-3 position-relative">
                            <label htmlFor="password" className="form-label">Contraseña</label>
                            <input 
                                type={showPassword ? "text" : "password"} 
                                className="form-control pe-5" 
                                id="password"  
                                {...register("password",{
                                    setValueAs: (value) => value.trim(),
                                    required: "La contraseña es obligatoria"
                                })}
                            />
                            <button 
                                type="button"  
                                onClick={() => setShowPassword(!showPassword)}
                                className="btn btn-link position-absolute password-eye">{showPassword ? <EyeClosed/> : <Eye/>} </button>
                            {errors.password && <p className="text-danger mt-2">{errors.password.message}</p>}
                        </div>

                        <div className="bg-info p-2 mb-3 rounded">
                            <h4 className="text-dark"><LucideMessageCircleWarning/> Datos de prueba</h4>
                            <p className="text-dark">Usuario: <strong>admin@gmail.com - vendedor@gmail.com</strong></p>
                            <p className="text-dark">Contraseña: <strong>admin - vendedor</strong></p>
                        </div>

                        <button 
                            type="submit" 
                            className="btn btn-primary w-100 d-flex gap-2 justify-content-center align-items-center" 
                            disabled={loading}>
                                {loading ? <>
                                    <Spinner animation="border" size="sm"/>
                                    cargando...
                                </> : "Iniciar sesión"}
                        </button>
                    </form>
                </div>
            </div>
        </main>
    )
}

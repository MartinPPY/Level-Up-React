import Logo from "../../../assets/images/logo.jpeg"
import { useState } from "react";
import { validateForm } from "./validaciones";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { login } from "../../../services/auth.service";
import { useAuth } from "../../../context/AuthContext";

export const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const [loading,setLoading] = useState(false)
    const {setAuthenticated} = useAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true)
        const errors = validateForm(email, password);

        if (Object.keys(errors).length > 0) {
            setErrors(errors);
            Swal.fire({
                title: "Error",
                text: "Por favor, complete todos los campos correctamente",
                icon: "error"
            })
            return;
        }

        try {
            const data  = await login(email,password)            
            localStorage.setItem("token",data.token)
            setAuthenticated(true)
            navigate("/tienda")
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }


    }


    return (
        <main className="container-fluid p-4 bg-dark text-white">
            <div className="row d-flex align-items-center flex-column gap-2 justify-content-center">
                <div className="col-lg-6 d-flex justify-content-center">
                    <img src={Logo} alt="Logo" className="img-fluid" width="50%" />
                </div>
                <div className="col-lg-6">
                    <h2 className="text-center">Inicio de sesión</h2>
                    <p className="text-center">Ingresa tus datos para iniciar sesión</p>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Correo electrónico</label>
                            <input type="email" className="form-control" id="email" placeholder="Johndoe@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Contraseña</label>
                            <input type="password" className="form-control" id="password" placeholder="********" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>

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

                        <div className="bg-warning p-2 mb-3 rounded">
                            <h4 className="text-dark">⚠️ Datos de prueba</h4>
                            <p className="text-dark">Usuario: <strong>admin@gmail.com</strong></p>
                            <p className="text-dark">Contraseña: <strong>admin</strong></p>
                        </div>

                        <button type="submit" className="btn btn-info w-100" disabled={loading}>{loading ? "Cargando..." : "Iniciar sesión"}</button>
                    </form>
                </div>
            </div>
        </main>
    )
}

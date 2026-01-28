import { useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { ShieldAlert, ArrowLeft } from "lucide-react"

export const Forbidden = () => {
    const navigate = useNavigate()
    const location = useLocation()

    // Redirige automáticamente después de 3 segundos
    useEffect(() => {
        const timer = setTimeout(() => {
            navigate(-1) // vuelve a la última vista
        }, 3000)

        return () => clearTimeout(timer)
    }, [navigate])

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="text-center p-4 bg-white rounded shadow-sm" style={{ maxWidth: 420 }}>
                <ShieldAlert size={64} className="text-danger mb-3" />

                <h1 className="h4 fw-bold mb-2">Acceso denegado</h1>
                <p className="text-muted mb-4">
                    No tienes permisos para acceder a esta sección.
                </p>

                <button
                    className="btn btn-outline-primary d-inline-flex align-items-center gap-2"
                    onClick={() => navigate(-1)}
                >
                    <ArrowLeft size={18} />
                    Volver
                </button>

                <div className="mt-3 small text-muted">
                    Serás redirigido automáticamente en unos segundos…
                </div>
            </div>
        </div>
    )
}


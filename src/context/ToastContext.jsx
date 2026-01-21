import { createContext, useContext, useState } from "react";
import { Toast, ToastContainer } from "react-bootstrap";

const ToastContext = createContext();

export const useToast = () => useContext(ToastContext);

export const ToastProvider = ({ children }) => {
    const [toast, setToast] = useState({
        show: false,
        message: "",
        variant: "success", // success | danger | warning | info
    });

    const showToast = (message, variant = "success") => {
        setToast({ show: true, message, variant });

        setTimeout(() => {
            setToast({ show: false, message: "", variant });
        }, 3000);
    };

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}

            {/* TOAST GLOBAL */}
            <ToastContainer position="top-center" className="p-3 position-fixed top-0 start-50 translate-middle-x">
                <Toast
                    show={toast.show}
                    bg={toast.variant}
                    onClose={() => setToast({ ...toast, show: false })}
                >
                    <Toast.Header>
                        <strong className="me-auto">Notificación</strong>
                    </Toast.Header>
                    <Toast.Body className="text-white">
                        {toast.message}
                    </Toast.Body>
                </Toast>
            </ToastContainer>
        </ToastContext.Provider>
    );
};

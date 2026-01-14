// assets/js/login.js
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("form");

    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const email = loginForm.querySelector('input[type="email"]').value;
            const password = loginForm.querySelector('input[type="password"]').value;

            // Credenciales de prueba
            if (email === "admin@levelup.com" && password === "admin123") {
                const userAdmin = {
                    nombre: "Admin LevelUp",
                    role: "ADMIN"
                };

                localStorage.setItem("levelup_user", JSON.stringify(userAdmin));
                // Redirige a la carpeta admin que está en la raíz
                window.location.href = "./admin/index.html";
            } else {
                alert("Correo o contraseña incorrectos. Usa admin@levelup.com / admin123");
            }
        });
    }
});
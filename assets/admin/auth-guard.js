// assets/js/admin/auth-guard.js
(function () {
    const user = JSON.parse(localStorage.getItem("levelup_user"));
    
    // Si no hay usuario o no es ADMIN, redirigir al login fuera de la carpeta admin
    if (!user || user.role !== "ADMIN") {
        console.warn("Acceso denegado: Redirigiendo al login...");
        window.location.href = "../login.html"; 
    }
})();

// Función para cerrar sesión desde el panel
function logoutAdmin() {
    localStorage.removeItem("levelup_user");
    window.location.href = "../index.html";
}
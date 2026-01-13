document.addEventListener("DOMContentLoaded", () => {
    cargarTabla();
});

function cargarTabla() {
    const tbody = document.getElementById("tabla-productos");
    // 'products' es el array que ya tienes en data.js
    tbody.innerHTML = products.map(p => `
        <tr>
            <td><img src="${p.poster}" width="40" class="rounded"></td>
            <td class="align-middle">${p.nombre}</td>
            <td class="align-middle">$${p.precio}</td>
            <td class="align-middle">
                <button class="btn btn-sm btn-warning"><i class="bi bi-pencil"></i></button>
                <button class="btn btn-sm btn-danger" onclick="eliminar(${p.id})"><i class="bi bi-trash"></i></button>
            </td>
        </tr>
    `).join('');
}

function cerrarSesion() {
    localStorage.removeItem("levelup_user");
    window.location.href = "../index.html";
}
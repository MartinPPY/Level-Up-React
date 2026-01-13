document.addEventListener("DOMContentLoaded", () => {
    // Verificar si 'products' existe (viene de data.js)
    if (typeof products !== 'undefined') {
        renderAdminTable();
    } else {
        console.error("No se encontró el archivo data.js o la variable products");
    }
});

function renderAdminTable() {
    const tbody = document.getElementById("tabla-productos");
    if (!tbody) return;

    tbody.innerHTML = ""; // Limpiar antes de cargar

    products.forEach(p => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td class="align-middle"><img src=".${p.poster}" width="50" class="rounded"></td>
            <td class="align-middle">${p.nombre}</td>
            <td class="align-middle">$${p.precio}</td>
            <td class="align-middle">
                <button class="btn btn-sm btn-warning"><i class="bi bi-pencil"></i></button>
                <button class="btn btn-sm btn-danger"><i class="bi bi-trash"></i></button>
            </td>
        `;
        tbody.appendChild(row);
    });
}
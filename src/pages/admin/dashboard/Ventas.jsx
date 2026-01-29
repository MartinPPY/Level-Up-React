import { useEffect, useState } from "react"
import { getVentas } from "../../../services/venta.service"
import Swal from "sweetalert2"


export const Ventas = () => {

    const [ventas, setVentas] = useState([])

    useEffect(() => {

        const getVentasData = async () => {
            try {
                const response = await getVentas()
                setVentas(response)
            } catch (error) {
                Swal.fire({
                    title: "Error",
                    text: "Error al obtener las ventas",
                    icon: "error",
                })
            }
        }

        getVentasData()

    }, [])

    return (
        <main className="container-fluid">
            <section className="row gap-2 p-3">
                <div className="col-lg-12 card p-3">
                    <h3>Ventas recientes</h3>
                    <p>Ultimas ventas del mes</p>
                    <div className="d-flex flex-column gap-3">
                        <div className="bg-light p-2 rounded">
                            {ventas.map((vent) => {
                                const total = vent.detalles?.reduce(
                                    (acc, item) => acc + (item.precio ?? 0) * (item.cantidad ?? 0),
                                    0
                                ) ?? 0;

                                const collapseId = `venta-${vent.id}`;
                                const headingId = `heading-${vent.id}`;

                                return (
                                    <div className="card mb-2" key={vent.id}>
                                        <div className="card-body d-flex justify-content-between">
                                            <div className="d-flex align-items-center gap-5">
                                                <div className="bg-success text-white p-2 rounded d-flex justify-content-center align-items-center">
                                                    <h5 className="mb-0">{vent.id}</h5>
                                                </div>

                                                <div className="d-flex flex-column">
                                                    <p className="mb-0">{vent.user?.name} {vent.user?.lastname}</p>
                                                    <p className="mb-0">{vent.date || vent.date}</p>
                                                </div>
                                            </div>

                                            <div className="d-flex align-items-center gap-3">
                                                <h5 className="mb-0">
                                                    {Intl.NumberFormat("es-CL", { style: "currency", currency: "CLP" }).format(total)}
                                                </h5>

                                                {/* Botón accordion */}
                                                <button
                                                    className="btn btn-outline-success btn-sm"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target={`#${collapseId}`}
                                                    aria-expanded="false"
                                                    aria-controls={collapseId}
                                                >
                                                    Ver productos
                                                </button>
                                            </div>
                                        </div>

                                        {/* Contenido colapsable */}
                                        <div id={collapseId} className="collapse" aria-labelledby={headingId}>
                                            <div className="card-body pt-0">
                                                <div className="table-responsive">
                                                    <table className="table table-sm mb-0">
                                                        <thead>
                                                            <tr>
                                                                <th>Producto</th>
                                                                <th className="text-end">Cant.</th>
                                                                <th className="text-end">Precio</th>
                                                                <th className="text-end">Subtotal</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {vent.detalles?.map((item) => {
                                                                const nombre = item.product?.name ?? item.product?.nombre ?? "Producto";
                                                                const cant = item.cantidad ?? 0;
                                                                const precio = item.precio ?? 0;
                                                                const subtotal = precio * cant;

                                                                return (
                                                                    <tr key={item.id}>
                                                                        <td>{nombre}</td>
                                                                        <td className="text-end">{cant}</td>
                                                                        <td className="text-end">
                                                                            {Intl.NumberFormat("es-CL", { style: "currency", currency: "CLP" }).format(precio)}
                                                                        </td>
                                                                        <td className="text-end">
                                                                            {Intl.NumberFormat("es-CL", { style: "currency", currency: "CLP" }).format(subtotal)}
                                                                        </td>
                                                                    </tr>
                                                                );
                                                            })}
                                                        </tbody>
                                                        <tfoot>
                                                            <tr>
                                                                <th colSpan={3} className="text-end">Total</th>
                                                                <th className="text-end">
                                                                    {Intl.NumberFormat("es-CL", { style: "currency", currency: "CLP" }).format(total)}
                                                                </th>
                                                            </tr>
                                                        </tfoot>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                    </div>
                </div>
            </section>

        </main>
    )
}

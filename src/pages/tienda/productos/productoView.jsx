import { Link, useNavigate, } from "react-router-dom";
import { useCart } from "../../../context/CartContext";
import { productos, categorias } from "../../../data/data";
import { useToast } from "../../../context/ToastContext";
import { useEffect, useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import { getAllCategories } from "../../../services/category.service";

export const ProductoView = () => {
    const { cart, setCart } = useCart();
    const { showToast } = useToast();
    const { authenticated } = useAuth()
    const navigate = useNavigate()
    const [busqueda, setBusqueda] = useState("");
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todas");

    const [categorias, setCategorias] = useState([])

    useEffect(() => {
        const getAllCategorias = async () => {
            const categorias = await getAllCategories()
            setCategorias(categorias)
        }

        getAllCategorias()
    }, [])



    const addToCart = (codigo) => {
        if (!authenticated) {
            navigate("/tienda/login")
            return
        }
        const producto = productos.find(p => p.codigo === codigo);
        if (!producto) return;

        setCart(prevCart =>
            prevCart.some(item => item.codigo === codigo)
                ? prevCart.map(item =>
                    item.codigo === codigo
                        ? { ...item, cantidad: item.cantidad + 1 }
                        : item
                )
                : [...prevCart, { ...producto, cantidad: 1 }]
        );

        showToast("Producto agregado al carrito", "success");
    };

    const productosFiltrados = productos.filter(prod => {
        const coincideBusqueda =
            prod.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
            prod.descripcion.toLowerCase().includes(busqueda.toLowerCase());

        const coincideCategoria =
            categoriaSeleccionada === "Todas" ||
            prod.categoria === categoriaSeleccionada;

        return coincideBusqueda && coincideCategoria;
    });

    return (
        <div className="container py-4">

            <div className="row mb-4">
                <div className="col-md-8 mb-2">
                    <input
                        type="text"
                        className="form-control bg-dark text-white border-secondary tienda-registro-placeholder"
                        placeholder="Buscar productos..."
                        value={busqueda}
                        onChange={(e) => setBusqueda(e.target.value)}
                    />
                </div>

                <div className="col-md-4 mb-2">
                    <select
                        className="form-select bg-dark text-white border-secondary"
                        value={categoriaSeleccionada}
                        onChange={(e) => setCategoriaSeleccionada(e.target.value)}
                    >
                        <option value="todas">Todos</option>
                        {categorias.map((cat, index) => (
                            <option key={index} value={cat.id}>
                                {cat.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="row">
                {productosFiltrados.map(prod => (
                    <div className="col-lg-4 col-md-6 col-12 my-3" key={prod.codigo}>
                        <div className="card bg-dark text-white border-secondary h-100 shadow">
                            <img
                                src={prod.image}
                                className="card-img-top p-2 rounded"
                                alt={prod.nombre}
                                style={{ height: "200px", objectFit: "contain" }}
                            />

                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title text-info">
                                    {prod.nombre}
                                </h5>

                                <p className="card-text small text-secondary text-truncate">
                                    {prod.descripcion}
                                </p>

                                <div className="mt-auto">
                                    <p className="fw-bold fs-4">
                                        ${prod.precio.toLocaleString()}
                                    </p>

                                    <div className="d-grid gap-2">
                                        <button
                                            className="btn btn-info"
                                            onClick={() => addToCart(prod.codigo)}
                                        >
                                            <i className="bi bi-cart-plus me-2"></i>
                                            Agregar al carrito
                                        </button>

                                        <Link
                                            className="btn btn-outline-success btn-sm"
                                            to={`/tienda/producto-detalle/${prod.codigo}`}
                                        >
                                            Ver descripción
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {productosFiltrados.length === 0 && (
                    <p className="text-center text-secondary">
                        No se encontraron productos
                    </p>
                )}
            </div>
        </div>
    );
};

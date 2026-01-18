import { Link } from "react-router-dom";
import image1 from "../../../assets/images/carrusel/1.png";
import image2 from "../../../assets/images/carrusel/2.png";
import image3 from "../../../assets/images/carrusel/3.png";

export const Hero = () => {
    return (
        <section className="container py-5">
            <div className="row align-items-center g-5">
                <div className="col-lg-6 text-center text-lg-start text-white">
                    <h1 className="display-5 fw-bold mb-3">Sube de nivel tu experiencia gamer</h1>

                    <p className="lead mb-4">
                        Level Up es tu tienda virtual de videojuegos donde encontrarás
                        los mejores títulos del momento, ofertas exclusivas y lanzamientos.
                    </p>

                    <div className="d-flex justify-content-center justify-content-lg-start gap-3">
                        <Link to="/productos" className="btn btn-lg btn-outline-info   fw-bold">
                            Ver productos
                        </Link>
                        <Link to="/contacto" className="btn btn-lg btn-success fw-bold">
                            Contáctanos
                        </Link>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div id="carouselHero" className="carousel slide rounded overflow-hidden" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="3000">
                                <img src={image1} className="d-block w-100" alt="Juego destacado" />
                            </div>
                            <div className="carousel-item" data-bs-interval="3000">
                                <img src={image2} className="d-block w-100" alt="Novedades" />
                            </div>
                            <div className="carousel-item" data-bs-interval="3000">
                                <img src={image3} className="d-block w-100" alt="Ofertas" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

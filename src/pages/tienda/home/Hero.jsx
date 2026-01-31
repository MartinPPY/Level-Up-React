import { Link } from "react-router-dom";
import image1 from "../../../assets/images/carrusel/1.png";
import image2 from "../../../assets/images/carrusel/2.png";
import image3 from "../../../assets/images/carrusel/3.png";
import { Carousel } from "react-bootstrap";

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
                        <Link to="/tienda/productos" className="btn btn-lg btn-outline-primary   fw-bold">
                            Ver productos
                        </Link>
                        <Link to="/tienda/contacto" className="btn btn-lg btn-secondary fw-bold">
                            Contáctanos
                        </Link>
                    </div>
                </div>

                <div className="col-lg-6">
                    <Carousel pause={false} controls={false} indicators={false}>
                        <Carousel.Item interval={2000}>
                            <img src={image1} className="d-block w-100 rounded-3" alt="Juego destacado" width={1000} height={300} />
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                            <img src={image2} className="d-block w-100 rounded-3" alt="Novedades" width={1000} height={300} />
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                            <img src={image3} className="d-block w-100 rounded-3" alt="Ofertas" width={1000} height={300} />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </section>
    )
}

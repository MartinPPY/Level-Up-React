import React from 'react'
import Blog1 from '../../../assets/images/blog1.webp'
import Blog2 from '../../../assets/images/blog2.webp'
import { Link } from 'lucide-react'

export const Blogs = () => {
    return (
        <div>
            <main className="container-fluid">

                <section className="container py-5">
                    <h1 className="display-4 fw-bold mb-4 text-center">Noticias Recientes</h1>

                    <article className="row g-4">

                        <div className="card p-4 col-lg-12 bg-black">
                            <div className="d-flex flex-wrap">
                                <div className="d-flex flex-column gap-2 col-lg-6 text-white">
                                    <h5>Ubisoft cierra su estudio en Halifax semanas después de sindicalizarse </h5>
                                    <p className="">
                                        Tras que los trabajadores del estudio de Ubisoft en Halifax votaran por sindicalizarse
                                        en
                                        diciembre, la compañía anunció el cierre completo del estudio pocos días después. Esto
                                        ocurre en
                                        un contexto marcado por cierres de estudios, despidos y una creciente inestabilidad en
                                        la
                                        industria del videojuego, lo que ha generado preocupación entre desarrolladores y
                                        jugadores
                                        sobre las condiciones laborales en el sector.
                                    </p>
                                    <a href="https://www.gamedeveloper.com/" target="_blank"
                                        className="btn btn-sm text-white">Leer más <Link /></a>
                                </div>
                                <div className="d-flex flex-column gap-2 col-lg-6">
                                    <img src={Blog1} alt="blog-1" width="100%"/>
                                </div>
                            </div>
                        </div>
                        <div className="card p-4 col-lg-12 bg-black text-white">
                            <div className="d-flex flex-wrap">
                                <div className="d-flex flex-column gap-2 col-lg-6">
                                    <h5>Debate sobre el uso de IA en desarrollo de juegos: CEO de Arc Raiders responde </h5>
                                    <p className="">
                                        El CEO de los creadores de Arc Raiders ha defendido que su estudio no utiliza IA para
                                        reemplazar a empleados humanos, sino para acelerar tareas repetitivas en desarrollo. A
                                        pesar de esto, faltan detalles concretos sobre cómo se aplica la IA, y la discusión ha
                                        reavivado preocupaciones sobre el futuro del trabajo en la industria y el uso de
                                        tecnología para tareas tradicionalmente humanas.
                                    </p>
                                    <a href="https://www.pcgamer.com/games/third-person-shooter/we-dont-use-ai-to-replace-people-claims-arc-raiders-ceo-without-actually-explaining-what-they-do-use-it-for/"
                                        target="_blank" className="btn btn-sm btn-level-up-primary text-white">Leer más <Link />  </a>
                                </div>
                                <div className="d-flex flex-column gap-2 col-lg-6">
                                    <img src={Blog2} alt="blog-1" width="100%"/>
                                </div>
                            </div>
                        </div>

                    </article>

                </section>



            </main>
        </div>
    )
}



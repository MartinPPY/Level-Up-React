import React from 'react'

export const Nosotros = () => {
    return (
        <div>
            <main className="container py-5 text-white">

                <div className="text-center mb-5">
                    <h1 className="fw-bold">Sobre Nosotros</h1>
                    <p className="text-secondary">Pasión gamer, nivel profesional</p>
                </div>

                <div className="row g-4">
                    <div className="col-md-6">
                        <h3>¿Quiénes somos?</h3>
                        <p>
                            Level Up es una tienda gamer creada por y para gamers. Nuestro objetivo es
                            ofrecer los mejores videojuegos del mercado, con precios competitivos y
                            una experiencia de compra rápida y segura.
                        </p>
                    </div>

                    <div className="col-md-6">
                        <h3>Nuestra misión</h3>
                        <p>
                            Brindar acceso a los mejores títulos del mundo gamer, fomentando una
                            comunidad apasionada por la tecnología y los videojuegos.
                        </p>
                    </div>

                    <div className="col-md-6">
                        <h3>Nuestra visión</h3>
                        <p>
                            Convertirnos en la tienda gamer líder a nivel nacional, reconocida por
                            su calidad, confianza y cercanía con los jugadores.
                        </p>
                    </div>

                    <div className="col-md-6">
                        <h3>¿Por qué elegirnos?</h3>
                        <ul>
                            <li>Catálogo actualizado</li>
                            <li>Ofertas exclusivas</li>
                            <li>Compra rápida y segura</li>
                            <li>Atención personalizada</li>
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    )
}


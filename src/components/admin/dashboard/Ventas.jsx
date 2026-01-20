

export const Ventas = () => {
    return (
        <main className="container-fluid">
            <section className="row gap-2 p-3">
                <div className="col-lg-12 card p-3">
                    <h3>Ventas recientes</h3>
                    <p>Ultimas ventas del mes</p>
                    <div className="d-flex flex-column gap-3">
                        <div className="bg-light p-2 rounded">
                            <div className="card-body d-flex justify-content-between">
                                <div className="d-flex align-items-center gap-5">
                                    <div className="bg-success text-white p-2 rounded d-flex justify-content-center align-items-center">
                                        <h5>005</h5>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <p className="mb-0">John Doe</p>
                                        <p>18/01/2026</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-5">
                                    <div className="">
                                        <h5>50.000 CLP</h5>
                                    </div>
                                </div>



                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </main>
    )
}

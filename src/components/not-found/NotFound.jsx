export const NotFound = () => {

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light bg-black">
      <div className="text-center">
        <h1 className="display-1 fw-bold text-danger">404</h1>
        <h2 className="mb-3">Página no encontrada</h2>
        <p className="lead mb-4">
          Lo sentimos, la página que estás buscando no existe o fue movida.
        </p>
        <button className="btn btn-primary btn-lg" onClick={() => window.history.back()}>
          Volver a la página anterior
        </button>
      </div>
    </div>
  )
}

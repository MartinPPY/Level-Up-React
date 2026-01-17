export const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-dark border-top border-secondary text-white">
      <div className="container py-4 text-center">

        <p className="mb-0">
          © <span>{year}</span> Level Up — Todos los derechos reservados
        </p>
      </div>
    </footer>
  )
}

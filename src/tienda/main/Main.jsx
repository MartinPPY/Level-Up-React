import { Hero } from "./hero/Hero"
import { Product } from "./products.jsx/Product"

export const Main = () => {
  return (
    <main className="container-fluid bg-dark">
      <Hero />
      <Product />
    </main>
  )
}

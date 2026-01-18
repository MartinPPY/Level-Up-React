import { Hero } from "./Hero"
import { Product } from "./Product"



export const Home = () => {
    return (
        <main className="container-fluid bg-dark">
            <Hero />
            <Product />
        </main>
    )
}

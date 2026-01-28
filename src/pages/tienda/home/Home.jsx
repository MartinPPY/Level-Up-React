import { Hero } from "./Hero"
import { Product } from "./Product"



export const Home = ({productos}) => {
    return (
        <main className="container-fluid bg-dark">
            <Hero />
            <Product productos={productos} />
        </main>
    )
}

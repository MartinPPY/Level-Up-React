const productos = [
    {
        codigo: "JM001",
        categoria: "Juegos de Mesa",
        nombre: "Catan",
        precio: 29990,
        descripcion: "Un clásico juego de estrategia donde los jugadores compiten por colonizar y expandirse en la isla de Catan. Ideal para 3-4 jugadores y perfecto para noches de juego en familia o con amigos.",
        image: "./assets/images/products/catan.webp"
    },
    {
        codigo: "JM002",
        categoria: "Juegos de Mesa",
        nombre: "Carcassonne",
        precio: 24990,
        descripcion: "Un juego de colocación de fichas donde los jugadores construyen el paisaje alrededor de la fortaleza medieval de Carcassonne. Ideal para 2-5 jugadores y fácil de aprender.",
        image: "./assets/images/products/carcassonne.jpg"
    },
    {
        codigo: "AC001",
        categoria: "Accesorios",
        nombre: "Controlador Inalámbrico Xbox Series X",
        precio: 59990,
        descripcion: "Ofrece una experiencia de juego cómoda con botones mapeables y una respuesta táctil mejorada. Compatible con consolas Xbox y PC.",
        image: "./assets/images/products/control-xbox-series-x.jpg"
    },
    {
        codigo: "AC002",
        categoria: "Accesorios",
        nombre: "Auriculares Gamer HyperX Cloud II",
        precio: 79990,
        descripcion: "Proporcionan un sonido envolvente de calidad con un micrófono desmontable y almohadillas de espuma viscoelástica para mayor comodidad durante largas sesiones de juego.",
        image: "./assets/images/products/Auriculares-Gamer-HyperX-Cloud-II"
    },
    {
        codigo: "C0001",
        categoria: "Consolas",
        nombre: "PlayStation 5",
        precio: 549990,
        descripcion: "La consola de última generación de Sony, que ofrece gráficos impresionantes y tiempos de carga ultrarrápidos para una experiencia de juego inmersiva.",
        image: "./assets/images/products/PlayStation-5"
    },
    {
        codigo: "CG001",
        categoria: "Computadores Gamers",
        nombre: "PC Gamer ASUS ROG Strix",
        precio: 1299990,
        descripcion: "Un potente equipo diseñado para los gamers más exigentes, equipado con los últimos componentes para ofrecer un rendimiento excepcional en cualquier juego.",
        image: "./assets/images/products/PC-Gamer-ASUS-ROG-Strix"
    },
    {
        codigo: "SG001",
        categoria: "Sillas Gamers",
        nombre: "Silla Gamer Secretlab Titan",
        precio: 349990,
        descripcion: "Diseñada para el máximo confort, esta silla ofrece un soporte ergonómico y personalización ajustable para sesiones de juego prolongadas.",
        image: "./assets/images/products/Silla-Gamer-Secretlab-Titan"
    },
    {
        codigo: "MS001",
        categoria: "Mouse",
        nombre: "Mouse Gamer Logitech G502 HERO",
        precio: 49990,
        descripcion: "Con sensor de alta precisión y botones personalizables, este mouse es ideal para gamers que buscan un control preciso y personalización.",
        image: "./assets/images/products/Mouse-Gamer-Logitech-G502-HERO"
    },
    {
        codigo: "MP001",
        categoria: "Mousepad",
        nombre: "Mousepad Razer Goliathus Extended Chroma",
        precio: 29990,
        descripcion: "Ofrece un área de juego amplia con iluminación RGB personalizable, asegurando una superficie suave y uniforme para el movimiento del mouse.",
        image: "./assets/images/products/Mousepad-Razer-Goliathus-Extended-Chroma"
    },
    {
        codigo: "PP001",
        categoria: "Poleras Personalizadas",
        nombre: "Polera Gamer Personalizada Level-Up",
        precio: 14990,
        descripcion: "Una camiseta cómoda y estilizada, con la posibilidad de personalizarla con tu gamer tag o diseño favorito.",
        image: "./assets/images/products/Polera-Gamer-Personalizada-Level-Up"
    }
];

const categorias = [
    { id: 8, nombre: "Juegos de Mesa" },
    { id: 1, nombre: "Accesorios" },
    { id: 2, nombre: "Consolas" },
    { id: 3, nombre: "Computadores Gamers" },
    { id: 4, nombre: "Sillas Gamers" },
    { id: 5, nombre: "Mouse" },
    { id: 6, nombre: "Mousepad" },
    { id: 7, nombre: "Poleras Personalizadas" },
    { id: 9, nombre: "Polerones Personalizados" },
]

const regiones = [
    { id: 1, nombre: "Region Metropolitana" },

]

const comunas = [
    { id: 1, nombre: "Santiago", regionId: 1 },
    { id: 2, nombre: "Melipilla", regionId: 1 },
    { id: 3, nombre: "Maipu", regionId: 1 },
]

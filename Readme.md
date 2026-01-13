**CASO LEVEL UP**

Se trata sobre una tienda de videojuegos que se encarga de vender consolas, accesorios y juegos de mesa.

Requerimientos funcionales:

- Solo mayores de edad pueden registrarse y realizar compras (18 años).
- Ofrecer descuento a clientes con el correo de duoc (descuento del 20%).
- Permitir a usuarios cambiar sus datos personales y gestionar preferencias de compra.
- Mostrar productos, ordenados por catalogo.
- Implementar filtros de busqueda.
- Debe tener un carrito de compras.
- Debe permitir dejar a los clientes reseñas de los productos.
- Debe permitir a los usuarios aplicar un sistema de niveles .basados en puntos para poder despues canjear productos o obtener descuentos.

# Reglas de diseño

Color de fondo:
- Color de fondo principal: #000


Tipografia:
- Roboto, una fuente sans-serif moderna y legible para todo el texto general.
- https://fonts.google.com/specimen/Roboto

Fuente de Encabezado:
-  Orbitron, una fuente futurista que resalta los títulos y encabezados.
-  https://fonts.google.com/specimen/Orbitron

Colores de Texto

-  Texto Principal: Blanco ( #FFFFFF ) para asegurar un buen contraste sobre el fondo oscuro.
-  Texto Secundario: Gris Claro ( #D3D3D3 ) para descripciones y texto secundario.

Botones primarios:
-  Azul Eléctrico ( #1E90FF )

Botones secundarios:
-  Verde Neón ( #39FF14 )


## Categorias

-  Juegos de Mesa
-  Accesorios
-  Consolas
-  Computadores Gamers
-  Sillas Gamers
-  Mouse
-  Mousepad
-  Poleras Personalizadas
-  Polerones Gamers Personalizado

## Validaciones a la hora de registrar el usuario

- 100 caracteres maximo para el nombre, apellido y correo.
- El correo electronico debe solo ser: @gmail.com, @duoc.cl y @duocuc.cl
- Mayor de 18 años.
- la contraseña debe tener minimo 4 caracteres y maximo de 10 caracteres.
- Comuba y Region validos.
- Tipo usuario: solo vista de admnistrador


## Indicaciones a la hora de crear un producto

- Codigo: debe ser texto, requerido, minimo 3 caracteres.
- Nombre: Requerido y maximo 100 caracteres.
- Descripcion: Requerido y maximo 500 caracteres.
- Precio: Requerido y en caso de ser 0 se considera free.
- stock: requerido y debe ser un numero.
- isLowStock: requerido y debe ser un booleano. Indicar si el stock es bajo.
- categoria: requerido y debe ser una categoria valida.
- imagen: opcional.





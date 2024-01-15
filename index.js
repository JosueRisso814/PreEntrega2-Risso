class Producto {
    constructor(nombre, precio, img){
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;
    }
}

const PROD1 = new Producto ("Cappuccino", 1400, "starbucks.webp");
const PROD2 = new Producto ("Cafe", 1200, "cafe.webp");
const PROD3 = new Producto ("Cafe Espresso", 1500, "cappuccino1.webp");

function ingresoDeProductos () {
let NumProdNewUser = prompt("ingrese la cantidad de productos a ingresar al carrito: ");

let arrayProductos = [PROD1, PROD2, PROD3];

for (let i = 1; i <= NumProdNewUser; i++) {
    let nombreDelProducto = prompt("ingrese el nombre del producto nro " + i + " :");
    let precioDelProducto = parseFloat(prompt("ingrese el precio del prodcuto nro " + i + " :"));
    let imgDelProducto = prompt("ingrese la url de la imagen del producto nro " + i + " :");
    
    const productoUsuario = new Producto (nombreDelProducto, precioDelProducto, imgDelProducto); 

    arrayProductos.push(productoUsuario);
};
    return arrayProductos;
}

function calculoTotalCarrito (productos) {
return productos.reduce((acumulador, numero) => acumulador + numero.precio, 0);
}

function mostrarProductosDom (productos) {
const contenedorProductos = document.getElementById("contenedorProductos");

    productos.forEach(producto => {
        const div = document.createElement("div");

        div.className = "card";

        div.innerHTML = `
            <img class="card-img" src="${producto.img}">
            <div class="info">
                <h3 class="nombreprod">${producto.nombre}</h3>
                <p class="parrafo" >${producto.precio}</p>
                <button class="buy" >comprar</button>
            </div>
            `;

            contenedorProductos.appendChild(div);
    });
}

    alert("Bienvenido al carrito de compras...");

    const productosUsuario = ingresoDeProductos();

    const totalCarrito = calculoTotalCarrito(productosUsuario);

    alert("El total de productos en el carrito es de $" + totalCarrito);

    mostrarProductosDom(productosUsuario);

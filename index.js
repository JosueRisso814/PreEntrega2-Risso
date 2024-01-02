// function sacarPromedio () {

//     for(let i = 1; i < 4; i++) {

//     let nota1 = Number(prompt("alumno nro " + i + " ingrese su primer nota: "));
//     let nota2 = Number(prompt("alumno nro " + i + " ingrese su segunda nota: "));
//     let nota3 = Number(prompt("alumno nro " + i + " ingrese su tercer nota: "));

//     let suma = nota1 + nota2 + nota3;

//     let promedio = suma / 3;

//     alert("su promedio de notas es: " + promedio);

// if (promedio >= 6) {
//     alert("Usted esta aprobado. Felicidades! :)")
// } else {
//     alert("Usted esta desaprobado :(")

// } } }

// sacarPromedio();

// let footer4 = document.getElementById("footer");
// console.log(footer4);

// const titulosFooter = document.getElementsByClassName("listasFooter");
// console.log(titulosFooter);

// const titulosFooter2 = document.querySelectorAll(".listasFooter");
// console.log(titulosFooter2);

// const footer1 = document.querySelector("#footer");
// console.log(footer1);

// const etiqueta = document.getElementsByTagName("li");
// console.log(etiqueta);

// const TITULOALUMNOS = document.getElementById("notaAlumnos");
// TITULOALUMNOS.innerText = "*************";

// const SECTION_CONT = document.getElementById("sectionContenedor");
// SECTION_CONT.innerHTML = `
//     <div class="card">
//         <img src="" alt="">
//         <div>
//             <h3>
//                 esto es un titulo
//             </h3>
//             <p>
//                 esto es un parrafo
//             </p>
//             <button>comprar</button>
//         </div>
//     </div>
// `;

// PARA CREAR UN ELEMEENTO DESDE JS
// const contenedor = document.getElementById("contenedor");

// const parrafo = document.createElement("p");

// parrafo.innerText = "ESTE ES UN PARRAFO CREADO DESDE JS";
// parrafo.className = "rojo";

//appendchil es un metodo q se utuliza para agregar elemenos nuevos a ahtml

// contenedorr.appendChild(parrafo);

// parrafo.remove();

class Producto {
    constructor(nombre, precio, img){
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;
    }
}

// AQUI SE CREAN LOS PORODUCTOS 
const PROD1 = new Producto ("yerba", 3000, "yerba.webp");
const PROD2 = new Producto ("cafe", 3020, "cafe.webp");
const PROD3 = new Producto ("ps5", 999999, "ps5.webp");
const PROD4 = new Producto ("lechuga", 99999999999, "lechuga.webp")

const arrayProductos = [PROD1,PROD2,PROD3,PROD4];

const contenedorProductos = document.getElementById("contenedorProductos");

arrayProductos.forEach(producto => {
    const div = document.createElement("div");

    div.className = "card"

    div.innerHTML = `
        <img class="card-img" src="${producto.img}">
        <div>
            <h3>${producto.nombre}</h3>
            <p>${producto.precio}</p>
            <button>comprar</button>
        </div>
        `

        contenedorProductos.appendChild(div);
})


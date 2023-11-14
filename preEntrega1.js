/// dar la bienvenida
///pedir el nombre 
/// preguntar si es hombre o mujer
///tipo de prenda
//cantidad
///talla
///color
//agradecimiento

const PTRAJE = 45.000; // precio trajes de baño

let nombre;
let Genero;
let cantidad;
let talla;
let color;
let registro;
let subtotal;
let total = 0;

const numPersonas = 5;

for (let i = 1; i <= 5; i++) {

    let nombre = prompt("Por favor, introduce tu nombre:");

    alert(`¡Bienvenido/a a nuestra tienda! ${nombre} \n Nuestra especialidad son los trajes de baño`);

    let Genero = prompt("¿Eres hombre o mujer?");
    let cantidad = +prompt("¿Cuántas prendas deseas comprar?");
    let talla = prompt("¿Cuál es tu talla?");
    let color = prompt("¿De qué color te gustaría la prenda?");

    subtotal = cantidad * PTRAJE;
    total = total + subtotal;

    alert(`Total acumulado de todas las compras: ${subtotal}`);

    alert(`¡Gracias, ${nombre}! Nos alegra que hayas elegido nuestra tienda.`);
}



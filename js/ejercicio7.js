/*Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario. */
// Pedimos al usuario que ingrese el número
const numero = parseInt(
  prompt("Ingrese un número para realizar la tabla, por favor")
);

function escribirTablaMultiplicar(numero){
document.write("<h2>Tabla de multiplicar del "+ numero +"</h2>");
document.write("<ul>");

for(let i = 1;i<=10;i++){
    document.write("<li>");
    document.write(numero + "x " + i + "= " + numero * i);
    document.write("</li>");
}

document.write("</ul>");
}
(escribirTablaMultiplicar(numero));

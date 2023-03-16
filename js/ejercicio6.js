/*Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

La fórmula del perímetro  es p = 2*(a +b)
 */
const altura= parseInt(prompt('Ingrese la altura del rectángulo para calcular el perímetro, por favor:'));
const base= parseInt(prompt('Ingrese la base del rectángulo para calcular el perímetro, por favor:'));

function calcularPerimetro(altura,base) {
    return perimetro=( 2*(altura + base));  
}
document.write(`El perímetro es: ${calcularPerimetro(altura,base)}`)
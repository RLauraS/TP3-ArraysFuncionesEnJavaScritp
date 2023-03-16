const filas = parseInt(prompt("Ingrese un número de filas"));
const columnas = parseInt(prompt("Ingrese el número de columnas"));

let numeroCelda = filas * columnas;

document.write(`<table><tbody>`);
for (let indiceFilas = 0; indiceFilas < filas; indiceFilas++) {
  document.write(`<tr>`);
  for (let indicColumnas = 0; indicColumnas < columnas; columnas++) {
    document.write(`<td>${numeroCelda}</td>`);
    numeroCelda--;
  }
  document.write(`</tr>`);
}
document.write(`</tbody></table>`);
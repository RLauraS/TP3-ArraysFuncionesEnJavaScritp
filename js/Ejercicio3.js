/*3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación. */

let resultados = [];
// Lanzar los dados 50 veces
for (let i = 0; i < 50; i++) {

  let dado1 = Math.floor(Math.random() * 6) + 1;
  let dado2 = Math.floor(Math.random() * 6) + 1;

  let suma = dado1 + dado2;

  // Si es la primera vez que se obtiene esta suma, agregarla al array de resultados
  if (!resultados[suma]) {
    resultados[suma] = 1;
  } else {
    // Si ya se había obtenido antes esta suma, incrementar su cantidad
    resultados[suma]++;
  }
}
document.write(`<table><thead><tr><th>Suma de los dados 🎲</th><th>Cantidad de repeticiones</th></tr></thead><tbody>`);
for (let i = 2; i <= 12; i++) {
  document.write(`<tr><td>${i}</td><td>${resultados[i] || 0}</td></tr>`);
}
document.write(`</tbody></table>`);
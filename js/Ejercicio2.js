/*2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
*/
//crear arreglo
let ciudades = [];
//do-while hasta que se indique cancelar
do {

  //solicitar ingreso de ciudades
  let ciudad = prompt("Ingrese una ciudad, por favor");
  ciudades.push(ciudad);
} while (confirm("¿Desea seguir agregando ciudades?")){
    document.write('<ul>');
    document.write(`Se ingresaron la/s ciudad/es: <br>`)
    for(let i=0; i< ciudades.length;i++){
        document.write(`<li>${ciudades[i]}</li>`);
    }
    document.write('</ul>');
}
//ciudades.lenght Mostrar la longitud del arreglo.
document.write(`Longitud del arreglo: ${ciudades.length} ciudad/es ingresada/s<br> <hr>`)
//Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
document.write(`Item en la 1ra posición: ${ciudades[0]}<br> Item de la 3ra posición: ${ciudades[2]},<br> Item de la ultima posición: ${ciudades[ciudades.length-1]} <hr> `)
//Añade en última posición la ciudad de París.
document.write('Añadimos París en la última posición: <br> ');
ciudades.push('París');
document.write('<ul>');
for(let i=0; i< ciudades.length;i++){
    document.write(`<li>${ciudades[i]}</li>`);
}
document.write('</ul> <hr> ');

//Escribe por pantalla el elemento que ocupa la segunda posición.
document.write(`Item en la 2da posición: ${ciudades[1]} <hr> `)
//Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
document.write('Se sustituye el segundo elemento del arreglo por la ciudad de Barcelona :')
ciudades.splice(1, 1, 'Barcelona');
for(let i=0; i< ciudades.length;i++){
    document.write(`<li>${ciudades[i]}</li>`);
}
document.write('</ul> <hr> ');




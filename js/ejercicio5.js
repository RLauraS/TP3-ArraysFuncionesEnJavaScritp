/*Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas. */

const frase= prompt('Ingrese una frase, por favor:');

function escrituraDeFrase(frase) {
    if (frase===frase.toLowerCase()) {
        return'La frase fue escrita completamente en minúsculas';
    }if (frase===frase.toUpperCase()){
        return'La frase fue escrita completamente en mayúsculas';
    }else{
        return'La frase fue escrita con mayúsculas y minúsculas';
    }  
}
document.write(escrituraDeFrase(frase));

  
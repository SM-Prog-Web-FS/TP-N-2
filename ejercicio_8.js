const texto = prompt("Ingrese un texto:");
//la función prompt muestra un cuadro de diálogo en la parte superior del navegador
//que pide al usuario que ingrese algún texto
//el texto ingresado se guarda en la variable "texto"

const vocales = ["a", "e", "i", "o", "u"];
//este array llamado "vocales" contiene todas las vocales en minúsculas

function eliminarAcentos(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
//hay que eliminar los acentos para ejemplos como "árbol"
//normalize("NFD") convierte las letras acentuadas
//la expresión regular /[\u0300-\u036f]/g elimina los acentos, dejando solo los caracteres base

for (let i = 0; i < texto.length; i++) {
    //el bucle for empieza en 0 y recorre cada posición del texto hasta llegar al final (texto.length)
    //"i" es el índice que usamos para acceder a cada carácter del texto

    const letra = eliminarAcentos(texto[i].toLowerCase());
    //vamos a la letra en la posición "i" del texto, la convertimos a minuscula y eliminamos cualquier acento
    //guardamos esta letra en la variable "letra" para compararla con las vocales en minuscula

    if (vocales.includes(letra)) {
        //usamos el método includes del array "vocales" para verificar si "letra" es una de las vocales
        //includes devuelve true si la letra esta en el array "vocales" y false si no lo esta

        console.log(`La primera vocal es "${letra}" y esta en la posicion ${i + 1}`);
        //si encontramos una vocal, mostramos un mensaje en la consola con la letra de la vocal y su posicion en el texto
        //usamos ${i + 1} para mostrar la posicion real de la letra (empezando desde 1 en lugar de 0)

        break;
        //break termina el bucle for inmediatamente despues de encontrar la primera vocal
    }
}


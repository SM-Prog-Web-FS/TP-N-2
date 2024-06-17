//declaro un array llamado "valores" que contiene diferentes tipos de datos: booleanos, numeros y cadenas de texto
var valores = [true, false, 2, "hola", "mundo", 3, "char"];

//1. Determinar cuál de los “elementos de texto” es mayor, es decir el que contenga más letras:

var elementosTexto = valores.filter(function (valor) {
    return typeof valor === "string";
});
//usamos la funcion filter para crear un nuevo array que solo contenga los elementos de tipo string del array original
//filter recorre cada elemento de "valores" y si el tipo de dato es una cadena de texto, lo incluye en el nuevo array "elementosTexto"

var mayorTexto = elementosTexto.reduce(function (mayor, actual) {
    return actual.length > mayor.length ? actual : mayor;
}, "");
//usamos la funcion reduce para recorrer "elementosTexto" y encontrar el string mas largo
//comparamos la longitud de cada string con el string mas largo encontrado hasta ahora (inicialmente una cadena vacía)
//si la longitud del string actual es mayor que la del string "mayor", actualizamos "mayor" con el string actual
//al final, "mayorTexto" contiene el string más largo

console.log("El elemento de texto mayor es:", mayorTexto);
//mostramos en la consola cual es el string mas largo encontrado en el array "elementosTexto"

//2. Imprimir estos elementos de menor a mayor cantidad de letras:

elementosTexto.sort(function (a, b) {
    return a.length - b.length;
});
//usamos la funcion sort para ordenar los strings en "elementosTexto" por su longitud
//la función de comparación resta la longitud del string "a" de la longitud del string "b"
//si el resultado es negativo, "a" se coloca antes que "b", si es positivo, "a" se coloca después de "b", y si es 0, se mantienen iguales

console.log("Elementos de texto ordenados por cantidad de letras de menor a mayor:", elementosTexto);
//mostramos en la consola los strings ordenados por su longitud, de menor a mayor

//3. Determinar el resultado de las cuatro operaciones matemáticas básicas (suma, resta, multiplicación y división) realizadas con los dos elementos numéricos:

var numericos = valores.filter(function (valor) {
    return typeof valor === "number";
});
//usamos la funcion filter, pero esta vez para crear un nuevo array que solo contenga los elementos de tipo numero del array original
//"numericos" es el nuevo array que contiene solo los numeros del array "valores"

var suma = numericos[0] + numericos[1];
//sumamos el primer numero del array "numericos" con el segundo número del mismo array
//el resultado se guarda en la variable "suma"

var resta = numericos[0] - numericos[1];
//restamos el segundo numero del array "numericos" del primer numero del mismo array
//el resultado se guarda en la variable "resta"

var multiplicacion = numericos[0] * numericos[1];
//multiplicamos el primer numero del array "numericos" por el segundo numero del mismo array
//el resultado se guarda en la variable "multiplicacion"

var division = numericos[0] / numericos[1];
//dividimos el primer numero del array "numericos" entre el segundo número del mismo array
//el resultado se guarda en la variable "division"

console.log("Suma:", suma);
console.log("Resta:", resta);
console.log("Multiplicacion:", multiplicacion);
console.log("Division:", division);
//mostramos en la consola los resultados de las cuatro operaciones matemáticas básicas (suma, resta, multiplicación y división)


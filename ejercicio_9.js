let nota1, nota2, nota3, nota4, nota5;
let promedio;
//declaramos cinco variables para las notas y una para el promedio

//Crear un programa que recibe 5 (cinco) notas de un alumno, las mismas deben ser ingresadas por el usuario y ser naturales < 11:

nota1 = parseInt(prompt("ingrese la primera nota: "));
//pedimos al usuario que ingrese la primera nota
//usamos prompt para mostrar un cuadro de dialogo
//parseInt convierte el texto ingresado en un numero entero
//guardamos este numero en la variable nota1

while (nota1 < 0 || nota1 > 10 || isNaN(nota1)) {
    nota1 = parseInt(prompt("valor invalido, ingrese de nuevo la primera nota (entre 0 y 10): "));
}
//usamos un bucle while para verificar que la nota este entre 0 y 10 y sea un numero valido
//si la nota no es valida, pedimos al usuario que ingrese la nota nuevamente

nota2 = parseInt(prompt("ingrese la segunda nota: "));
while (nota2 < 0 || nota2 > 10 || isNaN(nota2)) {
    nota2 = parseInt(prompt("valor invalido, ingrese la segunda nota (entre 0 y 10): "));
}
//repetimos el proceso para las otras notas

nota3 = parseInt(prompt("ingrese la tercera nota: "));
while (nota3 < 0 || nota3 > 10 || isNaN(nota3)) {
    nota3 = parseInt(prompt("valor invalido, ingrese la tercera nota (entre 0 y 10): "));
}

nota4 = parseInt(prompt("ingrese la cuarta nota: "));
while (nota4 < 0 || nota4 > 10 || isNaN(nota4)) {
    nota4 = parseInt(prompt("valor invalido, ingrese la cuarta nota (entre 0 y 10): "));
}

nota5 = parseInt(prompt("ingrese la quinta nota: "));
while (nota5 < 0 || nota5 > 10 || isNaN(nota5)) {
    nota5 = parseInt(prompt("valor invalido, ingrese la quinta nota (entre 0 y 10): "));
}
//aca terminamos el proceso de las notas


//Debe calcular el promedio e imprimir en pantalla si el valor de media es < 5 “Reprobado”, entre 6 y 8 “Aprobado” y si es mayor a 8 “Sobresaliente":
promedio = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;
//calculamos el promedio sumando las cinco notas y dividiendo el resultado entre 5
//guardamos el promedio en la variable promedio

console.log(`El promedio de las cinco notas es ${promedio}`);
//le mostramos al usuario el promedio calculado

if (promedio < 5) {
    console.log("Reprobado");
} else if (promedio >= 6 && promedio <= 8) {
    console.log("Aprobado");
} else {
    console.log("Sobresaliente");
}
//usamos una estructura if-else para determinar el resultado segun el promedio obtenido
//si el valor de media es < 5 “Reprobado”
//entre 6 y 8 “Aprobado”
//si es mayor a 8 “Sobresaliente"

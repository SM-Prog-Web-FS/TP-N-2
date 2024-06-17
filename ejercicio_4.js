//cambio con git branch

var num1 = 3;
var num2 = 7;

if (num1 < num2) {
  console.log("num1 no es mayor que num2");
}
//con el signo < (menor que) creamos una condicion para verificar si num1 es menor que num2

if (num2 > 0) {
  console.log("num2 es positivo");
}
//con el signo > (mayor que) creamos una condicion para verificar si num2 es un valor positivo (mayor que 0)

// Condición para verificar si num1 es negativo o distinto de cero
if (num1 < 0 || num1 !== 0) {
  console.log("num1 es negativo o distinto de cero");
}
//con el signo > (mayor que) creamos una condicion para verificar si num1 es un valor negativo (menor que 0)
//con la operación || (o) combinamos dos condiciones
//con la condicion !== (distinto a) podemos verificar si num1 es distinto de 0


// Condición para verificar si incrementar num1 en 1 lo hace menor que num2
if ((num1 + 1) <= num2) {
  console.log("Incrementar en 1 unidad el valor de num1 no lo hace mayor o igual que num2");
}
//primer tenemos que incrementar el valor de num1 en 1 unidad
//con la operacion + (suma o incrementacion) y el 1, incrementamos en 1 unidad el valor de num1 
//esto lo ponemos en un parentesis para que se ejecute primero
//luego hacemos la comparacion que verifica si el resultado es menor o igual que num2 

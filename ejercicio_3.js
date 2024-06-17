let a, b;
a = 3; b = 7;

//resultado = a * b;

//no se ejecuta la multiplicacion porque la expresión a * b no estaba entre paréntesis
//esto significa que el motor de JavaScript interpretó la expresión como "a * b es"
//dado que "es" no es un operador válido, se produjo un error de sintaxis

resultado= a * (b)
//se agrega el parentesis de cierre en la variable b y la multiplicacion ya deberia ejecutarse sin problemas

document.write(`Variable a contiene ${a} <br> ` );
document.write(`Variable b contiene ${b} <br> ` );

//document.write(`El producto de a por b es ${result} <br> `);
//anteriormente podiamos estar seguros que la multiplicacion deberia funcionar, pero esta no se muestra en el html
//eso es porque en este document.write la variable result esta mal escrita
//ya que no existe ninguna variable con ese nombre, y la multiplicacion fue almacenada en la variable resultado (linea de codigo 10)
//la variable que deberia ir en ${result} es resultado

document.write(`El producto de a por b es ${resultado} <br> `);
//corregimos la variable ${result} por resultado y ahora el codigo funciona perfectamente

document.write("Los puntos de interrupcion son fundamentales para programar");
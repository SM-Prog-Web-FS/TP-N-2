let dato, resultado;

val1 = window.prompt("Introduce tu nombre", "...");
//la funcion window.prompt muestra un cuadro de dialogo que sale en el html del navegador en la parte superior
//que pide al usuario que ingrese su nombre, y en la parte donde podemos ingresar un nombre aparecen 3 puntos (...)
//lo que se introduzca en ese cuadro de dialogo se guarda en la variable val1

val2 = window.prompt("Introduce tu apellido", "...");
//esto hace casi lo mismo que el anterior, pero aqui pide que se ingrese un apellido
//y ahora el apellido se guarda en la variable val2

resultado = `Concatenado tu nombre y apellido es: ${val1} ${val2}`;
//aca se utilizan comillas simples y no se usa parentesis 
//se utiliza la plantilla de cadena de texto para combinar el nombre y el apellido en una sola cadena de texto
//esto se guarda en la variable resultado 

document.write(resultado);
//con document.write se muestra en el html del navegador el resultado concatenado (nombre y apellido)

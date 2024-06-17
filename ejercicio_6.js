var meses = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", 
    "Octubre", "Noviembre", "Diciembre"
  ];
  //este array llamado "meses" guarda los nombres de los 12 meses del año en orden
  
  var numeroMes = window.prompt("Introduzca un numero del 1 al 12 para obtener el nombre del mes:", "");
  //la funcion window.prompt muestra un cuadro de diálogo en la parte superior del navegador
  //este cuadro pide al usuario que introduzca un número entre 1 y 12
  //el numero que el usuario ingrese se guarda en la variable numeroMes
  
  numeroMes = parseInt(numeroMes);
  //la funcion parseInt convierte el valor ingresado (que es un texto) a un numero entero
  //esto es necesario para poder usar el número en nuestras comparaciones y operaciones （￣︶￣）↗　
  
  if (numeroMes >= 1 && numeroMes <= 12) {
    //esta condicion verifica que el numero ingresado esta entre el 1 y (funcion &&) 12
    //si el numero esta dentro de este rango, se ejecuta el bloque de codigo dentro del if
  
    var nombreMes = meses[numeroMes - 1];
    //los arrays en JavaScript empiezan en 0, asi que restamos 1 al numero ingresado
    //esto nos da el indice correcto para obtener el nombre del mes del array "meses"
    //entonces si el usuario ingresa 1, obtenemos el índice 0 del array, que es "Enero"
    
    document.write("El mes correspondiente al numero " + numeroMes + " es " + nombreMes + ".");
    //la funcion document.write escribe el nombre del mes directamente en el documento html
    //mostramos un mensaje que dice cual es el mes correspondiente al número ingresado por el usuario
  } else {
    document.write("El numero no es valido, introduce un numero valido entre 1 y 12.");
    //si el numero ingresado no esta entre 1 y 12, mostramos un mensaje de error
    //esto le indica al usuario que debe ingresar un número dentro del rango valido
  }
  
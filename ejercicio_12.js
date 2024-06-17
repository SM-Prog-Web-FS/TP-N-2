class Vehiculo {
    constructor(marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }
    //creamos la clase vehiculo con un constructor que inicializa los atributos marca, modelo y año

    obtenerInformacion() {
        return `marca: ${this.marca}, modelo: ${this.modelo}, año: ${this.año}`;
    }
    //el metodo obtenerInformacion devuelve una cadena con la informacion del vehiculo
}

class Automovil extends Vehiculo {
    //creamos la clase automovil que extiende la clase vehiculo
    
    constructor(marca, modelo, año, color, precio) {
        super(marca, modelo, año);
        //llamamos al constructor de la clase base vehiculo con super
        this.color = color;
        this.precio = precio;
        //ademas de llamar al constructor de la clase base usando super, inicializa los nuevos atributos color y precio
    }

    obtenerInformacion() {
        let infoBase = super.obtenerInformacion();
        return `${infoBase}, color: ${this.color}, precio: ${this.precio}`;
        //sobreescribimos el metodo obtenerInformacion para incluir color y precio en la informacion mostrada
    }
}

//creamos instancias de vehiculo y automovil
let vehiculo1 = new Vehiculo("fiat", "pulse", 2020);

let automovil1 = new Automovil("fiat", "cronos", 2021, "rojo", 12345678);

console.log(vehiculo1.obtenerInformacion());

console.log(automovil1.obtenerInformacion());
//llamamos al metodo obtenerInformacion en ambas instancias y mostramos la informacion en la consola del navegador

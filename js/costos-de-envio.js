//Simulador de costos de envio

//constantes
const precioPorKilo = 100;
const precioMinimo = 300;

//variables
let peso, destino, excedente = 0, opcionValida;

//funcion para definir volumen
const volumen = function () {
    let largo = parseInt(prompt("ingrese el largo de su empaque en cm:"));
    let ancho = parseInt(prompt("ingrese el ancho de su empaque en cm:"));
    let alto = parseInt(prompt("ingrese el alto de su empaque en cm:"));
    let resultado = largo * ancho * alto;
    console.log("El volumen de su empaque es de " + resultado + "cm3");
    if (resultado >= 1000) {
        let volumen = prompt("el tamaño de su articulo excede las dimensiones permitidas. si continua se le cobrara un adicional. ¿Desea continuar?");
        if (volumen.toLowerCase() === "no") { alert("gracias, vuelva prontos"); }
        else if (volumen.toLowerCase() === "si") {
            excedente = precioPorKilo * 10;
            alert("el valor de su excedente es de " + excedente + " y se sumara al costo final de su envio");
        } else { alert("ingrese una opcion valida") }
    }
}
//obtener el peso del empaque
peso = parseFloat(prompt("ingrese el peso de su empaque en kg:"));
console.log("el peso de su envio es de " + peso + "kg");

//llamar a la funcion volumen
volumen()

// Determinar el destino y calcular el costo
do {
    opcionValida = true;
    let resultado;
    destino = parseInt(prompt("ingrese su destino. 1)Mar del Plata, 2)Prov. Bs As hasta 200km, 3)CABA, 4)Otras provincias hasta 1000km, 5)Mas de 1000km"));
    switch (destino) {
        case 1:
            alert("el envio dentro de Mar del Plata es sin cargo");
            break;
        case 2:
            resultado = precioPorKilo * peso + precioMinimo + excedente;
            console.log("el valor de su envio es de " + resultado + " pesos");
            break;
        case 3:
            resultado = precioPorKilo * peso + (precioMinimo * 2) + excedente;
            console.log("el valor de su envio es de " + resultado + " pesos");
            break;
        case 4:
            resultado = precioPorKilo * peso + (precioMinimo * precioMinimo) + excedente;
            console.log("el valor de su envio es de " + resultado + " pesos");
            break;
        case 5:
            alert("Consultenos por opciones de envio")
            break;
        default: alert("Ingrese una opcion valida")
            opcionValida = false;
            break;
    }
} while (opcionValida != true);
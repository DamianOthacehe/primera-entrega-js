//calculadora



let num1 = parseInt(prompt("ingrese un numero"));
let num2 = parseInt(prompt("ingrese un segundo numero"));
let opcionValida;
let calculadora;


// Funciones de operaciones matemáticas

function suma() {
    let resultado = num1 + num2;
    console.log(num1 + " mas " + num2 + " es igual a " + resultado)
}

function resta() {
    let resultado = num1 - num2;
    console.log(num1 + " menos " + num2 + " es igual a " + resultado)
}

function multiplicacion() {
    let resultado = num1 * num2;
    console.log(num1 + " por " + num2 + " es igual a " + resultado)
}

function division() {
    while (num2 === 0) {
        alert("no se puede dividir por 0. Ingrese un valor valido");
        num2 = parseInt(prompt("ingrese un segundo numero"));
    }
    let resultado = num1 / num2;
    console.log(num1 + " dividido " + num2 + " es igual a " + resultado)
}

function divisibilidad() {
    if (num1 % num2 == 0) {
        console.log(num1 + " es multiplo de  " + num2);
    } else { console.log(num1 + " no es multiplo de " + num2) }
}


// Bucle para seleccionar una operación

do {
    opcionValida = true;
    calculadora = parseInt(prompt("Seleccione una operación. 1)Sumar, 2)Restar, 3)Multiplicar, 4)Dividir, 5)Verificar divisibilidad"));
    switch (calculadora) {
        case 1:
            suma();
            break;
        case 2:
            resta();
            break;
        case 3:
            multiplicacion();
            break;
        case 4:
            division();
            break;
        case 5:
            divisibilidad();
            break;
        default:
            alert("Ingrese una opcion valida")
            opcionValida = false;
            break;
    }

} while (opcionValida != true);


// Imprimir tabla de multiplicar

let i;
for (i = num1; i <= num1 * 10; i = i + num1) {
    console.log(i)
}
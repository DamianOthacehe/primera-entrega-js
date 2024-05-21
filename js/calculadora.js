//CALCULADORA


//variables

let num1;
let num2;
let opcionValida;
let calculadora;


//funcion con bucle para pedido de valores

function pedirNumero(mensaje) {
    let numero
    do {
        numero = parseInt(prompt(mensaje));
        if (isNaN(numero)) {
            alert("Por favor, ingrese valores numéricos válidos.");
        }
    } while (isNaN(numero)) {
        return numero;
    }
}


//pedido de valores

num1 = pedirNumero("ingrese un numero");
num2 = pedirNumero("ingrese un segundo numero");


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
        num2 = pedirNumero("ingrese un segundo numero");
    }
    let resultado = num1 / num2;
    console.log(num1 + " dividido " + num2 + " es igual a " + resultado)
}

function divisibilidad() {
    if (num1 % num2 == 0) {
        console.log(num1 + " es multiplo de  " + num2);
    } else { console.log(num1 + " no es multiplo de " + num2) }
}

function tabla() {
    let i;
    for (i = num1; i <= num1 * 10; i = i + num1) {
        console.log(i)
    }
    let l;
    for (l = num2; l <= num2 * 10; l = l + num2) {
        console.log(l)
    }
}


// Bucle para seleccionar una operación

do {
    opcionValida = true;
    calculadora = parseInt(prompt("Seleccione una operación. 1)Sumar, 2)Restar, 3)Multiplicar, 4)Dividir, 5)Verificar divisibilidad, 6)Imprimir tabla de multiplicar"));
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
        case 6:
            tabla()
            break;
        default:
            alert("Ingrese una opcion valida")
            opcionValida = false;
            break;
    }

} while (opcionValida != true);
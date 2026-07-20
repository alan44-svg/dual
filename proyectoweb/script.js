document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("btnSaludar").addEventListener("click", function () {
        alert("¡Bienvenido a JavaScript!");
    });

    document.getElementById("contacto").addEventListener("click", function () {
        alert("facebook: Alan Iglesias Instagram:axlan.24 telefono: 7224348447");
    });

});

//ejercicio

nombre = "Alan";
let edad = 17;
const empresa = "JC Desarrollo Digital";


// 2. Realizamos una operación
let nacimiento = 2025 - edad;


// 3. Mostramos el mensaje personalizado
console.log(`Hola ${nombre}, tienes ${edad} años.`);
console.log(`Naciste aproximadamente en ${nacimiento}.`);
console.log(`Bienvenido a ${empresa}.`);

//tipo de datos 

let nombre = "Alan";          // String
let edad = 18;                // number
let promedio = 9.5;           // Float
let estudiante = true;        // Boolean
let dato = null;              // Null


// Operaciones matemáticas

let num1 = 20;
let num2 = 5;

let suma = num1 + num2;
let resta = num1 - num2;
let multiplicacion = num1 * num2;
let division = num1 / num2;
let modulo = num1 % num2;

console.log(`Suma: ${suma}`);
console.log(`Resta: ${resta}`);
console.log(`Multiplicación: ${multiplicacion}`);
console.log(`División: ${division}`);
console.log(`Módulo: ${modulo}`);



// Operadores de comparación


console.log(`20 == 5: ${num1 == num2}`);
console.log(`20 === 5: ${num1 === num2}`);
console.log(`20 >= 5: ${num1 >= num2}`);
console.log(`20 <= 5: ${num1 <= num2}`);



// Operadores lógicos


let mayorEdad = edad >= 18;
let tieneCredencial = true;

console.log(`Mayor de edad y tiene credencial: ${mayorEdad && tieneCredencial}`);
console.log(`Mayor de edad o tiene credencial: ${mayorEdad || tieneCredencial}`);
console.log(`No es estudiante: ${!estudiante}`);



// Muestra de resultados
console.log(`La suma de ${num1} + ${num2} es igual a ${suma}`);

console.log(`Resumen:
Nombre: ${nombre}
Empresa: ${empresa}
Promedio: ${promedio}`);

//Mayor de edad 
let edad = 20;

if (edad >= 18) {
    console.log("Puede ingresar al evento.");
} else {
    console.log("No puede ingresar al evento.");
}

//menu de cafeteria 
let bebida = 2;

switch (bebida) {
    case 1:
        console.log("Café");
        break;
    case 2:
        console.log("Capuchino");
        break;
    case 3:
        console.log("Chocolate");
        break;
    case 4:
        console.log("Té");
        break;
    default:
        console.log("Opción no válida");
}

//inicio de sesion

let usuario = "admin";

let contraseña = "1234";

if (usuario === "admin" && contraseña === "1234") {
    console.log("Bienvenido al sistema.");
} else {
    console.log("Usuario o contraseña incorrectos.");
}

//descuento de compra 
let compra = 1200;

if (compra >= 1000) {
    console.log("Descuento del 20%");
} else if (compra >= 500) {
    console.log("Descuento del 10%");
} else {
    console.log("No aplica descuento.");
}

//descuento 
let compra = 1200;

if (compra >= 1000) {
    console.log("Descuento del 20%");
} else if (compra >= 500) {
    console.log("Descuento del 10%");
} else {
    console.log("No aplica descuento.");
}

//operador ternario (clima)
document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("btnSaludar").addEventListener("click", function () {
        alert("¡Bienvenido a JavaScript!");
    });

    document.getElementById("contacto").addEventListener("click", function () {
        alert("facebook: Alan Iglesias Instagram:axlan.24 telefono: 7224348447");
    });

});

//ejercicio

nombre = "Alan";
let edad = 17;
const empresa = "JC Desarrollo Digital";


// 2. Realizamos una operación
let nacimiento = 2025 - edad;


// 3. Mostramos el mensaje personalizado
console.log(`Hola ${nombre}, tienes ${edad} años.`);
console.log(`Naciste aproximadamente en ${nacimiento}.`);
console.log(`Bienvenido a ${empresa}.`);

//tipo de datos 

let nombre = "Alan";          // String
let edad = 18;                // number
let promedio = 9.5;           // Float
let estudiante = true;        // Boolean
let dato = null;              // Null


// Operaciones matemáticas

let num1 = 20;
let num2 = 5;

let suma = num1 + num2;
let resta = num1 - num2;
let multiplicacion = num1 * num2;
let division = num1 / num2;
let modulo = num1 % num2;

console.log(`Suma: ${suma}`);
console.log(`Resta: ${resta}`);
console.log(`Multiplicación: ${multiplicacion}`);
console.log(`División: ${division}`);
console.log(`Módulo: ${modulo}`);



// Operadores de comparación


console.log(`20 == 5: ${num1 == num2}`);
console.log(`20 === 5: ${num1 === num2}`);
console.log(`20 >= 5: ${num1 >= num2}`);
console.log(`20 <= 5: ${num1 <= num2}`);



// Operadores lógicos


let mayorEdad = edad >= 18;
let tieneCredencial = true;

console.log(`Mayor de edad y tiene credencial: ${mayorEdad && tieneCredencial}`);
console.log(`Mayor de edad o tiene credencial: ${mayorEdad || tieneCredencial}`);
console.log(`No es estudiante: ${!estudiante}`);



// Muestra de resultados
console.log(`La suma de ${num1} + ${num2} es igual a ${suma}`);

console.log(`Resumen:
Nombre: ${nombre}
Empresa: ${empresa}
Promedio: ${promedio}`);

//Mayor de edad 
let edad = 20;

if (edad >= 18) {
    console.log("Puede ingresar al evento.");
} else {
    console.log("No puede ingresar al evento.");
}

//menu de cafeteria 
let bebida = 2;

switch (bebida) {
    case 1:
        console.log("Café");
        break;
    case 2:
        console.log("Capuchino");
        break;
    case 3:
        console.log("Chocolate");
        break;
    case 4:
        console.log("Té");
        break;
    default:
        console.log("Opción no válida");
}

//inicio de sesion

let usuario = "admin";

let contraseña = "1234";

if (usuario === "admin" && contraseña === "1234") {
    console.log("Bienvenido al sistema.");
} else {
    console.log("Usuario o contraseña incorrectos.");
}

//descuento de compra 
let compra = 1200;

if (compra >= 1000) {
    console.log("Descuento del 20%");
} else if (compra >= 500) {
    console.log("Descuento del 10%");
} else {
    console.log("No aplica descuento.");
}

//descuento 
let compra = 1200;

if (compra >= 1000) {
    console.log("Descuento del 20%");
} else if (compra >= 500) {
    console.log("Descuento del 10%");
} else {
    console.log("No aplica descuento.");
}

//operador ternario (clima)
let temperatura = 32;

let clima = (temperatura >= 30) ? "Hace calor." : "Hace frío.";

console.log(clima);
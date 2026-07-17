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
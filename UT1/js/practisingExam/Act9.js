"use strict"
{
    let num1; let num2; let op
    do {
        num1 = prompt('Introduzca un primer número: ');
        num2 = prompt('Introduzca un segundo número: ');
        op = prompt('Introduzca una operación (+|-|/|*): ');
    } while (!parseInt(num1) && !parseInt(num2) && (op !== '+' || op !== '-' || op !== '/' || op !== '*'));

    switch (op) {
        case '+':
            console.log(`La suma de ${num1} y ${num2} es ${num1 + num2}`);
            break;
        case '-':
            console.log(`La resta de ${num1} y ${num2} es ${num1 - num2}`);
            break;
        case '/':
            console.log(`La división de ${num1} y ${num2} es ${num1 / num2}`);
            break;
        case '*':
            console.log(`La multiplicación de ${num1} y ${num2} es ${num1 * num2}`);
            break;
    }
    
}
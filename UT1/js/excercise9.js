"use strict"
{
    let num1 = parseInt(prompt('Introduce un número: '));
    let num2 = parseInt(prompt('Introduce otro número: '));
    let op = prompt('Introduzca una operación (+,-,*,/):  ');

    switch (op) {
        case '+':
            console.log('La suma es: ' + (num1+num2));
            break;
        case '-':
            console.log('La resta es: ' + (num1-num2));
            break;
        case '*':
            console.log('La multiplicación es: ' + (num1*num2));
            break;
        case '/':
            console.log('La división es: ' + (num1/num2));
            break;
        default:
            console.log('Ha introducido una opción inválida.')
    }

}
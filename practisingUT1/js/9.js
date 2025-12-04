"use strict"
{
    let num1;
    let num2;
    let ope;
    let isValid = false;
    do {
        num1 = prompt('Introduzca un primer número');
        num2 = prompt('Introduzca un segundo número');
        ope = prompt('Introduzca una operación');

        if (isNaN(num1) && isNaN(num2)) {
            if (ope == '+' || ope == '-' || ope == '/' || ope == '*') {
                isValid = true;
            }
        } else {
            isValid = false;
        }

    } while (isValid = false);

    switch (ope) {
        case '+':
            console.log(`La suma de ambos números es: ${num1+num2}`);
            break;;
        case '-':
            console.log(`La resta de ambos números es: ${(num1-num2)}`);
            break;;
        case '/':
            console.log(`La división de ambos números es: ${num1/num2}`);
            break;;
        case '*':
            console.log(`La multiplicación de ambos números es: ${num1*num2}`);
            break;;
    }
    
}
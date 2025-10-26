"use strict"
{
    let num = 1; let sum = 0; let product = 1; let cont = 0;
    do {
        num = prompt('Introduzca un número mayor o igual que 0');
        if (num >= 0) {
            sum += parseInt(num);
            product *= parseInt(num);
            cont++;
        }
    } while (num >= 0);
    console.log (`La suma de todos los números es: ${sum}`);
    console.log (`El producto de todos los números es: ${product}`);
    console.log (`La media de todos los números es: ${(sum / cont)}`);
}
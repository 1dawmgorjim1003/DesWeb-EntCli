"use strict"
{
    let num = 0;
    let sum = 0;
    let prod = 1;
    let contNums = 0;
    do {
        num = parseInt(prompt('Introduzca un número'));
        if (num >= 0) {
            contNums++;
            sum += num;
            prod *= num;
        }
    } while (num >= 0 && isNaN(num));
    
    console.log(`Suma: ${sum}`);
    console.log(`Producto: ${prod}`);
    console.log(`Media: ${(sum/contNums)}`);
}
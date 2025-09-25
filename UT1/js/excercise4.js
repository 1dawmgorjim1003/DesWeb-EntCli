"use strict" 
{
    let num = 0;let suma=0; let prod=1; let med=1; let cont=0;

    do {
        num = prompt('Introduzca un número');
        if (num >= 0) {
            suma += parseInt(num);
            prod *= parseInt(num);
            cont++;
        }
    } while(num >= 0);
    
    med = parseInt(suma) / parseInt(cont);
    console.log('La suma es: ' + suma);
    console.log('El producto es: ' + prod);
    console.log('La media es: ' + med);
}
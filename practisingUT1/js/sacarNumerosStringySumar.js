/*
    SACAR NÚMEROS DE UN STRING. POSTERIORMENTE, SUMARLOS, CALCULAR EL PRODUCTO Y HACER LA MEDIA A TRAVÉS DE UNA FUNCIÓN FLECHA
*/

"use strict"
{
    let output = (chain) => {
        let regExp = new RegExp('[0-9]{1,2}', 'g');
        // let regExp = new RegExp('\\d+', 'g'); OTRA MANERA
        return chain.match(regExp);
    };
    let outputArray = output('5Me ll3mo M1guel 6G2rdon J4mene8z10');
    // console.log(outputArray);
    let a = (outputArray) => {
        let sum = 0;
        let prod = 1;
        outputArray.forEach((i) => {
            i = parseInt(i);
            sum += i;
            prod *= i;
        })
        return `La suma es: ${sum} \nEl producto es: ${prod} \nLa media es: ${sum/outputArray.length}`;
    };

    console.log(a(outputArray));
}
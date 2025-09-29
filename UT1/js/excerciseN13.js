"use strict"
{
    function miFuncion (num1) {
        let output = 1;
        num1 = parseInt(num1);
        for (let i = 1; i <= num1; i++) {
            output *= i;
        }
        return output;
    }

    console.log(miFuncion(5));
}
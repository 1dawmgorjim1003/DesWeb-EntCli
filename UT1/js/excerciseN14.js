"use strict"
{
    function miFuncion(num1, discount) {
        discount = discount / 100;
        return num1 * (1 - discount);
    }

    console.log(miFuncion(600, 20));
}
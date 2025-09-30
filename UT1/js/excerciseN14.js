"use strict"
{
    function myFunction(num1, discount) {
        discount = discount / 100;
        return num1 * (1 - discount);
    }

    console.log(myFunction(600, 20));
}
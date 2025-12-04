"use strict"
{
    function myFunction(quantity, discount) {
        discount = discount / 100;
        return quantity * (1 - discount);
    }

    console.log(myFunction(1000,20));
}
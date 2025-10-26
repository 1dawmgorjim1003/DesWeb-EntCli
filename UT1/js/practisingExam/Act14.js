"use strict"
{
    function myFunction(num, discount) {
        discount = discount / 100;
        return num *(1 - discount);
    }

    console.log(myFunction(1000,20));
    
}
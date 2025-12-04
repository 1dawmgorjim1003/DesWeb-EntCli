"use strict"
{
    function factorial(num) {
        let output = 1;
        for (num; 0 < num; num-- ) {
            output *= num;
        }
        return output;
    }

    console.log(factorial(5));
}
"use strict"
{
    function myFunction(num) {
        if (num === 1) {
            return 1;
        } else {
            return num * myFunction(num - 1);
        }
    }

    console.log(myFunction(5));
    
}
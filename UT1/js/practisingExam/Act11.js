"use strict"
{
    function myFunction(num) {
        if (num === 0) {
            return 'Par';
        } else if (num === 1) {
            return 'Impar';
        } else {
            return myFunction(num - 2);
        }
    }

    console.log(myFunction(22));
    
}
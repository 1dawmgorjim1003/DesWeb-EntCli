"use strict"
{
    function myFunction(num) {
        let cont = 0;
        for (let i = 0; i <= num; i++) {
            if (num % i == 0) {
                cont ++;
            }
        }

        if (cont == 2) {
            return true;
        }
        return false;
    }

    console.log(myFunction(7));
    
}
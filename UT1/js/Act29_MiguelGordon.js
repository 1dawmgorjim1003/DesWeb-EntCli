"use strict"
{
    function myFunction(num, base) {
        let output = 0;
        if (base === 2) {
            for(let i = 0; i < num.length; i++) {
                output += num.charAt(i) ^ 2;
            }
            return output;
        } else if (base === 10) {

        } else {
            return "Base no soportada. Usa 2 o 10.";
        }

    }

    console.log(myFunction(100, 2));

}
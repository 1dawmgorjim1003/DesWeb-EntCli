"use strict"
{
    function myFunction(num, base) {
        if (base === 2) {
            let decimal = 0;
            let potency = 1;

            while (num > 0) {
                let digit = num % 10;
                decimal = decimal + digit * potency;
                potency = potency * 2;
                num = (num - digit) / 10;
            }

            return decimal;
            
        } else if (base === 10) {
            let binary = 0;
            let factorial = 1;
            
            while (num > 0) {
                let rest = num % 2;
                binary = binary + rest * factorial;
                num = (num - rest) / 2;
                factorial = factorial * 10;
            }

            return binary;
        } else {
            return "Base no válida";
        }
    }

    console.log(myFunction(4, 10));

}
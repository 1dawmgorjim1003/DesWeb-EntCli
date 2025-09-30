"use strict"
{
    //NORMAL FUNCTION
    function myFunction (num1) {
        let output = 1;
        num1 = parseInt(num1);
        for (let i = 1; i <= num1; i++) {
            output *= i;
        }
        return output;
    }

    console.log(myFunction(5));

    //RECURSIVE FUNCTION
    function myFunction2 (num1) {
        if (num1 === 1) {
            return 1;
        } else {
            return num1 * myFunction2(num1 - 1);
        }
    };

    console.log(myFunction2(7));
}
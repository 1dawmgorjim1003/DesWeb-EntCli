"use strict"
{
    //NORMAL FUNCTION
    function myFunction (num1) {
        if (num1 % 2 == 0) {
            return console.log('EVEN');;
        } else {
            return console.log('ODD');
        }
    }

    myFunction(29);

    //RECURSIVE FUNCTION
    function myFunction2 (num1) {
        if (num1 === 0) {
            return 'EVEN';
        } else if (num1 === 1) {
            return 'ODD';
        } else {
            return myFunction2(num1 - 2);
        }
    };

    console.log(myFunction2(30));


}
"use strict"
{
    function isEvenOrOdd(num) {
        if (num % 2 == 0) {
            return 'Par';
        }

        return 'Impar';
    }

    console.log(isEvenOrOdd(2));
}
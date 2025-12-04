"use strict"
{
    function isCousin(num) {
        let divisors = 0;
        for (let i = 0; i <= num; i++) {
            if (num % i == 0) {
                divisors++;
            }
        }

        if (divisors == 2) {
            return true;
        }

        return false;
    }

    console.log(isCousin(17));
}
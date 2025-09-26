"use strict" 
{
    function miFuncion(num1)  {
        let $cont = 0;
        for (let $i = 0; $i <= num1; $i++) {
            if (num1 % $i == 0) {
                $cont++;
            }
        }

        if ($cont > 2) {
            return false;
        } else {
            return true;
        }
    }

    console.log(miFuncion(7));
}
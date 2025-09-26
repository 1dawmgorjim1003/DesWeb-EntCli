"use strict"
{
    function miFuncion (num1) {
        let $output;
        $output = parseInt($output);
        num1 = parseInt(num1);
        for (let $i = 0; $i < num1; $i++) {
            $output += num1 * $i;
        }
        return $output;
    }

    console.log(miFuncion(5));
}
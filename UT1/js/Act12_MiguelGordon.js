"use strict"
{
    function myFunction (param1, param2) {
        let output;
        switch (param2) {
            case 'C':
                output = ((param1 * 9 / 5) + 32) + 'ºF';
                break;
            case 'F':
                output = ((param1 - 32) * 5 / 9) + 'ºC';
                break;
            default:
                output = 'You have entered an invalid parameter.';
                break;
        }
        return output;
    }

    console.log(myFunction(32,'C'));
}
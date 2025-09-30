"use strict"
{
    function myFunction (param1, param2) {
        let output;
        param1 = parseInt(param1);
        switch (param2) {
            case 'C':
                output = (param1 * 9 / 5) + 32;
                break;
            case 'F':
                output = (param1 - 32) * 5 / 9;
                break;
            default:
                output = 'You have entered an invalid parameter.';
                break;
        }
        return output;
    }

    console.log(myFunction(32,'F'));
}
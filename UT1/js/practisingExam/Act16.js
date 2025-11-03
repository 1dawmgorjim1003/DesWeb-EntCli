"use strict"
{
    function myFunction(number, character) {
        let output = '';
        for (let i = number; i > 0; i--) {
            for (let j = 0; j < i; j++) {
                output += character;
            }
            output += '\n';
        }
        return output;
    }

    console.log(myFunction(5,'A'));
    
}
"use strict"
{
    function myFunction(character, num1) {
        let output = '';
        for (let i = num1; i > 0; i--) {
            for (let j = 0; j <= i; j++)  {
                output += character;
            }
            output +='\n';
        }
        return output
    }

    console.log(myFunction('A', 6));
}
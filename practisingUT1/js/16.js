"use strict"
{
    function myFunction(character,rows) {
       let output = '';
        for (rows; rows > 0; rows--) {
            for (let j = 0; j < rows; j++ ) {
                output += character;
            }
            output += '\n';
       }

       return output;
    }

    console.log(myFunction('A',5));
}
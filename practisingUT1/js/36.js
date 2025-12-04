"use strict"
{
    function myFunction(input) {
        let min = Infinity;
        let max = -Infinity;
        input.forEach(i => {
            if (i < min) {
                min = i;
            } else if (i > max) {
                max = i;
            }
        })  
        return [max,min];
    }

    console.log(myFunction([1,5,34,99,-2,2,22,533,-60]));
} 
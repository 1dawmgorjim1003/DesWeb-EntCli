"use strict"
{
    function myFunction(input) { 
        let min = Infinity;
        let max = -Infinity;
        input.forEach(num => {
            if (num > max) {
                max = num;
            }

            if (num < min) {
                min = num;
            }
        });
        return [max,min];
    }

    console.log(myFunction([1,5,34,99,-2,27,-60,92,20]));
    
}
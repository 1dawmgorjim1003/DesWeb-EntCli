"use strict"
{
    function myFunction(array) {
        let max = -Infinity;
        let min = Infinity;

        array.forEach(i => {
            if (i > max) {
                max = i;
            } else if (i < min) {
                min = i;
            }
        });
        return [max, min];
    }
    console.log(myFunction([1,5,-60,45,99,-2]));;
}
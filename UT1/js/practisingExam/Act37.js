"use strict"
{
    function myFunction(input) { 
        let listas = {
            pares: [],
            impares: []
        };
        input.forEach(num => {
            if (num % 2 == 0) {
                listas.pares.push(num);
            } else {
                listas.impares.push(num);
            }
        });
        return listas;
    }

    console.log(myFunction([1,2,3,4,5,6,7,8,9,0]));
    
}
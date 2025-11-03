"use strict"
{
    function myFunction(input) { 
        let ascArray = [...input.sort((a,b) => a-b )];
        let descArray = [...input.sort((a,b) => b-a )];
        let listas = {
            asc: ascArray,
            desc: descArray
        };
            
        return listas;
    }

    console.log(myFunction([7,5,7,8,6]));
    
}
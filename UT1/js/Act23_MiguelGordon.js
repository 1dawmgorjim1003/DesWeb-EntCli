"use strict"
{
    function myFunction(chain) {
        let arrayChain = chain.split("");
        //console.log(arrayChain);
        let arrayIsEqual = arrayChain.reverse();
        //console.log(arrayIsEqual)
        let isEqual = arrayIsEqual.join("");
        //console.log(isEqual);
        if (isEqual.toLowerCase() === chain.toLowerCase()) {
            return true;
        }
        return false;
    }

    console.log(myFunction("Salas"));
}
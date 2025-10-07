"use strict"
{
    function myFunction(chain, numbersCharacters) {
        return chain.substring(0, numbersCharacters);
    }

    console.log(myFunction('Hello World', 4));
}
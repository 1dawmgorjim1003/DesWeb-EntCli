"use strict"
{
    function myFunction(chain, separatorCharacter)     {
        return chain.split(separatorCharacter);
    }

    console.log(myFunction('hello how are you', ' '))
}
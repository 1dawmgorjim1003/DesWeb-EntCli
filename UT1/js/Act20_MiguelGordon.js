"use strict"
{
    function myFunction(chain, numberTimes) {
        return chain.repeat(numberTimes);
    }

    console.log(myFunction('Hello World ', 3));
}
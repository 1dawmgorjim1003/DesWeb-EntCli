"use strict"
{
    function myFunction(chain) {
       let reversedWord = chain.split('').reverse().join('');
       if (reversedWord.toLowerCase() == chain.toLowerCase()) {
            return true;
       }
       return false;       
    }

    console.log(myFunction('Ana'));
}
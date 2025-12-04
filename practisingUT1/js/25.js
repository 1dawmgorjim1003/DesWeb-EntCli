"use strict"
{
    function myFunction(chain) {
        chain = chain.toString();
        let reversedWord = chain.split('').reverse().join('');
        if (reversedWord.toLowerCase() == chain.toLowerCase()) {
            return true;
        }
        return false;       
    }
    
    console.log(myFunction(2002));
}
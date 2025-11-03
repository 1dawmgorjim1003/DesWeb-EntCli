"use strict"
{
    function myFunction(chain,word) {
       let regExp = new RegExp(`${word}`, 'gi');
       let array = chain.match(regExp);
        return array.length;
    }

    console.log(myFunction('Hola mundo adios mundo','mundo'));
    
}
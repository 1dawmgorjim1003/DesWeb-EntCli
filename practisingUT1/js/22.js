"use strict"
{
    function myFunction(chain,word) {
       let regExp = new RegExp(`${word}`,'g');
       let arrayWithWords = chain.match(regExp);
       return arrayWithWords.length;
    }

    console.log(myFunction('mundo Hola mundo adios mundo','mundo'));
}
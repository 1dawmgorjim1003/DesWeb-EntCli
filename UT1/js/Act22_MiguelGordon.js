"use strict"
{
    function myFunction(chain, word) {
        const regExp  = new RegExp(`\\b${word}\\b`, 'gi');
        chain = chain.match(regExp);
        return chain.length;

    }

    console.log(myFunction('hola mundo adios mundo', 'mundo'));
}
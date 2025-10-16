"use strict"
{
    function myFunction(chain, value) {
        return chain.replaceAll(value, "");
    }

    console.log(myFunction("xyz1, xyz2, xyz3, xyz4, xyz5", "xyz")); 
}

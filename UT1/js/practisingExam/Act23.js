"use strict"
{
    function myFunction(chain) {
       let array = chain.split('');
       array = array.reverse();
       let comparator = array.join('');
       if (chain.toLowerCase() === comparator.toLowerCase()) {
            return true;
       }
       return false;
    }

    console.log(myFunction('Ana'));
    
}
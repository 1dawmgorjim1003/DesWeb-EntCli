"use strict"
{
    function myFunction(chain,value) {
        let array = chain.split('');
        array = array.reverse();
        let comparator = array.join('');
        if (chain == comparator) {
            return true;
        }
        return false;
    }

    console.log(myFunction('2016'));
    
}
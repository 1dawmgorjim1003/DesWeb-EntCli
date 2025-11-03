"use strict"
{
    function myFunction(chain) {
        let regExp = new RegExp('^[md].*[ao]$', 'i');
        if (regExp.test(chain)) {
            return true;
        }
        return false;
    }

    function myFunction2(chain) {
        chain = chain.toLowerCase();
        if ((chain.charAt(0) == 'm' || chain.charAt(0) == 'd') && (chain.charAt(chain.length-1) == 'a' || chain.charAt(chain.length-1) == 'a')) {
            return true;
        }
        return false;
    }

    console.log(myFunction2('Miguela'));
    
}
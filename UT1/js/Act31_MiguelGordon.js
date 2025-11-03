"use strict"
{
    function myFunction(input) {
        let date = new Date(input);
        let year = date.getFullYear();
        
        let actualDate = new Date();
        let actualYear = actualDate.getFullYear();
        console.log(`Han pasado ${actualYear - year} años.`)
    }


    myFunction(new Date(2010,0,1));;
}
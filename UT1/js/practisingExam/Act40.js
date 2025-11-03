"use strict"
{
    function myFunction(input) {
       let actualDate = new Date();
       let actualYear = actualDate.getFullYear();

       let date = new Date(input);
       let year = date.getFullYear();

       let years = actualYear - year;

       if (actualDate.getMonth-1 > date.getMonth) {
            years += 1;
       } else if (actualDate.getMonth-1 == date.getMonth) {
            if (actualDate.getDate > date.getDate || actualDate.getDate == date.getDate) {
                years += 1;
            }
       }

       return years;

    }
    console.log(myFunction('10/03/2006'));;
}
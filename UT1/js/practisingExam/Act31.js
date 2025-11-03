"use strict"
{
    function myFunction(input) {
        let date = new Date(input);
        let actualDate = new Date();

        let age = actualDate.getFullYear() - date.getFullYear();
        if (actualDate.getMonth() < date.getMonth() || (actualDate.getMonth() === date.getMonth() && actualDate.getDay() < date.getDay())) {
            age--;
        }

        return age;
    }

    console.log(myFunction('01/12/2010'));
    
}
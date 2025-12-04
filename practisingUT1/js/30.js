"use strict"
{
    function myFunction(input) {
        let date = new Date(input);
        console.log(date);
        let current = new Date();

        let age = current.getFullYear() - date.getFullYear();
        
        if (date.getMonth() > current.getMonth() || (date.getMonth() == current.getMonth() && current.getDay() < date.getDay())) {
            age--;
        }

        console.log(age);
       
    }

    myFunction('11/10/2006')
} 
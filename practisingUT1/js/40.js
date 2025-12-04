"use strict"
{
    function myFunction(input) {
        let date = input.split('/');
        date = new Date(date[2],date[1]-1,date[0]);
        console.log(date);
        let current = new Date();

        let age = current.getFullYear() - date.getFullYear();
        
        if (date.getMonth() < current.getMonth() || (date.getMonth() == current.getMonth() && current.getDate() < date.getDate())) {
            age--;
        }

        return age;
       
    }

    console.log(myFunction('9/11/2006'));
} 
"use strict"
{
    function myFunction(date) {
        const arrayWithValues = date.split("/");
        const birthDay = parseInt(arrayWithValues[0]);
        const birthMonth = parseInt(arrayWithValues[1]);
        const birthYear = parseInt(arrayWithValues[2]);

        const today = new Date();
        const todayYear = parseInt(today.getFullYear());
        const todayMonth = parseInt(today.getMonth() + 1);
        const todayDay = parseInt(today.getDate());

        let age = todayYear - birthYear;

        if (todayMonth < birthMonth || (todayMonth === birthMonth && todayDay < birthDay)) {
            edad--;
        }

        return age;
    }


    console.log(myFunction('10/03/2006'));;
}
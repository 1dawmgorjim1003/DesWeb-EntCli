"use strict"
{
    function myFunction(array) {
       let lists = {
            asc: [...array.sort((a,b) => a-b)],
            desc: [...array.sort((a,b) => b-a)]
       }
       return lists;

    }
    console.log(myFunction([7,5,7,8,6]));;
}
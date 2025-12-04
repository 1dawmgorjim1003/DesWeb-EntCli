"use strict"
{
    function myFunction(input) {
        let lists = {
            asc: [...input.sort((a,b) => a-b)],
            desc: [...input.sort((a,b) => b-a)]
        };
        return lists;
    }

    console.log(myFunction([7,5,7,8,6]));
} 
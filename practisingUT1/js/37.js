"use strict"
{
    function myFunction(input) {
        let lists = {
            even: [],
            odd: []
        };

        input.forEach(i => {
            if (i % 2 == 0) {
                lists.even.push(i);
            } else {
                lists.odd.push(i);
            }
        })
        return lists;
    }

    console.log(myFunction([1,2,3,4,5,6,7,8,9,0]));
} 
"use strict"
{
    function myFunction(array) {
       let lists = {
            pares: array.map(i => {
                if (i % 2 == 0) {
                    return `${i}`;
                } else {
                    return '';
                }}),
            impares: array.map(i => {
                if (i % 2 !== 0) {
                    return `${i}`;
                } else {
                    return '';
                }})
        };

       lists.pares = lists.pares.filter(i => i.trim() !== '');
       lists.impares = lists.impares.filter(i => i.trim() !== '');
       return lists;
    }
    console.log(myFunction([1,2,3,4,5,6,7,8,9,0]));;
}
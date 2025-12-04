"use strict"
{
    function myFunction(id) {
        let arrayID = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
        let letterID = id % 23;
        return `${id+arrayID[letterID]}`;
    }

    console.log(myFunction(29502899));
}
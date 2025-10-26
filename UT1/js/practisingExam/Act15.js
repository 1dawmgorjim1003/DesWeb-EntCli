"use strict"
{
    function myFunction(id) {
        let arrayID = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
        let letter = id % 23;
        id = id + arrayID[letter];
        return id;
    }

    console.log(myFunction(29502899));
    
}
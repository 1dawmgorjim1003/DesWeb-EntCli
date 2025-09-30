"use strict"
{
    /*The different letters of the ID number are placed in an array according to a 
    position, which can be found on the Internet. Then, your ID number is divided 
    among the 23 letters of the alphabet, and the remainder corresponds to a 
    position in the array that will contain a letter.
    
    URL of the image: https://www.google.com/search?sca_esv=4c1a28b6bf27f228&udm=2&fbs=AIIjpHx4nJjfGojPVHhEACUHPiMQht6_BFq6vBIoFFRK7qchKEWEvuc0Hbw31oEI7c8o3y5Az9dJyKxsfx0xXZG1h0pUQQrkq_whLlQaot5Sd7W2FybRxJaVovwSyOMzvJeuVUzuW13Vrh5ySB9gAWtB9fco_IjfHImrWnn1D0dBPkHkXxRRizdGqd0Z5MPybaq4U6IILaHY&q=letras+dni+tabla&sa=X&ved=2ahUKEwjz1pXxpYCQAxUyTqQEHWf3BnkQtKgLegQIDRAB&biw=972&bih=960&dpr=1&safe=active&ssui=on*/
    
    function validateID(dniNumber) {
        let arrayID = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
        let numLetter = dniNumber % 23;
        dniNumber = dniNumber + arrayID[numLetter];
        return dniNumber;
    }

    console.log(validateID(30215979))
}
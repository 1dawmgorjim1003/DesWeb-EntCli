"use strict"
{
    function validarDNI(dniNumber) {
        let arrayDNI = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
        let numLetter = dniNumber % 23;
        dniNumber = dniNumber + arrayDNI[numLetter];
        return dniNumber;
    }

    console.log(validarDNI(30215979))
}
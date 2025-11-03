"use strict"
{
    function myFunction(vector) {
        let min = vector[0]; let max = vector[0];
        const regExp = new RegExp('.*a.*', 'gi');
        const regExp2 = new RegExp('.*b.*', 'gi');
        let regExpArray = [];
        let regExpArray2 = [];
        for (let i = 0; i < vector.length; i++) {
            if (vector[i].length < min.length) {
                min = vector[i];
            } else if (vector[i].length > max.length) {
                max = vector[i];
            }
            regExpArray.push(vector[i].match(regExp));
            if (regExp2.test(vector[i])) {
                regExpArray2.push(vector[i]);
            }
        }

        let moreStrA = '';
        for (let i = 0; i < regExpArray.length; i++) {
            if (regExpArray[i].length > moreStrA.length) {
                moreStrA = vector[i];
            }
        }

        console.log(`La cadena más corta es: ${min}`);
        console.log(`La cadena más larga es: ${max}`);
        console.log(`Cadena con más letras A: ${moreStrA}`);
        console.log(`Hay ${regExpArray2.length} cadenas que tienen la b y son: ${regExpArray2}`);
    }

    myFunction(['Hola buenas tardes','Me llamo Miguel Gordon Jiménez','Adios señor', 'Buenos días']);
    
}
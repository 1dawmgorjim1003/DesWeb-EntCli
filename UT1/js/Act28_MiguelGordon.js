"use strict"
{
    const vector = ['Hola', 'Miguel es mi nombre', 'Hoy tengo academia de Francés e Inglés', 'Me gusta JavaScript', 'Me encanta PHP', 'Mañana es Viernes'];

    function myFunction(vector) {
        let largestChain = '';
        for (let i = 0; i < vector.length; i++) {
            if (vector[i].length > largestChain.length) {
                largestChain = vector[i];
            }
        }

        let shortestChain = largestChain;

        for (let i = 0; i < vector.length; i++) {
            if (vector[i].length < shortestChain.length) {
                shortestChain = vector[i];
            }
        }

        let regExpArray = [];
        let regExpArray2 = [];
        const regExp = /.*a.*/gi;
        const regExp2 = /.*b.*/gi;

        for (let i = 0; i < vector.length; i++) {
            regExpArray.push(vector[i].match(regExp));
            if (regExp2.test(vector[i])) {
                regExpArray2.push(vector[i]);
            }
        }

        let moreStrA = '';

        for (let i = 0; i < regExpArray.length; i++) {
            if (vector[i].length > moreStrA.length) {
                moreStrA = vector[i];
            }
        }

        console.log('La cadena más corta es: ' + shortestChain);
        console.log('La cadena más larga es: ' + largestChain);
        console.log('La cadena que más letras A tiene es: ' + moreStrA);
        console.log('Hay ' + regExpArray2.length + ' cadena que tienen la letra b');
        console.log('Las cadenas que tienen la letra b son: ' + regExpArray2)

    }

    myFunction(vector);
}
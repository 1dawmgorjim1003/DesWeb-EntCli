"use strict";
{
    const vector = [12, -5, 7, 0, 23, -3, 8, 2, -10, 17, 4, -8, 11];

    function myFunction(num) {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    function myFunction2(vector, userValue) {
        console.log('El numero de elementos del vector es: ' + vector.length);
        let contEven = 0; 
        let vectorEven = []; 
        let vectorOdd = []; 
        let contOdd = 0;
        let sumNegativesValues = 0;
        let prodPositiveValues = 0;
        let numCousins = 0;
        let cousinsArray = [];
        let evenPositionsArray = [];
        let biggestNumber = 0;
        let lowestNumber = 0;
        let isFounded = false;
        let media = 0;
        let sumNumbers= 0;

        for (let i = 0; i < vector.length; i++) {
            
            sumNumbers += vector[i];
            
            if (vector[i] % 2 == 0 ) {
                contEven++;
                vectorEven.push(vector[i]);
            } else {
                contOdd++;
                vectorOdd.push(vector[i]);
            }

            if (vector[i] < 0) {
                sumNegativesValues += vector[i];
            } else if (vector[i] > 0) {
                prodPositiveValues += vector[i];
            }

            if (myFunction(vector[i])) {
                numCousins++;
                cousinsArray.push(vector[i]);
            }

            if (i % 2 == 0) {
                evenPositionsArray.push(vector[i]);
            }

            if (vector[i] > biggestNumber) {
                biggestNumber = vector[i];
            } else if (vector[i] < lowestNumber) {
                lowestNumber = vector[i];
            }

            if (userValue == vector[i]) {
                isFounded = true;
            }

        }

        if (isFounded == true) {
            console.log('El valor ' + userValue + ' ha sido encontrado');
        } else {
            console.log('El valor ' + userValue + ' NO ha sido encontrado');
        }

        media = sumNumbers / vector.length;
        let lowerThanMedia = [];
        let biggerThanMedia = [];
        
        for (let i = 0; i < vector.length; i++)  {
            if (vector[i] < media) {
                lowerThanMedia.push(vector[i]);
            } else {
                biggerThanMedia.push(vector[i]);
            }
        }

        let sortedVector = [...vector.sort((a, b) => a-b)];
        let sortedVectorLast = [...vector.sort((a, b) => b-a)];


        console.log(contEven + ' vectores son pares');
        console.log('Vectores pares: ' + vectorEven);
        console.log(contOdd + ' vectores son impares');
        console.log('Vectores impares: ' + vectorOdd);
        console.log('La suma de los negativos es: ' + sumNegativesValues);
        console.log('El producto de los positivos es: ' + prodPositiveValues);
        console.log('Numero de números primos: ' + numCousins);
        console.log('Numeros primos: ' + cousinsArray);
        console.log('Numeros que ocupan posiciones pares: ' + evenPositionsArray);
        console.log('Numero mayor: ' + biggestNumber);
        console.log('Numero menor: ' + lowestNumber);
        console.log('Array ordenado de menor a mayor: ' + sortedVector);
        console.log('Array ordenado de mayor a menor: ' + sortedVectorLast);
        console.log('La media de los numeros es: ' + media);
        console.log('Numeros menores que la media: ' + lowerThanMedia);
        console.log('Numeros superiores que la media: ' + biggerThanMedia);
    }

    myFunction2(vector, 47);
}

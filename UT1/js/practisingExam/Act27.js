"use strict"
{
    function myFunction(vector,searcher) {
        console.log(`Número de elementos del vector: ${vector.length}`);
        let vectorEven = []; let vectorOdd = []; let sumNeg = 0; let prodPos = 1;
        let arrayCousins = []; let evenPositions = []; let max = -Infinity; let min = Infinity;
        let sumNumbers = 0; let numbersSmallerMedia = []; let numbersTallerMedia = []; let isFounded = false;
        for (let i = 0; i < vector.length; i++) {
            if (vector[i] % 2 == 0) {
                vectorEven.push(vector[i]);
            } else {
                vectorOdd.push(vector[i]);
            }

            if (vector[i] < 0) {
                sumNeg += vector[i];
            } else {
                prodPos *= vector[i];
            }

            if (isCousin(vector[i])) {
                arrayCousins.push(vector[i]);
            }

            if (i % 2 == 0) {
                evenPositions.push(vector[i]);
            }

            if (vector[i] > max) {
                max = vector[i];
            } else if (vector[i] < min) {
                min = vector[i];
            }

            sumNumbers += vector[i];

            if (vector[i] == searcher) {
                isFounded = true;
            }
        }

        for (let i = 0; i < vector.length; i++) {
            if ((sumNumbers / vector.length) < vector[i]) {
                numbersTallerMedia.push(vector[i]);
            } else if ((sumNumbers / vector.length) > vector[i]) {
                numbersSmallerMedia.push(vector[i]);
            }
        }

        let arraySortedMax = [...vector.sort((a,b) => a-b)];
        let arraySortedMin = [...vector.sort((a,b) => b-a)];

        console.log(`Hay ${vectorEven.length} pares y ${vectorOdd.length} impares`);
        console.log(`Pares: ${vectorEven}`);
        console.log(`Impares: ${vectorOdd}`);
        console.log(`Suma de los números negativos: ${sumNeg}`);
        console.log(`Producto de los números positivos: ${prodPos}`);
        console.log(`Hay ${arrayCousins.length} números primos y son: ${arrayCousins}`);;
        console.log(`Números que ocupan posiciones pares en el vector: ${evenPositions}`);;
        console.log(`El número mayor: ${max}`);;
        console.log(`El número menor: ${min}`);;
        console.log(`Media de todos los números: ${sumNumbers/vector.length}`);;
        console.log(`Números por encima de la media: ${numbersTallerMedia}`);;
        console.log(`Números por debajo de la media: ${numbersSmallerMedia}`);;
        console.log(`Array ordenado de menor a mayor: ${arraySortedMax}`);;
        console.log(`Array ordenador de mayor a menor: ${arraySortedMin}`);;
        console.log(`¿Se ha encontrado el número ${searcher}?: ${isFounded}`);
    }

    function isCousin(num) {
        let counter = 0;
        for (let i = 0; i < num; i++) {
            if (num % i == 0) {
                counter++;
            }
        }

        if (counter == 2) {
            return true;
        }
        return false;
    }

    myFunction([1,2,3,4,5],4);
    
}
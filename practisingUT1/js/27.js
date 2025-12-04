"use strict"
{
    function myFunction(vector) {
        
        
        console.log(`Numeros de elementos del vector: ${vector.length}`);
        evenOdd(vector);
        sumProd(vector);
        isCousin(vector);
        evenPositionsMaxMin(vector);

    }

    function evenOdd(vector) {
        let contEven = 0; let contOdd = 0;
        let arrayEven = []; let arrayOdd = [];
        vector.forEach(i => {
            if (i % 2 == 0) {
                arrayEven.push(i);
                contEven++;
            } else {
                arrayOdd.push(i);
                contOdd++;
            }
        })

        console.log(`Son pares: ${contEven}`);
        console.log(`Son impares: ${contOdd}`);
        console.log(`Pares: ${arrayEven}`);
        console.log(`Impares: ${arrayOdd}`);
    }

    function sumProd(vector) {
        let sumNeg = 0; let prodPos = 1;
        vector.forEach(i => {
            if (i > 0) {
                prodPos *= i;
            } else {
                sumNeg += i;
            }
        })
        console.log(`Suma de los negativos: ${sumNeg}`);
        console.log(`Producto de los positivos: ${prodPos}`);
    }

    function isCousin(vector) {
        let countCousins = 0; let arrayCousins = [];
        vector.forEach(i => {
            let divisors = 0; 
            for (let j = 0; j <= i; j++) {
                if (i % j == 0) {
                    divisors++;
                }
            }
            if (divisors == 2) {
                countCousins++;
                arrayCousins.push(i);
            }
        })
        console.log(`Hay ${countCousins} numeros primos.`);
        console.log(`Nums primos: ${arrayCousins}`);;
    }

    function evenPositionsMaxMin(vector) {
        let cont = 0; let evenPositions = [];
        let min = Infinity;
        let max = -Infinity
        vector.forEach(i => {
            if (cont % 2 == 0) {
                evenPositions.push(i);
            }

            if (i < min) {
                min = i;
            } else if (i > max) {
                max = i;
            }
            cont++;
        })

        console.log(`Numeros en posiciones pares: ${evenPositions}`);
        console.log(`Numero más grande: ${max}`);
        console.log(`Numero más pequeño: ${min}`);
    }

    myFunction([1,2,-3,4,5,-6,7,8,9,-10])
} 
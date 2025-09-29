"use strict" 
{
   let num1 = parseInt(prompt('Introduzca un número: '));
   let num2 = parseInt(prompt('Introduzca otro número: '));
   let output = '';
   for (let i = (num1+parseInt(1)); i < num2; i++) {
        if (i %2 !== 0) {
            output += i;
            output += ' ';
        };
   }

   console.log('Los numeros que tenemos entre ' + num1 + ' y ' + num2 + ' son:');
   console.log(output);
}
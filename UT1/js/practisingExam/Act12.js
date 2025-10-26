"use strict"
{
    function myFunction(num, type) {
        switch (type) {
            case 'C':
                return ((num * 9 / 5) + 32) + ' ºF';
            case 'F':
                return ((num -32) * 9 / 5) + ' ºC';
            default:
                return 'Tipo de temperatura inválido';
        }
    }

    console.log(myFunction(32,'C'));
    
}
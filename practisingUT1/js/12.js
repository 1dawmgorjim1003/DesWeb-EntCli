"use strict"
{
    function convertTemperature(num, op) {
        switch (op) {
            case 'F':
                return `${(32 - num) * (5 / 9)} ºC`;
            case 'C':
                return `${num * ((9 / 5)) + 32} ºF`;
            default:
                return `Base inválida. Debe se ºC o ºF`;
        }
    }

    console.log(convertTemperature(32,'F'));
}
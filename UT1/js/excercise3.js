"use strict"
{
    let hours = prompt('Indique una hora');
    let minutes = prompt('Indique un minuto');
    let seconds = prompt('Indique un segundo');

    let sumaHrs; let sumaMin; let sumaSecs;

    if (hours >= 0 && hours <= 23 || hours == '00') {
        if (minutes >= 0 && minutes <= 59) {
            if (seconds >= 0 && seconds <= 59) {
                console.log('La hora es válida');

                if (seconds == 59) {
                    sumaSecs = 0;
                    sumaMin = parseInt(minutes) + parseInt(1);
                    //console.log(sumaMin);

                    if (sumaMin == 60) {
                        sumaMin = 0;
                        sumaHrs = parseInt(hours) + parseInt(1);
                        
                        if (sumaHrs == 24) {
                            sumaHrs = 0;
                        }
                    }
                } else {
                    sumaSecs = parseInt(seconds) + parseInt(1);
                    sumaMin = parseInt(minutes);
                    sumaHrs = parseInt(hours);
                }

                console.log("La hora mas un segundo es - " + sumaHrs + ':' + sumaMin + ':' + sumaSecs);
            } else {
                console.log('Has introducido un segundo inválido');
            }
        } else {
            console.log('Has introducido un minuto inválido');
        }
    } else {
        console.log("Has introducido una hora inválida");
    }

}
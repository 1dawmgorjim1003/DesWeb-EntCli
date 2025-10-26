"use strict"
{
    let hour = prompt('Indique una hora en formato HH:MM:SS');
    let hourArray = hour.split(':');
    hourArray[0] = parseInt(hourArray[0]);
    hourArray[1] = parseInt(hourArray[1]);
    hourArray[2] = parseInt(hourArray[2]);
    //console.log(hourArray);

    if ((hourArray[0] >= 0 && hourArray[0] <= 24) && (hourArray[1] >= 0 && hourArray[1] <= 59) && (hourArray[2] >= 0 && hourArray[2] <= 59)) {
        hourArray[2]++;
        if (hourArray[2] === 60) {
            hourArray[2] = 0;
            hourArray[1]++;
            if (hourArray[1] === 60) {
                hourArray[1] = 0;
                hourArray[0]++;
                if (hourArray[0] === 24) {
                    hourArray[0] = 0;
                }
            }
        } else {
            hourArray[2]++;
        }
        hour = hourArray.join(':');
        console.log('La hora mas un segundo es: ' + hour);
    } else {
        console.log('Formato de hora inválido.')
    }
}
"use strict"
{
    let button = document.createElement('button');
    button.textContent = 'Comenzar saludos';
    
    let button2 = document.createElement('button');
    button2.textContent = 'Parar saludos';

    let isStarted = false;
    let eventId = 0;

    document.body.append(button);
    document.body.append(button2);

    button.addEventListener('click',(e) => {
        if (!isStarted) {
            isStarted = true;
            eventId = setInterval(() => {
                alert('Hola');
            },5000);
        }
    });

    button2.addEventListener('click',(e) => {
        clearInterval(eventId);
    });
}
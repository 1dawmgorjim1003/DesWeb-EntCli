"use strict" 
{
   let newBtnStart = document.createElement('button');
   newBtnStart.textContent = 'Comenzar saludos';
   document.body.appendChild(newBtnStart);
   
   let newBtnStop = document.createElement('button');
   newBtnStop.textContent = 'Parar saludos';
   document.body.appendChild(newBtnStop);

   let id = 0;
   newBtnStart.addEventListener('click',(e) => {
    id = setInterval(() => alert('Hola'),5000);
   });

   newBtnStop.addEventListener('click',(e) => {
    clearInterval(id);
   });
}
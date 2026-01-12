"use strict"
{
    let myH1 = document.createElement('h1');
    myH1.textContent = 'Contador de visitas';
    myH1.style.color = 'blue';
    
    let myH3 = document.createElement('h3');
    myH3.textContent = `Número de visita: ${localStorage.getItem('visits-counter') ? localStorage.getItem('visits-counter') : 1}`;

    let myButton = document.createElement('button');
    myButton.textContent = 'Borrar datos de localStorage';

    document.body.append(myH1);
    document.body.append(myH3);
    document.body.append(myButton);

    if (!localStorage.getItem('visits-counter')) {
        localStorage.setItem('visits-counter',1);
    } else {
        let visitsNumber = Number(localStorage.getItem('visits-counter'));
        visitsNumber++;
        localStorage.setItem('visits-counter',visitsNumber);
    }

    myButton.addEventListener('click', e => {
        localStorage.removeItem('visits-counter');
        location.reload();
    }) 
}
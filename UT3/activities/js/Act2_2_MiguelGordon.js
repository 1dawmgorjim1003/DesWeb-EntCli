"use strict"
{
    let myH1 = document.createElement('h1');
    myH1.textContent = 'Contador de visitas con sessionStorage';
    myH1.style.color = 'blue';
    
    let myH3 = document.createElement('h3');

    let myButton = document.createElement('button');
    myButton.textContent = 'Borrar datos de sessionStorage';

    document.body.append(myH1);
    document.body.append(myH3);
    document.body.append(myButton);

    if (!sessionStorage.getItem('visits-counter')) {
        sessionStorage.setItem('visits-counter',1);
        myH3.textContent = `Número de visita: 1`;
    } else {
        let visitsNumber = Number(sessionStorage.getItem('visits-counter'));
        visitsNumber++;
        sessionStorage.setItem('visits-counter',visitsNumber);
        myH3.textContent = `Número de visita: ${sessionStorage.getItem('visits-counter')}`;
    }

    myButton.addEventListener('click', e => {
        sessionStorage.removeItem('visits-counter');
        location.reload();
    }); 
}
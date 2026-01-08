"use strict" 
{
    let btn = document.createElement('button');
    btn.textContent = 'Nuevo número';
    
    let btn2 = document.createElement('button');
    btn2.textContent = 'Borrar número';

    let ul = document.createElement('ul');

    document.body.append(btn);
    document.body.append(btn2);
    document.body.append(document.createElement('br'));
    document.body.append(ul);

    btn.addEventListener('click',(e) => {
        let li = document.createElement('li');
        let randomNumber = Math.ceil(Math.random()*100);
        li.textContent = randomNumber;
        ul.append(li);
    });

    btn2.addEventListener('click',(e) => {
        let array = document.querySelectorAll('li');
        let lastLi = array[array.length-1];
        lastLi.remove();
    });
}
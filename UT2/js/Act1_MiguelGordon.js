"use strict" 
{
    let newBtn = document.createElement('button');
    newBtn.textContent = 'Nuevo número';
    document.body.appendChild(newBtn);

    let newBtnDelete = document.createElement('button');
    newBtnDelete.textContent = 'Borrar el último elemento';
    document.body.appendChild(newBtnDelete);

    let newUl = document.createElement('ul');
    document.body.appendChild(newUl);

    newBtn.addEventListener('click', () => {
        let randomNumber = Math.floor(Math.random() * 100) + 1;
        let newLi = document.createElement('li');
        newLi.textContent = randomNumber;
        newUl.appendChild(newLi);
    });

    newBtnDelete.addEventListener('click',(e) => {
        let removeLi = document.querySelectorAll('li');
        newUl.removeChild(removeLi[removeLi.length-1]);
    });
}
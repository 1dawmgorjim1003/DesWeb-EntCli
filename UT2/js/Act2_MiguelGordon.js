"use strict"
{
    let newBtn = document.createElement('button');
    newBtn.textContent = 'Calcular números primos';
    document.body.appendChild(newBtn);
    
    let newBtnUnmark = document.createElement('button');
    newBtnUnmark.textContent = 'Quitar colores a números primos';
    document.body.appendChild(newBtnUnmark);

    let newDiv = document.createElement('div');
    newDiv.className = 'newDiv';
    document.body.appendChild(newDiv);

    let newTable = document.createElement('table');
    newDiv.appendChild(newTable);

    let num = 1;

    for (let row = 0; row < 10; row++) {
        let newTr = document.createElement('tr');
        for (let col = 0; col < 10; col++) {
            let newTd = document.createElement('td');
            newTd.textContent = num;
            newTr.appendChild(newTd);
            num++;
        }
        newTable.appendChild(newTr);
    }

    function isPrime(n) {
        let divisors = 0;
        for (let i = 1; i <= n; i++) {
            if (n % i == 0) {
                divisors++;
            }
        }

        if (divisors == 2) {
            return true;
        }

        return false;
    }
    
    let numbers = newTable.querySelectorAll('td');

    newBtn.addEventListener('click', () => {
        numbers.forEach(td => {
        let value = td.textContent;
        if (isPrime(value)) {
            td.style.backgroundColor = 'yellow';
        }
        });
    });

    newBtnUnmark.addEventListener('click',() => {
        numbers.forEach(td => td.style.removeProperty('background-color'));
    });
}
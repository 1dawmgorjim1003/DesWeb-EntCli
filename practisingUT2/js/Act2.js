"use strict"
{
    let table = document.createElement('table');
    document.body.append(table);

    let button = document.createElement('button');
    button.textContent = 'Calcular numeros primos';
    document.body.append(button);
    
    let button2 = document.createElement('button');
    button2.textContent = 'Volver al estado normal';
    document.body.append(button2);

    let num = 1;
    for (let i = 1; i <= 10; i++) {
        let tr = document.createElement('tr');
        table.appendChild(tr);
        for (let j = 1; j <= 10; j++) {
            let td = document.createElement('td');
            td.textContent = num;
            tr.appendChild(td)
            num++;
        }
    }

    button.addEventListener('click',(e) => {
        let tds = document.querySelectorAll('td');
        tds.forEach(td => {
            if (isPrime(td.textContent)) {
                td.style.backgroundColor = 'yellow';
            }
        })
    });

    button2.addEventListener('click',(e) => {
        let tds = document.querySelectorAll('td');
        tds.forEach(td => {
            td.style.removeProperty('background-color');
        })
    });

    function isPrime(number) {
        let divisors = 0;
        for (let i = 1; i <= number; i++) {
            if (number % i == 0) {
                divisors++;
            }
        }

        if (divisors == 2) {
            return true;
        } 

        return false;
    }
}
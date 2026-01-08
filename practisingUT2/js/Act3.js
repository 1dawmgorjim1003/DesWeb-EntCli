"use strict"
{
    let button1 = document.createElement('button');
    button1.textContent = 'Marcar todos los checks';
    document.body.append(button1);
    
    let button2 = document.createElement('button');
    button2.textContent = 'Desmarcar todos los checks';
    document.body.append(button2);
    
    let button3 = document.createElement('button');
    button3.textContent = 'Ampliar el tamaño de los checks que tienen un value par';
    document.body.append(button3);
    
    let button4 = document.createElement('button');
    button4.textContent = 'Restaurar el tamaño de los checks al valor original';
    document.body.append(button4);

    for (let i = 0; i < 100; i++) {
        let label = document.createElement('label');
        document.body.append(label);

        let span = document.createElement('span');
        span.textContent = i;
        document.body.append(span);

        let input = document.createElement('input');
        input.type = 'checkbox';
        let randomNumber = Math.floor(Math.random() * (200 - 100 + 1) + 100);
        input.value = randomNumber;
        document.body.append(input);

        input.addEventListener('change',(e) => {
            if (input.checked) {
                console.log(`check${input.value} marcado`);
            } else {
                console.log(`check${input.value} desmarcado`);
            }
        });
    }

    button1.addEventListener('click',(e) => {
        let checks = document.querySelectorAll('input');
        checks.forEach(c => {
            c.checked = true;
        })
    });
    
    button2.addEventListener('click',(e) => {
        let checks = document.querySelectorAll('input');
        checks.forEach(c => {
            c.checked = false;
        })
    });
    
    button3.addEventListener('click',(e) => {
        let checks = document.querySelectorAll('input');
        checks.forEach(c => {
            if (c.value % 2 == 0) {
                c.style.transform = 'scale(1.5)';
            }
        });
    });
    
    button4.addEventListener('click',(e) => {
        let checks = document.querySelectorAll('input');
        checks.forEach(c => {
            if (c.value % 2 == 0) {
                c.style.removeProperty('transform');
            }
        });
    });
}
"use strict"
{
    let button = document.createElement('button');
    button.textContent = 'Reaparecer';
    document.body.append(button);

    document.body.append(document.createElement('br'));

    for (let i = 0; i <= 2; i++) {
        let p = document.createElement('p');
        p.textContent = `Párrafo ${i}`;
        p.style.backgroundColor = 'green';
        document.body.append(p);

        p.addEventListener('mouseleave',(e) => {
            p.style.display = 'none';
        })

        p.addEventListener('dblclick',(e) => {
            p.remove();
        })
    };

    button.addEventListener('click',(e) => {
        let ps = document.querySelectorAll('p');
        ps.forEach(p => {
            p.style.display = 'block';
        })
    });
}
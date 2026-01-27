"use strict"
{
    let boton1 = document.createElement("input");
    boton1.setAttribute("type", "button");
    boton1.setAttribute("value", "POST");
    document.body.appendChild(boton1);

    let url = 'http://localhost:3000/members';
    let myRequest = new Request(url);
    boton1.addEventListener('click', e => {
        fetch(myRequest, {
            method: 'POST',
            body: JSON.stringify({
                userId: 3,
                title: "Title 3",
                completed: true
            })
        }).then(r => r.json()).then(j => console.log(j));
    });

    let form = document.querySelector('#idForm1'); 

    form.addEventListener('submit', e => {        
        e.preventDefault();
        const datos = new FormData(form);
        fetch(myRequest, {
            method: 'POST',
            body: JSON.stringify({
                userId: datos.get('userId'),
                title: datos.get('title'),
                completed: true
            })
        }).then(r => r.json()).then(console.log);
        
        // console.log(input1.value);
        // console.log(input2.value);
    });

    const url3="https://formsubmit.co/ajax/mgorjim1003@g.educaand.es";
    const formulario2 = document.querySelector(".cFormulario2");
    formulario2.addEventListener('submit', e => {
        e.preventDefault();
        const datos = new FormData(formulario2);
        fetch(url3, {
            method: 'POST',
            body: datos
        }).then(r => r.json()).then(console.log)
    });
}
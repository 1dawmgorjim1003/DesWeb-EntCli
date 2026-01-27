"use strict"
{
    let url = 'https://jsonplaceholder.typicode.com/todos/10';
    let myRequest = new Request(url);
    fetch(myRequest, {
        method: 'DELETE',
    }).then(r => r.json()).then(console.log);

    let url2 = 'https://jsonplaceholder.typicode.com/todos/11';
    let myRequest2 = new Request(url2);
    fetch(myRequest2, {
        method: 'PATCH',
        body: {
            title: 'New title',
        }
    }).then(r => r.json()).then(console.log);
    
    let url3 = 'https://jsonplaceholder.typicode.com/todos/12';
    let myRequest3 = new Request(url3);
    fetch(myRequest3, {
        method: 'PUT',
        body: {
            title: 'New title2',
        }
    }).then(r => r.json()).then(console.log);

    
    //DELETE
    let boton1 = document.createElement("input");
    boton1.setAttribute("type", "button");
    boton1.setAttribute("value", "DELETE");
    document.body.appendChild(boton1);

    let myValue01 = document.createElement('input');
    document.body.append(myValue01);

    let myUrl1 = 'http://localhost:3000/members';
    boton1.addEventListener('click', e => {
        let url = myUrl1 + '/' + myValue01.value;
        let myRequest = new Request(url);
        fetch(myRequest, {
            method: 'DELETE',
        });
    });

    //PUT
    let boton2 = document.createElement("input");
    boton2.setAttribute("type", "button");
    boton2.setAttribute("value", "PUT");
    document.body.append(document.createElement('br'));
    document.body.append(document.createElement('br'));
    document.body.appendChild(boton2);

    let myValue02 = document.createElement('input');
    document.body.append(myValue02);

    boton2.addEventListener('click', e => {
        let url = myUrl1 + '/' + myValue02.value;
        let myRequest = new Request(url);
        fetch(myRequest, {
            method: 'PUT',
            body: JSON.stringify({
                title: 'Title with PUT',
            })
        }).then(r => r.json()).then(console.log);
    });

    //PATCH
    let boton3 = document.createElement("input");
    boton3.setAttribute("type", "button");
    boton3.setAttribute("value", "PATCH");
    document.body.append(document.createElement('br'));
    document.body.append(document.createElement('br'));
    document.body.appendChild(boton3);

    let myValue03 = document.createElement('input');
    document.body.append(myValue03);

    boton3.addEventListener('click', e => {
        let url = myUrl1 + '/' + myValue03.value;
        let myRequest = new Request(url);
        fetch(myRequest, {
            method: 'PATCH',
            body: JSON.stringify({
                title: 'Title with PATCH',
            })
        }).then(r => r.json()).then(console.log);
    });

}
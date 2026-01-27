"use strict"
{
    let boton1 = document.createElement("input");
    boton1.setAttribute("type", "button");
    boton1.setAttribute("value", "Btn 1: Cargar Recurso");
    document.body.appendChild(boton1);

    let url = 'https://jsonplaceholder.typicode.com/todos';
    let myRequest = new Request(url);
    boton1.addEventListener('click', e => {
        fetch(myRequest).then(r => {
            if (r.ok) {
                return r.json();
            } else {
                throw new Error('La solicitud no ha sido exitosa');
            }
        }).then(j => {
            j.forEach(j => {
                let p = document.createElement('p');
                p.innerHTML = `${j.userId} ${j.id} <strong>${j.title}</strong> ${j.completed}`;
                document.body.appendChild(p);
            });
        }).catch(e => {console.log(`ERROR: ${e}`)});
    });

    let boton2 = document.createElement("input");
    boton2.setAttribute("type", "button");
    boton2.setAttribute("value", "Btn 2: Get 1 JSON");
    document.body.append(document.createElement('br'));
    document.body.append(document.createElement('br'));
    document.body.appendChild(boton2);

    let myValue = document.createElement('input');
    myValue.type = 'number';
    document.body.appendChild(myValue);

    boton2.addEventListener('click', e => {
        let newUrl = url + '/' + myValue.value;
        let myRequest = new Request(newUrl);
        fetch(myRequest).then(r => {
            if (r.ok) {
                return r.json()
            } else {
                throw new Error('La solicitud a la API no es válida');
            }
        }).then(j => {
            let p = document.createElement('p');
            p.innerHTML = `userId: ${j.userId} <br> id: ${j.id} <br> title: ${j.title} <br> completed: ${j.completed}`;
            document.body.append(p);
        }).catch(e => console.log('ERROR: ' + e));
    });

    let url2 = 'http://localhost:3000/members';
    let boton3 = document.createElement("input");
    boton3.setAttribute("type", "button");
    boton3.setAttribute("value", "Btn 3: Get Json-server");
    document.body.append(document.createElement('br'));
    document.body.append(document.createElement('br'));
    document.body.appendChild(boton3);

    let myValue2 = document.createElement('input');
    myValue2.type = 'number';
    document.body.appendChild(myValue2);

    boton3.addEventListener('click', e => {
        let url = url2 + '/' + myValue2.value;
        let myRequest = new Request(url);

        fetch(myRequest).then(r => {
            if (r.ok) { 
                return r.json();
            } else {
                throw new Error('La solicitud no ha sido válida');
            }
        }).then(j => {
            if (Array.isArray(j)) {
                j.forEach(j => {
                    let p = document.createElement('p');
                    p.textContent = j.id + ' - ' + j.userId + ' - ' + j.title + ' - ' + j.completed;
                    document.body.appendChild(p);    
                })
            } else {
                let p = document.createElement('p');
                p.textContent = j.id + ' - ' + j.userId + ' - ' + j.title + ' - ' + j.completed;
                document.body.appendChild(p);
            }
        }).catch(e => {
            console.log('ERROR: ' + e);
        });
    });

    let url3 = 'http://localhost:3000/members';
    let boton4 = document.createElement("input");
    boton4.setAttribute("type", "button");
    boton4.setAttribute("value", "Btn 4: POST DATA");
    document.body.append(document.createElement('br'));
    document.body.append(document.createElement('br'));
    document.body.appendChild(boton4);


    boton4.addEventListener('click', e => {
        let myRequest = new Request(url3);
        // EJEMPLO POST
        fetch(myRequest, {
            method: 'POST',
            body: JSON.stringify({
                userId: 3,
                title: 'My title',
                completed: true
            })
        });
    });


}
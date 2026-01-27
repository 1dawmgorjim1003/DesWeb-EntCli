"use strict"
{
    const divButtons = document.querySelector("#idButtons");
    const divContent = document.querySelector("#idContent");

    let btnTask1 = document.createElement("input");
    btnTask1.setAttribute("type", "button");
    btnTask1.setAttribute("value", "LOAD IMAGES");
    btnTask1.setAttribute("class", "btn btn-info m-2");
    divButtons.appendChild(btnTask1);

    let btnTask2 = document.createElement("input");
    btnTask2.setAttribute("type", "button");
    btnTask2.setAttribute("value", "ADD USER");
    btnTask2.setAttribute("class", "btn btn-info m-2");
    divButtons.appendChild(btnTask2);

    let btnTask3 = document.createElement("input");
    btnTask3.setAttribute("type", "button");
    btnTask3.setAttribute("value", "MODIFY IMAGES");
    btnTask3.setAttribute("class", "btn btn-info m-2");
    divButtons.appendChild(btnTask3);

    let btnTask4 = document.createElement("input");
    btnTask4.setAttribute("type", "button");
    btnTask4.setAttribute("value", "MODIFY NAME");
    btnTask4.setAttribute("class", "btn btn-info m-2");
    divButtons.appendChild(btnTask4);

    let btnTask5 = document.createElement("input");
    btnTask5.setAttribute("type", "button");
    btnTask5.setAttribute("value", "DELETE PROFE");
    btnTask5.setAttribute("class", "btn btn-info m-2");
    divButtons.appendChild(btnTask5);

    let btnTask6 = document.createElement("input");
    btnTask6.setAttribute("type", "button");
    btnTask6.setAttribute("value", "DELETE HERO");
    btnTask6.setAttribute("class", "btn btn-info m-2");
    divButtons.appendChild(btnTask6);

    let btnClean = document.createElement("input");
    btnClean.setAttribute("type", "button");
    btnClean.setAttribute("value", "Clean DOM");
    btnClean.setAttribute("class", "btn btn-danger m-2");
    divButtons.appendChild(btnClean);

    btnClean.onclick = function (e){
        window.location.reload();
    
    };

    let myRequest = new Request ("http://127.0.0.1:3000/usuarios");
    let myRequest2 = new Request ("http://localhost:3000/heroes")
   
    btnTask1.addEventListener("click", function (event){
        fetch(myRequest).then(r => r.json()).then(j => {
            j.forEach(e => {
              let myImg = document.createElement('img');
              myImg.src = e['foto'];
              myImg.width = '150';
              myImg.height = '150';
              document.body.append(myImg);
            });
        });
    });


    btnTask2.addEventListener("click", function (){
       fetch(myRequest,{
            method: 'POST',
            body: JSON.stringify({
               'id': '4',
               'usuario': 'Miguel',
               'email': 'mgorjim1003@g.educaand.es',
               'foto': 'https://cdn-icons-png.flaticon.com/512/9154/9154891.png'
            })}).then(r => {
            if (r.ok) {
                alert('A new user has been added');
            } else {
                alert('There was a problem adding the new user.');
            }
       }).catch(e => console.log(error));
    });

        
    btnTask3.addEventListener("click", function (e) {
        let request = new Request("http://127.0.0.1:3000/usuarios/1");
        async function obtainImage() {
            try {
                const r = await fetch(request);
                const j = await r.json();
                
                const myImg = j['foto'];
                return myImg;            
            } catch (error) {
                console.error("Error al obtener la imagen:", error);
            }
        }

        async function updateData(e, myImg) {
            let request = new Request('http://127.0.0.1:3000/usuarios/' + e['id']);
            console.log(request);
            console.log(myImg);
            const r = await fetch(request, {
                method: 'PATCH',
                body: JSON.stringify({
                    'id': e.id,
                    'usuario': e.usuario,
                    'email': e.email,
                    'foto': myImg
                })
            }).then(r => {
                if (r.ok) {
                    alert("The user's photos has been updated");
                } else {
                    alert("The user's photos can´t be updated");
                }
            });
        }

        async function changeImages() {
            try {
                const myImg = await obtainImage();
                const r = await fetch(myRequest);
                const j = await r.json();
                
                j.forEach(e => {
                    updateData(e, myImg);  
                });
            } catch (error) {
                console.error("Error al obtener la imagen:", error);
            }
        }
        
        changeImages();
    });


    btnTask4.addEventListener("click", function (e) {
        async function obtainName(id) {
            try {
                let request = new Request('http://127.0.0.1:3000/usuarios/' + id);
                const r = await fetch(request);
                const j = await r.json();
                
                return j;            
            } catch (error) {
                console.error("Error al obtener la imagen:", error);
            }
        }
        
        async function modifyName() {
            let request = new Request('http://127.0.0.1:3000/usuarios/4');
            const myUser = await obtainName(4);
            const r = await fetch(request, {
                method: 'PATCH',
                body: JSON.stringify({
                    'id': 4,
                    'usuario': myUser['usuario'] + ' Gordon',
                    'email': myUser['email'],
                    'foto': myUser['foto'],
                })
            }).then(r => {
                if (r.ok) {
                    alert('Your user has been modified');
                } else {
                    alert('Your user can`t be modified');
                }
            });

        }

        modifyName();
    });

    btnTask5.addEventListener("click", function (event){
        let form = document.createElement('form');
        let mySelect = document.createElement('select');
        let input = document.createElement('input');
        input.type = 'submit';
        input.textContent = 'Delete profe';
        document.body.append(form);
        form.append(mySelect);

        fetch(myRequest).then(r => r.json()).then(j => {
            console.log(j);
            j.forEach(e => {
                let myOption = document.createElement('option');
                myOption.value = e['id'];
                myOption.textContent = e['id'];
                mySelect.append(myOption);
            });
            form.append(input);
        });

        form.addEventListener('submit', e => {
            console.log(mySelect.value);
            let request = new Request("http://127.0.0.1:3000/usuarios/" + mySelect.value);
            fetch(request, {
                method: 'DELETE'
            });
        })

    });



     btnTask6.addEventListener("click", function (event){
        let p = document.createElement("p");
        p.textContent = "Not implemented yet";
        p.style.setProperty("color", "red");
        divContent.appendChild(p);
    });
}
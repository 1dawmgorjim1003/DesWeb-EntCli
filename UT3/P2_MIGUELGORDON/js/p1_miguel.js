"use strict"
{
    //BUTTONS
    const divButtons = document.querySelector("#idButtons");
    const divContent = document.querySelector("#idContent");

    let btnTask1 = document.createElement("input");
    btnTask1.setAttribute("type", "button");
    btnTask1.setAttribute("value", "Get");
    btnTask1.setAttribute("class", "btn btn-info m-2");
    divButtons.appendChild(btnTask1);

    let btnTask2 = document.createElement("input");
    btnTask2.setAttribute("type", "button");
    btnTask2.setAttribute("value", "Post");
    btnTask2.setAttribute("class", "btn btn-info m-2");
    divButtons.appendChild(btnTask2);

    let btnTask3 = document.createElement("input");
    btnTask3.setAttribute("type", "button");
    btnTask3.setAttribute("value", "Put");
    btnTask3.setAttribute("class", "btn btn-info m-2");
    divButtons.appendChild(btnTask3);

    let btnTask4 = document.createElement("input");
    btnTask4.setAttribute("type", "button");
    btnTask4.setAttribute("value", "Patch");
    btnTask4.setAttribute("class", "btn btn-info m-2");
    divButtons.appendChild(btnTask4);

    let btnTask5 = document.createElement("input");
    btnTask5.setAttribute("type", "button");
    btnTask5.setAttribute("value", "Delete");
    btnTask5.setAttribute("class", "btn btn-info m-2");
    divButtons.appendChild(btnTask5);

    let btnClean = document.createElement("input");
    btnClean.setAttribute("type", "button");
    btnClean.setAttribute("value", "Clean DOM");
    btnClean.setAttribute("class", "btn btn-danger m-2");
    divButtons.appendChild(btnClean);

    btnClean.onclick = function (e){
        divContent.innerHTML = '';
    };

    btnTask1.addEventListener('click', e => {
        let myRequest = 'http://localhost:3000/members';
        fetch(myRequest).then(r => r.json()).then(j => {
            // console.log(j);
            for (let i of j) {
                // console.log(i);
                let p = document.createElement('p');
                p.innerHTML = `Id: ${i['id']}<br><br>Name: ${i['name']}<br><br>Age: ${i['age']}<br><br>SecretIdentity: ${i['secretIdentity']}<br>`;
                divContent.append(p);
                i['powers'].forEach(e => {
                    let label = document.createElement('label');
                    let check = document.createElement('input');
                    check.type = 'checkbox';
                    check.checked = true;
                    label.innerHTML = e;
                    divContent.append(label);
                    divContent.append(check);
                    divContent.append(document.createElement('br'));
                });
                divContent.append(document.createElement('hr'));   
            }
        })
    })

    btnTask2.addEventListener('click', e => {
        let form = document.createElement('form');
        form.style.backgroundColor = 'cyan';
        divContent.append(form);
        let myArray = [
            ['Id','id'],
            ['Name','name'],
            ['Age','age'],
            ['Secret Identity','secretIdentity'],
            ['Powers (separated by semicolon)','powers']
        ];

        myArray.forEach(i => {
            let label = document.createElement('label');
            label.textContent = i[0] + ':';
            form.append(label);
                        
            if (i[1] == 'powers') {
                let input = document.createElement('textarea');
                input.rows = '2';
                input.cols = '20';
                input.id = i[1];
                form.append(input);
            }  else {
                let input = document.createElement('input');
                input.type = 'text';
                input.id = i[1];
                form.append(input);
            }

            form.append(document.createElement('br'));
            // console.log(i[0]);
        });

        let submit = document.createElement('input');
        submit.type = 'submit';
        submit.value = 'Send data';
        form.append(submit);

        form.addEventListener('submit', e => {
            e.preventDefault();
            let myRequest = 'http://localhost:3000/members';
            let formId = document.getElementById('id').value;
            let formName = document.getElementById('name').value;
            // console.log(name);
            let formAge = document.getElementById('age').value;
            let formSecretIdentity = document.getElementById('secretIdentity').value;
            let formPowers = document.getElementById('powers').value;
            // console.log(powers.split(';'));
            fetch(myRequest, {
                method: 'POST',
                body: JSON.stringify({
                    name: formName,
                    age: formAge,
                    secretIdentity: formSecretIdentity,
                    powers: formPowers.split(';'),
                    id: formId
                })
            });
        })
    })

    btnTask5.addEventListener('click', e => {
        let form = document.createElement('form');
        let select = document.createElement('select');
        let submit = document.createElement('input');
        submit.type = 'submit';
        submit.value = 'Delete member';
        let myRequest = 'http://localhost:3000/members';
        fetch(myRequest).then(r => r.json()).then(j => {
            divContent.append(form);
            form.append(select);
            j.forEach(e => {
                let option = document.createElement('option');
                option.textContent = e['id'];
                option.value = e['id'];
                select.append(option);
            });
            form.append(submit);
        });

        form.addEventListener('submit', e => {
            let myRequest = 'http://localhost:3000/members/' + select.value;
            fetch(myRequest, {
                method: 'DELETE'
            });
        });
    })
}
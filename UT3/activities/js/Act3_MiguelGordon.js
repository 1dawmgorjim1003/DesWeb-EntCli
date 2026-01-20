"use strict"
{
    createForm();
    createTaskList();
    
    function createForm() {
        let myH1 = document.createElement('h1');
        myH1.textContent = 'ToDo List';
        myH1.style.color = 'blue';
        
        let myForm = document.createElement('form');
        
        let myLabel1 = document.createElement('label');
        myLabel1.textContent = `Task's name: `;
        
        let myLabel2 = document.createElement('label');
        myLabel2.textContent = `Task's description: `;

        let myLabel3 = document.createElement('label');
        myLabel3.textContent = 'Priority: ';
        
        let myInput1 = document.createElement('input');
        myInput1.type = 'text';
        myInput1.name = 'myInput1';
        myInput1.required = true;
        myInput1.placeholder = 'ex. task 1';
        
        let myInput2 = document.createElement('input');
        myInput2.type = 'text';
        myInput2.name = 'myInput2';
        myInput2.required = true;
        myInput2.placeholder = 'ex. a wonderful task';

        let mySelect1 = document.createElement('select');
        mySelect1.required = true;

        let myOption1 = document.createElement('option');
        myOption1.textContent = 'One';
        
        let myOption2 = document.createElement('option');
        myOption2.textContent = 'Two';
        
        let myOption3 = document.createElement('option');
        myOption3.textContent = 'Three';

        let mySubmit = document.createElement('input');
        mySubmit.type = 'submit';
        mySubmit.value = 'Add task';

        document.body.append(myH1);
        document.body.append(myForm);
        myForm.append(myLabel1);
        myForm.append(myInput1);
        myForm.append(document.createElement('br'));
        myForm.append(document.createElement('br'));
        myForm.append(myLabel2);
        myForm.append(myInput2);
        myForm.append(document.createElement('br'));
        myForm.append(document.createElement('br'));
        myForm.append(myLabel3);
        myForm.append(mySelect1);
        mySelect1.append(myOption1);
        mySelect1.append(myOption2);
        mySelect1.append(myOption3);
        myForm.append(document.createElement('br'));
        myForm.append(document.createElement('br'));
        myForm.append(mySubmit);

        myForm.addEventListener('submit', e => {
            e.preventDefault();
            let myTask = {
                    name: myInput1.value,
                    description: myInput2.value,
                    priority: mySelect1.value
                };
            if (!localStorage.getItem('tasks')  ) {
                let myTasks = localStorage.getItem('tasks') ? localStorage.getItem('task') : [];
                myTasks.push(myTask);
                localStorage.setItem('tasks',JSON.stringify(myTasks));
            } else {
                let myTasks = JSON.parse(localStorage.getItem('tasks'));
                myTasks.push(myTask);
                localStorage.setItem('tasks',JSON.stringify(myTasks));
            }
            myForm.submit();
        })
    }

    function createTaskList() {
        let myH1 = document.createElement('h1');
        myH1.textContent = 'Stored tasks';
        myH1.style.color = 'blue';

        let myDiv1 = document.createElement('div');

        let myDiv2 = document.createElement('div');
        myDiv2.name = 'priority_one';
        myDiv2.style.color = 'green';

        let myDiv3 = document.createElement('div');
        myDiv3.name = 'priority_two';
        myDiv3.style.color = 'orange';

        let myDiv4 = document.createElement('div');
        myDiv4.name = 'priority_three';
        myDiv4.style.color = 'red';


        document.body.append(myH1);
        document.body.append(myDiv1);
        myDiv1.append(myDiv2);
        myDiv1.append(myDiv3);
        myDiv1.append(myDiv4);

        window.addEventListener('load', e => {
            let myTasks = JSON.parse(localStorage.getItem('tasks'));
            myTasks.forEach(t => {
                let myP = document.createElement('p');
                myP.textContent = `Priority: ${t['priority']} | Task's name: ${t['name']} | Task's description: ${t['description']}`;
                switch (t['priority']) {
                    case 'One':
                        myDiv2.append(myP);
                        break;;
                    case 'Two':
                        myDiv3.append(myP);
                        break;;
                    case 'Three':
                        myDiv4.append(myP);
                        break;;
                }
            });
        })
    }

}
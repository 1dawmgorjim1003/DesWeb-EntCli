/* EXERCISE 1: Using prompt, ask a number N to an user and create in DOM N paragraphs with a 
* random number between 0 and 10 each one.

* EXERCISE 2: Using prompt, ask a number N to an user and create in DOM N H2 elements writing 
* inside a paragraph your name in bold and italic + a random number between 1 and 10.

* EXERCISE 3: Using prompt, ask a number N to an user and create in DOM an 
* unordered list with N random numbers between 1 and 15 for each element in bold.
*/
"use strict"
{
    // excercise1();
    // excercise2();
    excercise3();
    
    function excercise1 () {
        let number = prompt('Introduzca un número: ');
        for(let i = 0; i < number; i++) {
            let newP = document.createElement('p');
            let randNumber = Math.floor(Math.random()*11);
            let adjElem = document.createElement('p');
            adjElem.textContent = randNumber;
            document.body.append(newP);
            newP.insertAdjacentElement('afterbegin',adjElem);
        }
    }

    function excercise2() {
        let number = prompt('Introduzca un número: ');
        for(let i = 0; i < number; i++) {
            let newH2 = document.createElement('h2');
            let randNumber = Math.ceil(Math.random()*10);
            let adjElem = document.createElement('p');
            adjElem.innerHTML = '<strong><i>Miguel Gordon</i></strong> | Número random: ' + randNumber;
            document.body.append(newH2);
            newH2.insertAdjacentElement('afterbegin',adjElem);
        }
    }

    function excercise3() {
        let number = prompt('Introduza un número: ');
        let newUl = document.createElement('ul');
        let newH1 = document.createElement('h1');

        newH1.textContent = 'Lista desordenada | Actividad 3';
        document.body.append(newH1);
        newH1.insertAdjacentElement('afterend',newUl);
        
        for(let i = 0; i < number; i++) {
            let randNumber = Math.floor(Math.random()*15)+1;
            let adjElem = document.createElement('li');
            adjElem.innerHTML = 'Número random: ' + randNumber;
            newUl.insertAdjacentElement('beforeend',adjElem);
        }
    }
}
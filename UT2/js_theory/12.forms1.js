"use strict"
{
    let myForm = document.getElementById('idForm1');
    // console.log(myForm);

    console.log(myForm.nTexto.value); //FOR ACCESSING A VALUE
    console.log(myForm.nUrl.value); //FOR ACCESSING A VALUE
    myForm.nTexto.value = 'today its raining'; //FOR CHANGING A VALUE

    let inputText1 = document.getElementById('idTexto1');
    // inputText1.addEventListener('input',(e) => {
    //     console.log('input');
    //     console.log(e.data); //IT PAINTS THE INDIVIDUAL CHARACTER
    //     console.log(e.target.value); //IT PAINTS ALL THE TEXT OF THE INPUT
    // });

    inputText1.addEventListener('change',(e) => {
        console.log(e.target.value); //IT PAINTS THE VALUE WHEN WE FINISHED WRITTING
    });

    //TEXTAREA
    let textArea1 = document.getElementById('idTextArea1');
    console.log(textArea1.value); //IT PAINTS THE VALUE OF THE TEXT AREA
    textArea1.addEventListener('input',(e) => {
        console.log(e.data); //IT PAINTS THE INDIVIDUAL CHARACTER
        console.log(e.target.value);
    }); //THE SAME AS BEFORE
    
    textArea1.addEventListener('change',(e) => {
        console.log(`change: ${e.target.value}`);
    }); //THE SAME AS BEFORE

    let rButton1 = document.getElementsByName('nrButton1');
    rButton1.forEach(r => {
        console.log(r);
        console.log(r.value);
        console.log(r.previousElementSibling.textContent); //FOR ACCESSING THE TEXT OF THE LABEL
        if (r.checked) {
            console.log(`La opción marcada es ${r.value}`);
        }
    });
    console.log(rButton1.length); //NUMBER OF ELEMENTS WITH THAT NAME ATRRIBUTTE

    for (let r of rButton1) {
        r.addEventListener('change',(e) => {
            if (r.checked) {
                console.log('Se ha marcado: ' + r.value); //FOR REGISTER WHO IS BEING CHOOSED
                console.log('Se ha marcado: ' + r.target.value); //THE SAME
            }
        });
    };

    //Checkbox
    let myChecks = document.getElementsByName('ncheck1');
    // let myChecks = document.querySelectorAll('[name]=ncheck1'); ANOTHER WAY FOR TAKING THE CHECKS
    myChecks.forEach(c => {
        console.log(c); //IT RETURNS THE CODE OF EACH CHECK
        console.log(c.value); // IT RETURNS THE VALUE OF EACH CHECK
        console.log(c.previousElementSibling.textContent); // FOR ACCESSING THE LABEL OF EACH CHECK
        if (c.checked) {
            console.log(`La opción marcada es: ${c.value}`); 
        }
    });
  
    for (let c of myChecks) {
        c.addEventListener('change',(e) => {
            if (c.checked) {
                console.log(`Me como un ${c.value}`);
            } else {
                console.log(`No me como un ${c.value}`);
            }
        });
    }

    let seleccion = document.querySelector('#idLenguaje');
    for (let o of seleccion){
        console.log(o.value); //VALUE OF ATTRIBUTTE VALUE
        console.log(o.textContent); //TEXT'S VALUE
        console.log(seleccion.selectedIndex) //RETURNS THE SELECTED OPTION
    };

    console.log(`-> ${seleccion.options[seleccion.selectedIndex].value}`); //FOR KNOWING THE VALUE OF THE SELECTED INDEX OF A LABEL

    seleccion.addEventListener('change', (e) => {
        console.log(`\nEl índice seleccionado es: ${seleccion.selectedIndex}`);
        console.log(`El valor del elemento seleccionado es: ${seleccion.options[seleccion.selectedIndex].value}`);
        console.log(`El texto del elemento seleccionado es: ${seleccion.options[seleccion.selectedIndex].text}`);
    });

    let dataList = document.querySelector('#idFrutas');
    for (let o of dataList) {
        console.log(o.value);
        console.log(o.text);
        console.log(o.textContent);
    }

    let cajaTexto = document.querySelector('#idFrutas1');
    cajaTexto.addEventListener('change'),(e) => {
        console.log(e.target);;
        console.log(e)
        console.log(e.target.value);
    };
}
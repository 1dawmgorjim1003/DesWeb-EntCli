"use strict"
{
    //EXAMPLE 1
    let myCallBack = () => alert('Hello World');
    setTimeout(myCallBack, 2000);
    
    //EXAMPLE 2
    let myArray = ['Perro','Gato','Elefante'];
    let f = function() {
        for (let a of myArray) {
            console.log(a);
        }
        for (let i = 0; i < 5000; i++) {
            console.log('-');
        }
    }

    function modifyArray(array,callback) {
        array.push('Jirafa');
        callback();
        array.push('Cebra');
    }

    modifyArray(myArray,f);
}
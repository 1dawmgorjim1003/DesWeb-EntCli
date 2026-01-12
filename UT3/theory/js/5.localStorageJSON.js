"use strict"
{
    
    // THIS IS BAD, THE ARRAY IS CONVERTED TO A STRING
    // let myArray = ['Gato','Jirafa','Rinoceronte'];
    // console.log(myArray);
    // localStorage.setItem('array',myArray);
    // let myNewArray = localStorage.getItem('array');
    // console.log(myNewArray);

    //THIS IS GOOD; WE USE JSON FORMAT
    let myArray = ['Gato','Jirafa','Rinoceronte'];
    console.log(myArray);
    localStorage.setItem('array',JSON.stringify(myArray));
    let myNewArray = JSON.parse(localStorage.getItem('array'));
    console.log(myNewArray);
}
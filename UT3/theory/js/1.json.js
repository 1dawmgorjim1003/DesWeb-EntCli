"use strict"
{
    //EJEMPLO 1: string <-> JSON
    console.log("\nEJEMPLO1:");
    let str = "hola caracola";
    console.log(str);
    let textoJSON = JSON.stringify(str); // convierte de string de javascript a JSON
    console.log("string pasado a JSON: ");
    console.log(textoJSON);
    let originalInformation = JSON.parse(textoJSON); // convierte de JSON a string
    console.log("JSON pasado nuevamente a String:");
    console.log(originalInformation);

    // EJEMPLO 2: array <-> JSON
    console.log("\nEJEMPLO 2:");
    let myArray = new Array();
    myArray[0] = "HOLA MUNDO";
    myArray[1] = "HOLA GALAXIA";
    console.log(myArray);
    textoJSON = JSON.stringify(myArray); // array a JSON
    console.log("Array pasado a JSON: ");
    console.log(textoJSON);
 
    //alert (textoJSON);
    originalInformation = JSON.parse(textoJSON);
    console.log("\nJSON pasado nuevamente a Array:");
    console.log(originalInformation);
    //alert(originalInformation);


    //EJEMPLO 3: 
    // nota: repasar antes lo que era un objeto literal (UT1)
    // Objeto literal <-> JSON
    console.log("\nEJEMPLO 3:");
    let miObjetoLiteral1 = {
        nombre: "Juan",
        edad: 23,
        dni: "11222333X"
    };
    console.log(miObjetoLiteral1);
    textoJSON = JSON.stringify(miObjetoLiteral1);
    console.log("ObjetoLiteral pasado a JSON: ");
    console.log(textoJSON);
    //alert (textoJSON);
    originalInformation = JSON.parse(textoJSON);
    console.log("\nJSON pasado nuevamente a Objeto literal:");
    console.log(originalInformation);

    

    //EJEMPLO 4: array de objeto literal <-> JSON
    console.log("\nEJEMPLO 4:");
    miObjetoLiteral1 = {
        nombre: "Juan",
        edad: 23,
        dni: "11222333X"
    };
    let miObjetoLiteral2 = {
        nombre: "Pepi",
        edad: 27,
        dni: "22333444R"
    };
    
    let myArrayDeOL = [miObjetoLiteral1, miObjetoLiteral2];
    console.log(myArrayDeOL);
    textoJSON = JSON.stringify(myArrayDeOL);
    console.log("Array de ObjetoLiteral pasado a JSON: ");
    console.log(textoJSON);
    //alert (textoJSON);
        
    originalInformation = JSON.parse(textoJSON);
    console.log("\nJSON pasado nuevamente a Array de OL:");
    console.log(originalInformation);
    // //alert(originalInformation);
}
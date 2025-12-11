"use strict"
{
    let formulario = document.querySelector('#idFormulario');
    const datos = new FormData(formulario);
    console.log(datos.get('nombre')); //IT PAINTS THE INPUT'S VALUE
    console.log(datos.get('edad'));
    console.log(datos.get('email'));

    formulario.addEventListener('submit',(e) => {
        e.preventDefault();
        const datos = new FormData(formulario);
        datos.append('dni','11223345G');
        datos.append('address','Royal St.');
        console.log(datos);
        for (let campo of datos.values()) {
            console.log(campo); //IT PAINT EACH VALUE OF FORMDATA
        }
        for (let campo of datos.entries()) {
            console.log(campo); //IT PAINT EACH ENTRY OF FORMDATA LIKE AN ARRRAY
        }
        // console.log(formulario);
        // formulario.submit();
    });

    
}
"use strict" 
{
    let cajaRoja = document.querySelector (".cajaRoja"); 
    let cajaAzul = document.querySelector (".cajaAzul"); 
    //cajaRoja.draggable=true; //hacemos el elemento arrastrable 
    let contenedor = document.querySelector (".contenedor");
    let draggedBox = 0;
    const finalMessage = document.getElementById("finalMessage");

    /*dragstart, drag, dragend; LO QUE ARRASTRO TIENE 3 EVENTOS*/
    cajaRoja.addEventListener('dragstart',(e) => {
        // console.log('cajaRoja Dragstart')
    });
    cajaRoja.addEventListener('drag',(e) => {
        // console.log('cajaRoja Drag');
        draggedBox = e.target;
    });
    cajaRoja.addEventListener('dragend',(e) => {
        // console.log('cajaRoja Dragend')
    });
    
    cajaAzul.addEventListener('dragstart',(e) => {
        // console.log('cajaAzul Dragstart')
    });
    cajaAzul.addEventListener('drag',(e) => {
        // console.log('cajaAzul Drag');
        draggedBox = e.target;
    });
    cajaAzul.addEventListener('dragend',(e) => {
        // console.log('cajaAzul Dragend')
    });

    /**
     * FOR THE CONTAINER:
     * dragenter
     * dragleave
     * dragover
     * drop
     */

    contenedor.addEventListener('dragenter',(e) => {
        console.log('contenedor dragenter');
    });
    contenedor.addEventListener('dragleave',(e) => {
        console.log('contenedor dragleave');
        // document.body.insertAdjacentElement("beforeend",draggedBox);
    });
    contenedor.addEventListener('dragover',(e) => {
        console.log('contenedor dragover');
        e.preventDefault();
    });
    contenedor.addEventListener('drop',(e) => {
        console.log('contenedor drop');
        contenedor.insertAdjacentElement("afterbegin",draggedBox);
    });

    document.body.addEventListener('dragover',(e) => {
        e.preventDefault();
    });
    document.body.addEventListener('drop',(e) => {
        if (document.body === e.target) {
            document.body.insertAdjacentElement('afterbegin',draggedBox);
        }
    });
}
"use strict"
{
    //8.events.js
    let myBtn4 = document.querySelector('#idButton4');
    myBtn4.onclick = function () {
        alert('hello 4');
    }
    
    myBtn4.onclick = function () { //IT GETS EXECUTED THE LAST FUNCTION
        alert('hello 4-1');
    }

    let myBtn5 = document.querySelector('#idButton5');
    myBtn5.addEventListener('click',() => alert('Greet 5'));

    myBtn5.addEventListener('click',() => alert('Greet 5-1')); // IT GETS EXECUTED BOTH LISTENERS

    let v = () => alert('Greet 5-2');

    myBtn5.addEventListener('click',v); //THIS ONE GETS EXECUTED TOO

    //Event DOMContentLoaded gets executed without waiting CSS and images
    document.addEventListener('DOMContentLoaded', () => console.log('HTML Cargado')); //IT GETS EXECUTED AT THE BEGINNING

    //Event load gets executed when HTML, CSS and images are loaded.
    window.addEventListener('load',() => console.log('HTML con CSS e Imágenes Cargado')); //IT GETS EXECUTED AFTER CSS AND IMAGES



    //9.eventsObjects.js
    /**
     * LISTA DE EVENTOS:
     *  onfocus: al obtener un foco. 
        onblur: al salir del foco de un elemento.
        onchange: al hacer un cambio en un elemento.
        onclick: al hacer un click en el elemento.
        ondblclick: al hacer doble click en un elemento.
        onkeydown: al pulsar una tecla (sin soltarla).
        onkeyup: al soltar una tecla pulsada.
        onkeypress: al pulsar una tecla.
        onload: al cargarse una página.
        onunload: al descargarse una página (salir de ella).
        onmousedown: al hacer clic de ratón (sin soltarlo).
        onmouseup: al soltar el botón del ratón previamente pulsado.
        onmouseover: al entrar encima de un elemento con el ratón.
        onmouseout: al salir de encima de un elemento con el ratón.
        onsubmit: al enviar los datos de un formulario.
        onreset: al resetear los datos de un formulario.
        onselect: al seleccionar un texto.
        onresize: al modificar el tamaño de la página del navegador. 
     */

    myBtn5.addEventListener('click',(e) => {
        console.log(e);
    })

    let myP1 = document.querySelector("#idP1");
    let myP2 = document.querySelector("#idP2");

     //declarar la funcoin como flecha
    //    myBtn5.addEventListener("click",(evento)=>{
    //      console.log("-click-")
    //      console.log(evento.button); //0 -> he hehco clic con el boton izquierdo
    //      console.log(evento.x + " - " + evento.y); //la coordenada donde estoy pinchando
    //      console.log(evento.clientX + " - " + evento.clientY); //lo mismo
    //      console.log(evento.offsetX + " - " + evento.offsetY);
    //      myP1.innerHTML = "X=" + evento.x + " ; Y=" + evento.y;
    //      myP1.innerHTML += "<br>"+"X=" + evento.offsetX + " ; Y=" + evento.offsetY;
    //   });

    //   myBtn5.addEventListener("mousemove",(evento)=>{ //coordenadas de donde me muevo por el botón
    //      console.log("-mousemove-")
    //      console.log(evento.button); 
    //      console.log(evento.x + " - " + evento.y); //la coordenada donde estoy pinchando
    //      console.log(evento.clientX + " - " + evento.clientY); //lo mismo
    //      console.log(evento.offsetX + " - " + evento.offsetY);

    //      myP1.innerHTML = "X=" + evento.x + " ; Y=" + evento.y;
    //      myP1.innerHTML += "<br>"+"X=" + evento.offsetX + " ; Y=" + evento.offsetY;
    //   });


   //mouse move of the whole html
   document.addEventListener("mousemove",function(evento){
      myP2.innerHTML = "X=" + evento.x + " ; Y=" + evento.y;
      myP2.innerHTML += "<br>"+"X=" + evento.screenX + " ; Y=" + evento.screenY;

   });

   function showMessage(evento){
      console.log(`The event type is ${evento.type}`);
      if(evento.type=="keyup"){
         console.log("Key code: " + evento.code);
         console.log("Key pressed: "  + evento.key);
      }else if(evento.type =="click"){
         console.log(evento.detail); //number of click
         console.log("¿Estba pulsada la tecla CTRL? " + evento.ctrlKey);
         console.log("¿Estba pulsada la tecla ALT? " + evento.altKey);
         console.log("¿Estba pulsada la tecla SHIFT? " + evento.shiftKey);
         console.log(evento.target); //devuelve el elemento, el nodo
         console.log(evento.target.id);
         console.log(evento.target.textContent);
      }else if(evento.type =="dblclick"){
         console.log("Doble click")
      }else if(evento.type =="contextmenu"){
         console.log("Context Menu");
         //que no salga el menú contexual
         evento.preventDefault(); // IT CANCELS THE DEFAULT ACTION OF THE EVENT
      }
   }

   myBtn5.addEventListener("keyup",showMessage);
   myBtn5.addEventListener("click",showMessage);
   myBtn5.addEventListener("dblclick",showMessage);
   myBtn5.addEventListener("contextmenu",showMessage);

   //crear el boton6
   let myBtn6 = document.createElement("button");
   myBtn6.textContent="Greet 6";
   document.body.appendChild(myBtn6);
   //this
   myBtn6.addEventListener("dblclick", function (evento){
      console.clear();
      this.textContent = "Button 6";
      evento.target.textContent = "Button 6";
      this.setAttribute("id","idBtn6");
      evento.target.setAttribute("id","idBtn6");
      console.log(this);
   });

   /** //el tercer parámetro es opcional
    * elemento.addEventListener ("eventoQueCapturo", funcion(), {capture: true, once: true, passive:true})
    */

   let myBtn7 = document.createElement("button");
   myBtn7.textContent="Greet 7";
   document.body.appendChild(myBtn7);
   myBtn7.addEventListener("click", function(eventno){
      alert("Click en btn7");
   },{once:true}); //el evento solo se captura una vez

   let myBtn8 = document.createElement("button");
   myBtn8.textContent="Greet 8";
   document.body.appendChild(myBtn8);
   myBtn8.addEventListener("click",function(evento){
      console.log("Click 1 en btn8");
   });
   myBtn8.addEventListener("click",function(evento){
      console.log("Click 2 en btn8");
   });
   myBtn8.addEventListener("click",function(evento){
      console.log("Click 3 en btn8");
   },{capture:true}); // en el orden el 3 ahora es el primero

   function f (evento){
      // evento.preventDefault();
      console.log("scroll");

   };
   window.addEventListener("scroll",f,{passive:true});
   //pasive true y prevent default no pueden ir juntos; si no no te deja hacer el preventDefault // con el scroll en verdad no funciona aun así, siempre se puede hacer scroll

   
}

//8.events
function greet3() {
    alert('hello 3');
}
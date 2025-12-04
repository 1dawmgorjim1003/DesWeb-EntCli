"use strict"
{
    // 1.documents.js
    console.log(window.document); // IT RETURNS THE FILES'S URL AND HIS DATA
    console.log(document); // IT RETURNS THE FILES'S URL AND HIS DATA

    console.log(document.documentElement); // IT RETURNS THE PROPIERTIES OF THE HTML
    
    console.log(document.head); // IT RETURNS THE HTML'S HEAD CODE
    console.log(document.body); // IT RETURNS THE HTML'S BODY CODE
    console.log(document.doctype);; //IT RETURNS THE HTML'S TYPE
    console.log(document.characterSet);; //IT RETURNS THE HTML'S CHARSET
    console.log(document.title); //IT RETURNS THE HTML'S TITLE
    console.log(document.links); //IT RETURNS THE NUMBER OF THE LINKS OF THE FILE
    console.log(document.images); //IT RETURNS THE NUMBER OF THE IMAGES OF THE FILE
    console.log(document.forms); //IT RETURNS THE NUMBER OF THE FORMS OF  THE FILE
    console.log(document.styleSheets); //IT RETURNS THE NUMBER OF THE STYLE SHEETS OF THE FILE
    console.log(document.scripts); //IT RETURNS THE NUMBER OF THE SCRIPTS OF THE FILE

    /**
     * - Clase HTMLElement: contiene objetos que son elementos de html: body, párrafo, div, ...
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement
     * 
     * - HTMLCollection: es una interfaz que se implementa mediante una clase que es un "array" que contiene elementos html en orden de aparición.
     * En resumen: un casi un array de HTMLElements ,pero no tienen: forEach, map ni reduce.
     * Un HTMLCollection se actualiza de forma automática en cuanto se crea o se elimina un nuevo elemento html en la página.
     * 
     * - Clase Node: es algo más genérico que Element ya que también puede ser un texto o un comentario.
     * https://developer.mozilla.org/en-US/docs/Web/API/Node
     * - NodeList: es casi un array de Node. Trae forEach.
     * 
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection
     * https://lasfi.to/blog/diferencias-entre-node-y-element/
     * 
     */
    let a = document.links; //WE HAVE A HTMLCOLLECTION. IT CAN'T USE MAP, FOREACH OR REDUCE.
    for (let elem of a) {
        console.log(elem); //IT PRINT EACH LINK OF THE CODE
    }
    


    // 2.selectElements.js
    let listaA = document.getElementsByTagName("a");
    console.log(listaA); //IT RETURNS A HTMLCOLLECTION WITH ALL THE ELEMENTS A OF THE CODE
    for (let a of listaA) {
        console.log(a); //IT PAINTS EACH LINK'S CODE
        console.log(a.href); //IT PAINTS EACH URL OF EACH LINK
        console.log(a.textContent); //IT PAINTS EACH TEXT OF EACH LINK
        console.log(a.innerText); //IT PAINTS EACH TEXT OF EACH LINK
    }
    
    let listaUls = document.getElementsByClassName("cListaVehiculos");
    console.log(listaUls); //IT RETURNS ALL THE CODE'S ELEMENTS THAT HAVE THAT CLASS
    for (let ul of listaUls) {
        console.log(ul); //IT PAINT EACH CODE' THAT HAVE THAT CLASS
        console.log(ul.textContent); //IT PAINT EACH TEXT OF EACH ELEMENT
    }

    listaUls = document.getElementsByName("nLista");
    console.log(listaUls); //IT RETURNS A NODELIST WITH ALL THE CODE'S OCURRENCES. WE CAN USE FOREACH WITH NODELIST
    listaUls.forEach(element => {
        console.log(element); // IT RETURN EACH CODE
        console.log(element.getAttribute("name")); // IT RETURN EACH VALUE  OF EACH NAME ATTRIBUTE
        console.log(element.textContent); //IT RETURNS EACH TEXT OF EACH CODE
    })

    let ul = document.getElementById("idAviones");
    console.log(ul); //IT RETURNS ALL THE CODE'S OCURRENCES
    console.log(ul.textContent); //IT RETURNS THE TEXT OF EACH CODE

    let myCar = document.querySelector('#idCoches');
    console.log(myCar); //IT RETURNS THE FIRST CODE'S OCURRENCE.

    let myCharacters = document.querySelector('.cListaPersonajes');
    console.log(myCharacters); //IT RETURNS THE FIRST CODE'S OCURRENCE.
    
    let myP = document.querySelector('p');
    console.log(myP); //IT RETURNS THE FIRST CODE'S OCURRENCE.

    let listaP  = document.querySelectorAll("p"); //NODELIST
    listaP.forEach(p => {
        console.log(p); // IT PAINT EACH CODE OF EACH OCURRENCE
        console.log(p.textContent); // IT PAINT THE TEXT OF EACH OCURRENCE
    })
    listaUls = document.querySelectorAll("ul");
    console.log(listaUls); //IT RETURNS ALL THE CODE'S OCURRENCES
    console.log(listaUls[0]); //LIKE ARRAYS

    listaUls = document.querySelectorAll('[name="nLista"]');
    console.log(listaUls); //IT RETURNS ALL THE CODE'S OCURRENCES
    console.log(listaUls[0]); //LIKE ARRAYS



    // 3.createElements.js
    let c = document.createComment('This is our comment'); //CREATE A COMMENT
    c.isConnected?console.log("Is connected"):console.log("Is not connected");
    document.body.append(c); //INSERT THE COMMENT INTO THE BODY'S CODE

    let t = document.createTextNode("my text has been created");
    document.body.append(t); //INSERT THE COMMENT INTO THE BODY'S CODE AT THE END
    let myP2 = document.querySelector("p");
    myP2.textContent = t.textContent; // REPLACING AN OLD VALUE FOR A NEWE ONE

    let t2 = t.cloneNode(); // TRUE ALSO CLONE CHILDS
    t2.textContent = "my text 2 has been created";
    document.body.append(t2);

    let newDiv = document.createElement('div'); //HTMLElement
    newDiv.textContent='Hola';
    let newDiv2 = newDiv; // COPY BY REFERENCE
    newDiv2.textContent = 'adiós';
    console.log(newDiv);
    console.log(newDiv2);

    let newImg = document.createElement('img');
    let newH1 = document.createElement('h1');
    let newH2 = document.createElement('h2');
    let newTextH2 = document.createTextNode('H2 text');
    newH2.append(newTextH2); //INSERT A TEXTNODE INTO A ELEMENT
    document.body.append(newH2); // PAINT IT ON THE DOCUMENT
    newH2.textContent='New H2 text'; // WITH ONLY THAT, IT REPLACES THE TEXT
    let br = document.createElement('br');
    newH2.append(br);
    newH2.append('Me presento soy: ');
    newH2.append(newH1);
    newH1.append('h1 text');
    newH2.append(document.createTextNode(' General y Coronel')); // IT CONCATENATE TEXT. IT INSERTS ALL TYPES OF DATA
    let a3 = newH2.appendChild(newTextH2); //IT NOT INSERT STRINGS
    console.log(a3); // IT RETURNS THE TEXT

    /**
     * https://developer.mozilla.org/en-US/docs/Web/API/Element/append
     * append vs appendChild:
     * 1) append inserta un Node o un String (uno o varios a la vez, dados en un array)
     * 1) appendChild solo inserta Node (1 a la vez)
     * 2) append no devuelve nada
     * 2) y appendChild devuelve el Node insertado
     */

    /**
     * Node es la clase base para todos los objetos del documento, 
     * y HTMLElement hereda de Node para representar elementos HTML específicos. 
     * Esto significa que cada elemento HTML es un Node, pero no todos los Node 
     * son elementos HTML; un Node también puede ser un texto o un comentario. 
     * Esta relación permite que todos los elementos HTML hereden la funcionalidad 
     * de Node
     */
    


    //4.CreateElementsWhitAttributes.js
    let newDiv4 = document.createElement('div');
    newDiv4.id = 'id1';
    newDiv4.style = 'color: red';
    newDiv4.className = 'cDiv1';
    newDiv4.className = 'cDiv2'; //IT TAKES ONLY THE LAST CLASS
    newDiv.classList.add('cDiv3'); // class="cDiv2 cDiv3""
    document.body.append(newDiv4); //CREATING SOME ELEMENTS

    let newP = document.createElement('p');
    // Atributos de un elemento HTML
    /**
     * setAttribute (String attr, valor) : añade o cambiar el valor del atributo
     * boolean hasAttribute (String attr) : Indica si el Element tiene el atributo sttr
     * boolean hasAttributes () : indica si el Element tiene atributos HTML o no
     * Array getAttributeNames () : devuelve un array de String con los atributos del Element
     * String getAttribute (String attr)
     * removeAttribute (String attr)
     * 
     * Node getAttributeNode (String attr) : igual que getAttribute pero devuelve el Node
     * Node removeAttributeNode (String attr) : igual que removeAttribute pero devuelve el Node borrado
     * Node setAttributeNode (String attr, valor) : igual que setAttribute pero devuelve el Node al que le acabas de insertar el atributo
     * 
     */

    newP.setAttribute('name','nDiv1');
    newP.setAttribute('id','idParrafo1');
    newP.setAttribute('class','cParrafo1');
    newP.setAttribute('kk','peste');
    console.log(newP); //IT PAINTS ALL. WE CAN INVENT VARS
    console.log(newP.hasAttribute('name')); //true
    console.log(newP.getAttributeNames()); //IT RETURNS AN ARRAY WITH ALL THE ATRIBUTTES OF newP
    newP.setAttribute('style','color: orange');
    console.log(newP.getAttributeNames());
    newP.removeAttribute('style');
    console.log(newP.getAttributeNames());

    let attr1 = newP.getAttribute('id'); 
    let attr2 = newP.getAttributeNode('id');
    console.log(attr1); //ID's text
    console.log(attr2); // ID's code

    newP.appendChild(document.createTextNode('text of P'));
    newDiv4.appendChild(newP);

    console.log(newDiv4.isConnected); //true, is inserted
    console.log(newP.isConnected); //true, is inserted

    let myA = document.querySelector('.enlace');
    console.log(myA.getAttribute('data-id'));
    myA.setAttribute('data-description','DOM'); //REPLACING THE VALUE OF AN ATTRIBUTE

    //STYLE --> TAKING SOME VALUES (ATTR)
    console.log(myA.style);
    console.log(myA.style.color);
    console.log(myA.style.backgroundColor);
    console.log(window.getComputedStyle(myA)); // IT RETURNS CSS'S PROPERTIES
    myA.style.backgroundColor = 'orange';
    myA.style.setProperty("background-color","green"); //IT CHANGES THE PROPERTY

    myA.style.textDecoration = 'line-through';
    myA.style.setProperty('text-decoration', 'none');

    // https://www.w3schools.com/cssref/index.php

    console.log(myA.dataset); //IT RETURN ALL THE INVENTED ATTRS (THEY START WITH DATA-)

    //MONDAY 17/11
    console.log(myA.dataset.id); // IT RETURNS THE ID, IN THIS CASE "1"
    console.log(myA.dataset.description); // IT RETURNS THE ID, IN THIS CASE "DOM"



    //classList --> add, remove, toggle, item(pos), contains, replace
    let myH3 = document.querySelector('.cHache3');
    console.log(myH3); //IT RETURNS THE CODE OF THE ELEMENT WITH THE CLASS ".cHache3"
    myH3.classList.add('cUno');
    myH3.classList.add('cDos');
    console.log(myH3.classList); // IT ADDS MORE CLASSES TO THAT ELEMENT
    myH3.classList.remove('cImportante');
    console.log(myH3.classList); // IT REMOVES THE CLASS OF THE ELEMENT
    myH3.classList.toggle('cInfo'); // IT ADDS IT BECAUSE IT DOESN'T EXIST
    console.log(myH3.classList);
    myH3.classList.toggle('cInfo'); // IT DELETES IT BECAUSE IT EXISTS
    console.log(myH3.classList);
    console.log(myH3.classList.item(2)); // IT RETURNS THE CLASS AT THAT POSITION, IN THIS CASE "cUno"
    console.log(myH3.classList.contains('cImportante')); // FALSE. IT REVIEWS THE EXISTANCE OF A CLASS
    myH3.classList.replace('cUno','CTres'); // IT REPLACE A CLASS PER ANOTHER CLASS
    console.log(myH3.classList);



    //5.insertElements.js
    /**
     * PROPERTIES FOR REPLACE OR CREATE TEXTS OR SMALL ELEMENTS
     * textContent --> text without format
     * innerHTML --> text with format
     * outerHTML --> text with format plus HTML label
     * 
     */
    let myDiv1 = document.getElementById('idDiv1');
    console.log(myDiv1); // IT RETURNS THE CODE OF THE ELEMENT WITH THAT ID
    myDiv1.style.setProperty('background-color','red');
    myDiv1.textContent = 'Contenido del DIV sin formato';
    myDiv1.textContent += ' hola caracola'; //IT CHANGES THE TEXT OF THE DIV ALREADY
    let myDiv2 = document.getElementsByClassName('cDiv2')[0];
    console.log(myDiv2); // IT TAKES ONLY THE FIRST ELEMENT OF ALL ELEMENTS WITH THAT CLASS
    myDiv2.textContent = 'hola a todas y a todos'; // IT CHANGES THE TEXT ALREADY
    myDiv2.innerHTML = 'hola a <strong>todas</strong> y a todos'; // IT CHANGES THE TEXT ALREADY WITH GOOD FORMAT
    myDiv2.innerHTML += ', buenas <i>tardes</i>'; // IT CHANGES THE TEXT ALREADY WITH GOOD FORMAT

    console.log(myDiv2.outerHTML); // IT RETURNS THE CODE WITH USED LABELS, IN THIS CASE "STRONG" AND "I"

    /**
     * append --> ADDS A SON (NODE OR STRING) PLUS DONT RETURNS ANYTHING
     * appendChild --> ADDS SON (NODE) PLUS IT RETURNS THE NODE INSERTED
     */
    const img = document.createElement("img");
    img.src = "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg";
    img.style.setProperty("width", "40px");
    img.alt ="logo JS";
    let i = document.body.appendChild(img);
    console.log(i); // IT RETURNS THE CODE OF THE ELEMENT "img"

    const miDiv3 = document.createElement("div"); // Me invento miDiv3 para luego colocar miDiv4 alrededor de miDiv3 (más abajo)
    miDiv3.textContent = "Esto es mi Div3 insertado con javascript";
    miDiv3.setAttribute("id", "idDiv3");
    console.log(miDiv3);
    document.body.append(miDiv3);

    /**
     *      insertAdjacent: 3 versiones:
     * insertAdjacentElement (insertPosition, HTMLElement) : para insertar un Element
     * insertAdjacentHTML(insertPosition, string) : para insertar código HTML (similar a innerHTML)
     * insertAdjacentText (inserPosition, string) : para insertar texto (similar a textContent)
     * 
     * llevan 2 parámetros:
     * parámetro1: posición donde va insertado el contenido.
     *  beforebegin: el contenido se inserta ANTES de la etiqueta HTML de apertura
     *  afterbegin: el contenido se inserta DENTRO de la etiqueta HTML, antes de su primer hijo
     *  beforeend: el contenido se inserta DENTRO de la etiqueta HTML, después de su último hijo (=appendChild())
     *  afterend: el contenido se inserta DESPUÉS de la etiqueta HTML de cierre
     * parámetro2: el contenido que se inserta
     */
    
    /**
     *  <!-- beforebegin -->
     *  <p1> 
     *     <!-- afterbegin -->
     *     texto
     *     <!-- beforeend -->
     *  </p1>
     *  <!-- afterend -->
    */

    let myDiv4 = document.createElement('div');
    myDiv4.setAttribute('id','idDiv4');
    myDiv4.textContent = 'Contenido de Div4';


    miDiv3.setAttribute('style','background-color: orange');
    // miDiv3.style.setProperty('backgroubd-color','orange');
    // miDiv3.style.backgroundColor = 'orange';

    miDiv3.insertAdjacentElement('beforebegin',myDiv4); // (FOR PUT ELEMENTS IN THE CODE) | RESULT:
    /**
     *  myDiv4
     *  <div> (miDiv3)
     *     <!-- afterbegin -->
     *     texto
     *     <!-- beforeend -->
     *  </div>
     *  <!-- afterend -->
    */
    miDiv3.insertAdjacentElement('afterbegin',myDiv4); // RESULT:
    /**
     *  <!-- beforebegin -->
     *  <div> (miDiv3)
     *     myDiv4
     *     texto
     *     <!-- beforeend -->
     *  </div>
     *  <!-- afterend -->
    */

    miDiv3.insertAdjacentHTML('beforebegin','<h1>Hola</h1>'); // (FOR PUT NEW CODE IN ORIGINAL CODE) | RESULT:
    /**
     *  Hola
     *  <div> (miDiv3)
     *     myDiv4  <!-- afterbegin -->
     *     texto
     *     <!-- beforeend -->
     *  </div>
     *  <!-- afterend -->
    */
    
    

    //6.deleteElements.js
    /**
     * LOS NODOS REALMENTE NO SE ELIMINAN, SINO QUE SE DESCONECTAN DEL DOM
     * A partir de la página 20.
     * remove ()
     * removeChild (nodoHijo)
     * replaceChild(nodoNuevo,nodoAntiguo)
     */
    let myDiv2_6 = document.querySelector('#idDiv2');
    myDiv2_6.isConnected // true
    myDiv2_6.remove(); // IT DELETES THE ELEMENT
    myDiv2_6.isConnected // false
    // let removedDiv = myDiv2_6.removeChild(); // IT RETURNS THE REMOVED ELEMENT
    // myDiv2_6.replace(p1,p2); // IT REPLACE THE FIRST ELEMENT FOR THE SECOND ONE
    
    
    
    //7.navigate.js
    /**
     * PARA NAVEGAR POR ELEMENTOS
     * children : devuelve un array de HTMLCollection con los elementos hijo del elemento en cuestión
     * parentElement : devuelve el elemento padre o null si no tiene 
     * firstElementChild = children[0] = primer hijo
     * lastElementChild = children[ultimo]  = children[children.length-1] = último hijo
     * previousElementSibling : devuelve el elemento hermano previo (null si no tiene)
     * nextElementSibling : devuelve el siguiente elemento hermano (null si no tiene)
     *  
     */
    console.log(document.body.children); //IT RETURNS AN ARRAY WITH ALL THE ELEMENT CHILDS OF THE BODY
    console.log(document.body.children.length); //IT RETURNS THE HUMBER OF ELEMENT CHILDS OF THE BODY
    for(let element of document.body.children) {
        console.log(element); //IT PAINT THE CODE OF EACH CHILDREN
    }
    console.log(document.body.parentElement); //IT RETURNS THE DAD'S CODE OF BODY (HTML)
    
    let listaAviones = document.querySelector('#idAviones');
    let padreAviones = listaAviones.parentElement;
    console.log(padreAviones); //BODY'S CODE

    console.log(document.body.firstElementChild); //IT RETURNS THE CODE OF THE FIRST CHILD
    console.log(document.body.firstElementChild.textContent); //IT RETURNS THE TEXT OF THE FIRST CHILD
    console.log(document.body.firstElementChild.firstElementChild); //NULL, IT DOESN'T HAVE CHILD ELEMENTS
    console.log(document.body.children[0]); //IT RETURNS THE CODE OF THE FIRST CHILD
    console.log(document.body.lastElementChild); //IT RETURNS THE CODE OF THE LAST CHILD
    console.log(document.body.children[document.body.children.length-1]); //IT RETURNS THE CODE OF THE LAST CHILD

    console.log(document.body.previousElementSibling); //IT RETURNS THE BROTHER BEFORE BODY (HEAD)
    console.log(document.body.nextElementSibling); //IT RETURNS THE BROTHER AFTER BODY (NULL)
    
    /**
     * PARA NAVEGAR POR LOS NODOS
     * childNodes : devuelve un array de NodeList con los nodos hijos del elemento en cuestión
     * parentElement : devuelve el nodo padre o null si no tiene 
     * firstChild : devuelve el primer nodo hijo
     * lastChild : devuelve el último nodo hijo
     * previousSibling : devuelve el anterior nodo hermano
     * nextSibling : devuelve el siguiente nodo hermano
     */
    console.log(document.body.childNodes); //IT RETURNS ALL THE CHILDRENS OF THE BODY
    console.log(document.body.childNodes.length) // IT RETURNS THE HUMBER OF ALL THE CHILDRENS OF THE BODY
    document.body.childNodes.forEach(elem => {
        console.log(elem); // IT RETURN THE CODE OF EACH CHILD
    });
    console.log(document.body.parentNode); //IT RETURNS THE NODE PARENT OF BODY (HTML)
    let miListaCiclomotores = document.querySelector('#idCiclomotores');
    console.log(miListaCiclomotores.parentNode); //IT RETURNS THE PARENT NODE OF THE LIST
    console.log(document.body.childNodes[1]); //IT RETURNS THE SECOND CHILD NODE OF THE BODY
    console.log(document.body.lastChild); //IT RETURNS THE LAST CHILD NODE OF THE BODY
    console.log(document.body.childNodes[document.body.childNodes.length-1]); //THE SAME
    console.log(document.body.childNodes[5].lastChild); //IT RETURNS THE LAST NODE OF THE 5 NODE OF THE BODY
    let elem = document.querySelector('#idApp');
    let elem2 = elem.querySelector('p');;
    console.log(elem2.previousSibling); // IT RETURNS THE BROTHER BEFORE OF THE ELEMENT P INSIDE OF THE ELEMENT DIV (hermano anterior)
    console.log(elem2.nextSibling); // IT RETURNS THE BROTHER AFTER OF THE ELEMENT P INSIDE OF THE ELEMENT DIV (hermano posterior)

}
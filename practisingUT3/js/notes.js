"use strict"
{
    //PREGUNTAR CALLBACK, COOKIES
    
    let myJson = JSON.stringify("string") //PASAR UN STRING/ARRAY A JSON
    JSON.parse(myJson); //PASAR UN JSON A STRING/ARRAY

    //SABER USAR LAS COOKIES
    function setCookie (nombreCookie, valorCookie, diasExpiracion) {
        let fechaActual = new Date();
        fechaActual.setTime(fechaActual.getTime() + (diasExpiracion*24*60*60*1000)); // los días de expiración los pasa a milisegundos
        let expires = "expires="+fechaActual.toUTCString();
        let nuevaCookie = nombreCookie + "=" + valorCookie + ";" + expires + ";path=/";
        //console.log(nuevaCookie);
        // FORMATO: "variable=valor;expires=fecha_expiración;path=/"
        // document.cookie =  "username=John Smith; expires=Thu, 18 Dec 2026 12:00:00 UTC; path=/";
        document.cookie = nuevaCookie; // Para almacenar la cookie en el navegador
    }

    function getCookie(cname) { 
        let name = cname + "=";
        let ca = document.cookie.split(';'); // convierte el string con todas las cookies que tenga la página (están separadas por ;) a [] con todas las cookies
        //console.log(ca); // [cookie1=valor1; cookie2=valor2; ...]
        for(let i = 0; i < ca.length; i++) { // tiene 3 elementos ['nombre=Federico', 'edad=34', 'altura=178']
            let c = ca[i];
            //console.log(c); // escribe el valor de la cookie
            while (c.charAt(0) == ' ') { // eliminar espacios que pueda haber por delante
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) { // comprueba si es la cookie buscada
                return c.substring(name.length, c.length); // devuelve el valor
            }
        }
        return "";
    }

    function deleteCookie(cname) { 
        document.cookie = cname+'=; expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/'; 
    }
    
    localStorage.setItem('nombre','Miguel'); //GUARDAR UNA VARIABLE EN LOCALSTORAGE
    localStorage.getItem('nombre'); //COGER UNA VARIABLE DE LOCALSTORAGE
    localStorage.removeItem('nombre'); //ELIMINAR UNA VARIABLE DE LOCALSTORAGE
    localStorage.clear(); //ELIMINAR TODAS LAS VARIABLES DE LOCALSTORAGE
    
    sessionStorage.setItem('nombre','Miguel'); //GUARDAR UNA VARIABLE EN SESSIONSTORAGE
    sessionStorage.getItem('nombre'); //COGER UNA VARIABLE DE SESSIONSTORAGE
    sessionStorage.removeItem('nombre'); //ELIMINAR UNA VARIABLE DE SESSIONSTORAGE
    sessionStorage.clear(); //ELIMINAR TODAS LAS VARIABLES DE SESSIONSTORAGE

    //PARA GUARDAR UN ARRAY EN LOCAL/SESSIONSTORAGE, HAY QUE CONVERTIRLO A JSON, PARA RECUPERARLO HAY QUE CONVERTIRLO A ARRAY

    //PETICIONES ASÍNCRONAS. MANDAS UNA SOLICITUD, DEVUELVE UNA RESPUESTA Y ESTA RESPUESTA PUEDE SER UN JSON SI ES VALIDA. SE USA PARA QUE EL CODIGO SIGA FUNCIONANDO MIENTRAS SE ESPERAN DATOS DE LA PETICIÓN
    
    //CON FETCH
    fetch("https://jsonplaceholder.typicode.com/posts").then(respuesta => {
        respuesta.status; //NUMERO DE RESPUESTA
        respuesta.statusText //TEXTO
        respuesta.ok //TRUE o FALSE
        respuesta.json() /*PASARLO A JSON*/
    }).then(json => console.log(json)).catch(e => console.log(e));
    
    fetch("../resources/texto.txt").then(respuesta => respuesta.text() /*PASARLO A TEXTO*/).then(text => console.log(text));
    
    fetch("../resources/img.").then(respuesta => respuesta.blob() /*PASARLO A IMAGEN*/).then(blob => console.log(blob));
    
    //CON ASYNC/AWAIT
    async function seeData() {
        try {
            const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts");
            const json = await respuesta.json();

            console.log(json);
        } catch (e) {
            console.log(error)
        }
    }

    seeData()

    //FUNCIONES PARA URLS
    let objectUrl = URL.createObjectURL(myBlob); //GUARDA UNA URL
    URL.revokeObjectURL(objectUrl); //ELIMINAR UNA URL

    //USO DE CORS ANYWHERE; PODER ACCEDER A IMÁGENES DE LA WEB QUE ESTÁN PROTEGIDAS
    const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';

    //AÑADIR EJEMPLO POST, PUT, PATCH, DELETE
}
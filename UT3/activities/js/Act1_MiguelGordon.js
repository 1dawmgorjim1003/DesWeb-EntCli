"use strict"
{
    let myH1 = document.createElement('h1');
    myH1.textContent = 'Contador de visitas';
    myH1.style.color = 'blue';
    
    let myH3 = document.createElement('h3');
    myH3.textContent = `Número de visita: ${getCookie('visits-counter') ? getCookie('visits-counter') : 1}`;

    let myButton = document.createElement('button');
    myButton.textContent = 'Borrar cookie';

    document.body.append(myH1);
    document.body.append(myH3);
    document.body.append(myButton);

    if (!getCookie('visits-counter')) {
        setCookie('visits-counter',1,7);
    } else {
        let visitsNumber = Number(getCookie('visits-counter'));
        visitsNumber++;
        setCookie('visits-counter',visitsNumber,7);
    }

    myButton.addEventListener('click', e => {
        deleteCookie('visits-counter');
        location.reload();
    })

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
}
"use strict"
{
    // FORMATO: "variable=valor;expires=fecha_expiración;path=/"
    // EJEMPLO: document.cookie =  "username=John Smith; expires=Thu, 18 Dec 2026 12:00:00 UTC; path=/";

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

    let miH2 = document.createElement("h2");

    // EJEMPLO 1:
    console.log("Ejemplo1:");
    setCookie("edad", 17, 10); // nombre de la cookie, valor de la cookie y días de expiración
    setCookie("altura", 174, 12);
    console.log(document.cookie); // [edad=17; altura=174]

    // EJEMPLO 2:
    console.log("\nEjemplo2");
    console.log(getCookie("edad"));
    console.log(getCookie("altura"));
    console.log(getCookie("colorPelo")); // "", porque no existe

    // EJEMPLO 3: ejercicio de clase
    /**
     ** Usando una cookie llamada username, al cargar la página, verificar:
     * - si la cookie no existe:
     *    - Indicarle al usuario que no está identificado.
     *    - Mostrarle un prompt para que introduzca su nombre de usuario.
     *    - Controlar si deja el prompt en blanco y hace click en cancelar.
     * - si la cookie ya existe:
     *    - Saludar al usuario escribiendo: ¡Bienvenido de nuevo, username!
     * 
     * NOTA: excepto el prompt para pedirle los datos al usuario, todo debe escribirse en el DOM
     *  usando los elementos HTML que creas necesarios.
     * NOTA2: luego, eliminar la cookie mediante un botón en el DOM y recargar la página para probar.
     */
    // guardarElNombre(); // esto mandarlo como ejercicio.

    function guardarElNombre () { 
        let user = getCookie("username");
        if (user != "") {
            //alert("Bienvenido de nuevo, " + user);
            miH2.textContent="Bienvenido de nuevo, " + user;
            
        } else {
            miH2.textContent="Bienvenido, identifícate.";
            document.body.append(miH2);
            user = prompt("Por favor, introduce tu nombre:", "");
            if (user !=="" && user !==null) {
                setCookie("username", user, 7);
                miH2.textContent="Bienvenido de nuevo, " + user;
            } else {
                miH2.textContent="Bienvenido, identifícate.";
            }
        }
        document.body.append(miH2);
        
    }

    saveBackgroundColor();

    // VERSION WITHOUT CHECKING VALUES

    function saveBackgroundColor () { 
        if (!getCookie('backgroundColor')) {
            let firstColor = prompt('Introduce el primer número de color RGB (0-255): ');
            let secondColor = prompt('Introduce el segundo número de color RGB (0-255): ');
            let thirdColor = prompt('Introduce el segundo número de color RGB (0-255): ');
            
            document.body.style.backgroundColor = `rgb(${firstColor},${secondColor},${thirdColor})`;

            setCookie('backgroundColor',document.body.style.backgroundColor,7);
        } else {
            document.body.style.backgroundColor = getCookie('backgroundColor');
        }
    }

    // BETTER VERSION; WE CHECK THE VALUES.
    //
    //  function saveBackgroundColor () { 
    //     if (!getCookie('backgroundColor')) {
    //         let firstColor = prompt('Introduce el primer número de color RGB (0-255): ');
    //         let secondColor = prompt('Introduce el segundo número de color RGB (0-255): ');
    //         let thirdColor = prompt('Introduce el segundo número de color RGB (0-255): ');
            
    //         let myColors = new Array();
    //         myColors[0] = firstColor;
    //         myColors[1] = secondColor;
    //         myColors[2] = thirdColor;

    //         let cont = 0;
    //         myColors.forEach( c => {
    //             if (c !== "" && c !== null) {
    //                 if (c >= 0 && c < 256) {
    //                     cont++;
    //                 }
    //             }
    //         });

    //         if (cont == 3) {
    //             document.body.style.backgroundColor = `rgb(${firstColor},${secondColor},${thirdColor})`;
    //             setCookie('backgroundColor',document.body.style.backgroundColor,7);
    //         } else {
    //             alert('Se han introducido números de color RGB inválidos');
    //         }

    //     } else {
    //         document.body.style.backgroundColor = getCookie('backgroundColor');
    //     }
    // }
}
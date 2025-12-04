"use strict"
{
    console.log(window.location.href); //IT RETURNS ALL THE ROUTE OF THE FILE
    console.log(window.location.host); //IT RETURNS THE IP WITH THE PORT
    console.log(window.location.hostname); // IT RETURNS THE IP
    console.log(window.location.port); //IT RETURNS THE PORT

    console.log(window.history); //IT RETURNS THE HISTORY OF THAT PAGE
    // window.history.back(); //FOR GOING TO THE LAST PAGE
    // window.history.go(0); //FOR REFRESH THE PAGE
    // window.history.forward(); //FOR GOING TO THE NEXT PAGE

    function verDatosGeolocalizacion(pos) {
        const crd = pos.coords;
      
        console.log("Tu ubicación actual es:");
        console.log(`Latitud : ${crd.latitude}`);
        console.log(`Longitud: ${crd.longitude}`);
        console.log(`Más o menos ${crd.accuracy} metros.`);
    };

    function error(err) {
        console.error("ERROR: "+err.code + ": " + err.message);
    };

    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };
    
    let btnGeo = document.querySelector('#idGeo');
    btnGeo.addEventListener('click',(e) => {
        window.navigator.geolocation.getCurrentPosition(verDatosGeolocalizacion,error,options); //IT RETURNS OUR LOCATION DATA OR AN ERROR IF WE'D A PROBLEM
    });

    window.addEventListener("resize", (e) => {
            console.clear();
            console.log("********** Evento Resize **********");
            console.log(window.innerWidth);// ancho de la parte interna visible
            console.log(window.innerHeight);// altura de la parte interna visible. Obtiene la altura 
            // del area de contenido del navegador incluyendo, si es interpretado, la barra de deslizado
            console.log(window.outerWidth);  // ancho del navegador
            console.log(window.outerHeight); // altura del navegador
            console.log(e);
    });

    window.addEventListener("scroll", (e) => {
            console.clear();
            console.log("********** Evento Scroll ***********");
            console.log(window.scrollX); // número de pixels que el documento ha sido desplazado horizontalmente
            console.log(window.scrollY); // número de pixels que el documento ha sido desplazado verticalmente
            console.log(e);
    });

    window.addEventListener("DOMContentLoaded", (e) => {    // cuando acaba de cargar el html (sin imágenes, css,...)
            console.log("********** Evento DOMContentLoaded **********");
            console.log(window.screenX);
            console.log(window.screenY);
            console.log(e);
    });

    window.addEventListener("load", (e) => { // cuando se carga por completo la página (html, css y js)
            console.log("********** Evento Load ***********");
            console.log(window.screenX); // distancia en X desde el borde izquierdo de la pantalla del PC al navegador. La esquina superior izquierda tiene la coordenada (0,0)
            console.log(window.screenY);// distancia en Y desde el borde superior de la pantalla del PC al navegador. La esquina superior izquierda tiene la coordenada (0,0)
    
            console.log(e);
    });
}
"use strict"
{
   /*Ejercicio 1: Entender qué devuelve fetch
    *fetch no devuelve los datos directamente.
    *Preguntas:
    *1. ¿Qué se muestra por consola?
    *2. ¿Son los datos?
    *3. ¿Por qué pone Promise?
    *Respuesta: fetch devuelve una Promesa, no los datos.
    */
    const resultado = fetch("https://jsonplaceholder.typicode.com/posts");
    // console.log(resultado);
    
    /**Ejercicio 2: Primer .then() (Response)
    *Entender qué es un Response.
    *Preguntas:
    *4. ¿Qué tipo de objeto es response?
    *5. ¿Aparecen ya los datos?
    *6. ¿Ves el status?
    *Idea clave: Aquí llega la respuesta del servidor, no los datos finales
    * 
    */
    fetch("https://jsonplaceholder.typicode.com/posts").then(response => {
        // console.log(response);
    });

    /**Ejercicio 3: Leer el JSON
    *Ver que response.json() devuelve otra promesa.
    *Preguntas:
    *1. ¿Qué tipo de dato es datos?
    *2. ¿Cuántos elementos tiene?
    *3. ¿Por qué hay dos .then()?
    *Idea clave: Leer el cuerpo de la respuesta también lleva tiempo
    */
    fetch("https://jsonplaceholder.typicode.com/posts").then(response => response.json()).then(datos => {
        // console.log(datos);
        // console.log(datos[3].body); //WE CAN SEE SPECIFIC DATA
    });

    /**Ejercicio 4: Mostrar solo un dato
    *Trabajar con los datos recibidos
    *Preguntas:
    *1. ¿Qué se muestra por consola?
    *2. ¿Qué otras propiedades tiene post?
    */
    fetch("https://jsonplaceholder.typicode.com/posts/1").then(response => response.json()).then(post => {
        // console.log(post.title);
    });

    /**Ejercicio 5: Reescribir con async / await
    *Comparar estilos (then vs async / await)
    *Preguntas:
    *1. ¿Dónde está la promesa?
    *2. ¿Qué línea “espera” a que lleguen los datos?
    *3. ¿Cuál versión te parece más clara?
    */
    async function obtenerPost() {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/2");
        const post = await response.json();
        // console.log(post.title);
    }

    obtenerPost();

    /**Ejercicio 6: Manejar errores (nivel básico)
    *Introducir errores sin entrar muy profundo.
    *Preguntas:
    *1. ¿Entra en el catch?
    *2. ¿Por qué?
    *3. ¿Qué significa response.ok? 
    */
    // fetch("https://jsonplaceholder.typicode.com/URL_INVENTADA").then(response => {
    //     if (!response.ok) {
    //         throw new Error("Error en la petición");
    //     }
    //         return response.json();
    //     }).then(datos => {
    //         // console.log(datos);
    //     }).catch(error => {
    //         // console.log("Ha ocurrido un error:", error.message);
    // });

    //EXAMPLE 1
    fetch('./js/resources/texto.txt').then(response => response.text()).then(datos => {
        console.log('\nEXAMPLE 1');
        // console.log(datos);
    });

    //EXAMPLE 2
    fetch('./js/resources/texto.txt').then(function (response) {
        return response.text()
    }).then(function (datos) {
        console.log('\nEXAMPLE 2');
        // console.log(datos);
    });

    //EXAMPLE 3
    // fetch('./js/resources/flores.jpg').then(function (response) {
    //     return response.blob()
    // }).then(function (myBlob) {
    //     console.log('\nEXAMPLE 3');
    //     console.log(myBlob);
    //     console.log(myBlob.size);
    //     console.log(myBlob.type);

    //     let objectUrl = URL.createObjectURL(myBlob);
    //     let myImage = document.createElement('img');
    //     myImage.setAttribute('src',objectUrl);
    //     document.body.append(myImage);
    // });
    
    //EXAMPLE 3 - localStorage (IT ONLY SAVES THE PHOTO'S ROUTE)
    let myButton = document.createElement('button');
    myButton.textContent = 'Mostrar fotos';

    document.body.append(myButton);
    document.body.append(document.createElement('br'));
    document.body.append(document.createElement('br'));

    fetch('./js/resources/flores.jpg').then(function (response) {
        return response.blob()
    }).then(function (myBlob) {
        console.log('\nEXAMPLE 3');
        // console.log(myBlob);
        // console.log(myBlob.size);
        // console.log(myBlob.type);

        let objectUrl = URL.createObjectURL(myBlob);
        localStorage.setItem('myPhoto',JSON.stringify(objectUrl));
    });

    myButton.addEventListener('click', e => {
        let myImage = document.createElement('img');
        myImage.setAttribute('src',JSON.parse(localStorage.getItem('myPhoto')));
        document.body.append(myImage);
    });

    
    /**
     * leer una api en formato JSON: https://randomuser.me/api
     */

    let myRequest = new Request('https://randomuser.me/api');
    fetch(myRequest).then(myRequest => myRequest.json()).then(myJson => {
        console.log('\nEXAMPLE 4');
        console.log(myJson.results[0].name.last);
    }).catch(error => {
        console.log('ERROR: ' + error);
    });

    apiObtain();
    
    async function apiObtain() {
        try {
            const myResponse = await fetch("https://randomuser.me/api");
            const myJson = await myResponse.json();
            console.log(myJson.results[0].name.last);
        } catch(error) {
            console.log('ERROR: ' + error);
        }
        
    }
}
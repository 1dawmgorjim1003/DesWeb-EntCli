"use strict"
{
    /**
     * 2 objetos: 
     *  - 1) sessionStorage: la información se mantiene hasta que la elimine
     *  - 2) sessionStorage: se pierde cuando se cierra ventana del navegador
     * 4 métodos:
     *  - 1) sessionStorage.setItem ("variable", "valor")
     *  - 2) sessionStorage.getItem ("variable")
     *  - 3) sessionStorage.removeItem("variable")
     *  - 4) sessionStorage.clear() : borra todas las sessionStorage
     
        
    */
    
    
    // EJEMPLO 1:
    sessionStorage.setItem("nombre", "Jacinta");
    console.log(sessionStorage.getItem("nombre"));

    sessionStorage.setItem("nombre", "Felipe"); //  se perde el valor anterior.
    console.log(sessionStorage.getItem("nombre"));

    // EJEMPLO 2:
    sessionStorage.setItem("apellidos", "de Borbón");
    console.log(sessionStorage.getItem("apellidos"));

    // EJEMPLO 3:
    sessionStorage.removeItem("apellidos");
    //sessionStorage.clear(); //  se borran todos los sessionStorage

    //EJEMPLO 4:
    /**
    ** Usando la tecnología de sessionStorage, almacena en una variable llamada username el nombre del usuario y, al cargar la página, verificar:
     * - si la variable no existe:
     *    - Indicarle al usuario que no está identificado.
     *    - Mostrarle un prompt para que introduzca su nombre de usuario.
     *    - Controlar si deja el prompt en blanco y hace click en cancelar.
     *    - guardar el valor de la variable username.
     * - si la variable ya existe:
     *    - Saludar al usuario escribiendo: ¡Bienvenido de nuevo, username!
     * Añadir en la parte superior un botón para eliminar la variable username del sessionStorage
     * 
     * NOTA: excepto el prompt para pedirle los datos al usuario, todo debe escribirse en el DOM
     *  usando los elementos HTML que creas necesarios en Javascript
     * NOTA2: probar el funcionamiento recargando la página tras haber introducido un username y tras borrarlo tanto con el botón como desde el navegador.
     *
    */

    saveUsername();

    function saveUsername() {

        let myButton = document.createElement('button');
        myButton.textContent = 'Eliminar la variable de sessionStorage';
        document.body.append(myButton);

        document.body.append(document.createElement('br'));

        let myH2 = document.createElement('h2');
        document.body.append(myH2);

        window.addEventListener('load', e => {
            if (!sessionStorage.getItem('username')) {
                myH2.textContent = 'Usted no está identificado';
                let name = prompt('Introduzca su nombre de usuario: ');

                if (name !== "" && name !== null) {
                    sessionStorage.setItem('username',name);
                    myH2.textContent = `¡Bienvenido de nuevo, ${sessionStorage.getItem('username')}!`;
                }
                
            } else {
                myH2.textContent = `¡Bienvenido de nuevo, ${sessionStorage.getItem('username')}!`;
            }
        });

        myButton.addEventListener('click',(e) => {
            if (sessionStorage.getItem('username')) {
                sessionStorage.removeItem('username');
                window.location.href = 'http://127.0.0.1:5500/UT3/theory/4.sessionStorage.html';
            }
        });
    }
}
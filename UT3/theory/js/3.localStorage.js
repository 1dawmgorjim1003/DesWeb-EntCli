"use strict"
{
    /**
     * 2 objetos: 
     *  - 1) localStorage: la información se mantiene de forma indefinida hasta que la elimine
     *  - 2) sessionStorage: se pierde cuando se cierra ventana del navegador
     * 4 métodos:
     *  - 1) localStorage.setItem ("variable", "valor")
     *  - 2) localStorage.getItem ("variable")
     *  - 3) localStorage.removeItem("variable")
     *  - 4) localStorage.clear() : borra todas las localStorage
      
    */
    

    // EJEMPLO 1:
    console.log("Ejemplo1:");
    localStorage.setItem("nombre", "Jacinta");
    console.log(localStorage.getItem("nombre"));

    localStorage.setItem("nombre", "Felipe"); //  se pierde el valor anterior.
    console.log(localStorage.getItem("nombre"));

    // EJEMPLO 2:
    console.log("\nEjemplo2:");
    localStorage.setItem("apellidos", "de Borbón");
    console.log(localStorage.getItem("apellidos"));

    // EJEMPLO 3:
    console.log("\nEjemplo3:");
    localStorage.removeItem("apellidos");
    //localStorage.clear(); //  se borran todos los localStorage

    //EJEMPLO 4:
    /**
    ** Usando la tecnología de localStorage, almacena en una variable llamada username el nombre del usuario y, al cargar la página, verificar:
     * - si la variable no existe:
     *    - Indicarle al usuario que no está identificado.
     *    - Mostrarle un prompt para que introduzca su nombre de usuario.
     *    - Controlar si deja el prompt en blanco y hace click en cancelar.
     *    - guardar el valor de la variable username.
     * - si la variable ya existe:
     *    - Saludar al usuario escribiendo: ¡Bienvenido de nuevo, username!
     * Añadir en la parte superior un botón para eliminar la variable username del localStorage
     * 
     * NOTA: excepto el prompt para pedirle los datos al usuario, todo debe escribirse en el DOM
     *  usando los elementos HTML que creas necesarios en Javascript
     * NOTA2: probar el funcionamiento recargando la página tras haber introducido un username y tras borrarlo tanto con el botón como desde el navegador.
     *
    */

    saveUsername();

    function saveUsername() {

        let myButton = document.createElement('button');
        myButton.textContent = 'Eliminar la variable de localStorage';
        document.body.append(myButton);

        document.body.append(document.createElement('br'));

        let myH2 = document.createElement('h2');
        document.body.append(myH2);

        if (!localStorage.getItem('username')) {
            myH2.textContent = 'Usted no está identificado';
            let name = prompt('Introduzca su nombre de usuario: ');

            if (name !== "" && name !== null) {
                localStorage.setItem('username',name);
            }
        } else {
            myH2.textContent = `Bienvenido de nuevo, ${localStorage.getItem('username')}`;
        }

        myButton.addEventListener('click',(e) => {
            if (localStorage.getItem('username')) {
                localStorage.removeItem('username');
            }
        });
    }
}
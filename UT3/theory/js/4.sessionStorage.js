"use strict"
{
    /**
     * 2 objetos: 
     *  - 1) localStorage: la información se mantiene hasta que la elimine
     *  - 2) sessionStorage: se pierde cuando se cierra ventana del navegador
     * 4 métodos:
     *  - 1) sessionStorage.setItem ("variable", "valor")
     *  - 2) sessionStorage.getItem ("variable")
     *  - 3) sessionStorage.removeItem("variable")
     *  - 4) sessionStorage.clear() : borra todas las localStorage
     
        
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

    
}
// CTRL + K + C = COMMENT.
// CTRL + K + U = UNCOMMENT.

"use strict" // WE MUST GIVE TO THE VARS ONE OF THAT TYPE: LET, VAR OR CONST
{
    let a = 4; // FOR BLOCKS AND CHILDREN
    var b = 5; // FOR GLOBAL USE

    const c = 6;
    // BAD = c += 2;
    test1();
    function test1 () {
        // GOOD
        console.log(b);
        b = b+10;
        console.log(b);
    }



    const myArray = [1,2,3]; // DECLARE AND START AN ARRAY
    // YOU CAN CHANGE THE CONTENTS, BUT NOT HIS SIZE
    console.log(myArray([0]));
    myArray[0] = 4;
    console.log(myArray([0]));
    myArray = []; // BAD, IM CHANGING THE SIZE

    let myArray2 = [1,2,3]; // DECLARE AND START AN ARRAY
    // YOU CAN CHANGE THE CONTENTS AND THE SIZE
    console.log(myArray2([0]));
    myArray2[0] = 4;
    console.log(myArray2([0]));
    myArray2 = []; // GOOD



    const number = 10; // GOOD
    printNumber();
    function printNumber () {
        console.log(number);
    }

    function app () {
        const number = 5;
        printNumber();
    }
    app(); // IT PRINTS 10, BECAUSE THERE IS A CONST NUMBER OUT
           // OF THE BLOCKS
    


    let v = 10.7; // GOOD; TYPE PRIMITIVE NUMBER
    let b = false; // GOOD; TYPE PRIMITIVE BOOLEAN
    let s = "my string" // GOOD; TYPE PRIMITIVE STRING
    x; // GOOD; TYPE PRIMITIVE ANY


    console.log("the string is " + s); // CONCATENATE STRINGS
    console.log("the string is s") // BAD
    console.log(`the string is ${s}`) // BETTER
    console.log('the string is' + s) // GOOD ALSO



    let edad = 23, nuevaEdad, incremento = 4; // GOOD, ALL VARS ARE LET TYPE
    const name="Rosa García";
    console.log(typeof incremento == number) // IT RETURNS TRUE
    console.log(typeof incremento == string) // IT RETURNS FALSE
    console.log(typeof incremento) // IT RETURNS THE TYPE OF THE VAR
    nuevaEdad = edad + incremento;
    console.log(nuevaEdad); // THE TYPE OF THE VAR CHANGES FROM ANY TO NUMBER
    console.log(name + nuevaEdad); //IT MIX THE TYPES (STRING AND NUMBER)
    console.log("2" +  edad) //IT APPEARS 223 BECAUSE THERE ARE 2 DIFERRENT TYPES



    let str1 = 'hello';
    let str2 = str1; // COPY BY VALUE
    str1 = 'goodbye';
    console.log(str1);
    console.log(str2); // IT PAINTS BOTH TIMES THE WORD 'HELLO'
    //let v:number = 10; ANGULAR TYPE



    let v1 = ['hello'];
    let v2 = v1; // COPY BY REFERENCE
    v1.push('goodbye'); // ADD NEW POSITIONS TO MY ARRAY
    console.log(v1);
    console.log(v2); // IT PAINTS BOTH TIMES 'HELLO GOODBYE'. THEY ARE NOT PRIMITIVE TYPES

    v2 = [...v1]; // COPY BY VALUE OF NOT PRIMITIVE TYPES.  IT IS CALLED SPREAD
    v1.push('its too late');
    console.log(v1); // IT PAINTS 'HELLO GOODBYE ITS TOO LATE'
    console.log(v2); // IT PAINS 'HELLO GOODBYE'. WE MADE AN WHOLLY-COPY



    let numero = 5;
    console.log(numero);
    console.log(numero.toString()); // WE TRANSFORM A NUMBER INTO A STRING

    let x = '2'; y = 5;
    console.log(typeof x + ' ' + ' ' + typeof y);
    console.log(x+y); // IT CONCATENATE BOTH. IT CAN'T BE IN A SUM, DIVISION...

    

    let arr = ['1', '10', '100', '1000'];
    for (let i = 0; i < arr.length && arrr[i] < 500; i++ ) {
        console.log(i); // IT TRANSFORM MY ARRAY OF STRINGS INTO AN ARRAY OF NUMBERS
    } // IT IS CALLED COERCION

    var x = '10'; y = '9';
    console.log(x < y); // TRUE, 1 IS MINOR THAN 9. WE DON'T HAVE COERCION

    let aa = 10; bb = '9';
    console.log(aa<bb); // FALSE, 10 IS BIGGER THAN 9. WE HAVE COERCION

    let num='100'; num2 = '100.13'; num3 = 11;
    let n=parseInt(num); // IT GOES FROM STRING TO ENTIRE NUMBER 100
    let n2=parseFloat(num); // IT GOES FROM STRING TO FLOAT NUMBER 100.0
    let n3=parseFloat(num2); // IT GOES FROM STRING TO FLOAT NUMBER 100.13
    let n4=num3.toString(); // IT GOES FROM NUMBER TO STRING



    alert("Message");
    console.log("Message");
    console.table(v1); // IT PAINTS LIKE A TABLE IN OUR F12 CONSOLE
    confirm("Would you like to cancel our subscription?"); // WE HAVE AN ALERT FOR ACCEPT OR CANCEL SOMETHING. IT RETURNS TRUE OR FALSE.
    prompt('Introduce a province'); // FOR WRITE A VALUE IN OUR PAGE
    prompt('Introduce a province', 'Write something...'); // WE HAVE A DEFAULT VALUE



    let num5 = 5; num6 = 3;
    num5 %= num6; // WE HAVE THE REST OF THE DIVISION (2)


    let a2 = '2';
    let b2 = 2;
    if (a2 == b2) {console.log("Son iguales")} // TRUE. WE DON'T COMPARE THE TYPE
    if (a2 === b2) {console.log("Son iguales")} // FALSE. WE COMPARE THE TYPE

    if (a2 != b2) {console.log("Son iguales")} // FALSE. WE DON'T COMPARE THE TYPE
    if (a2 !== b2) {console.log("Son iguales")} //TRUE. WE COMPARE THE TYPE



    // IF
    if (condition) {

    } else {

    }
    

    if (condition1) {
        
    } else if (condition2) {

    } else {

    }


    if (condition3) {
        
    } else if (condition4) {

    } else {
        if (condition5) {

        }
    }



    // NaN = Is Not a Number
    // SWITCH
    const metodoPago = 'efectivo';
    switch (metodoPago) {
        case 'tarjeta' :
            console.log('Pagaste con tarjeta');
            break;
        case 'cheque' :
            console.log('El usuario va a pagar con cheque');
            break;
        case 'efectivo' :
            console.log('Pagaste con efectivo');
            break;
        default:
            console.log('Aún no has pagado');
            break;
    }



    let esSocio = true;
    esSocio?console.log("La cuota son 10€") : console.log("La cuota son 20€"); // CONDITIONAL TERNARY OPERATOR



    // RINGLETS
    for (let $i = 2 ;$i <= 30; $i+=2) {
        if ($i%10 !== 0)
        console.log(i); // WE PAINT EVEN SMALLER NUMBERS THAN 30 AND NOT NUMEROUS OF 10
    }


    // while (1===1) {
    //     console.log('bucle infinito');
    // }


    let i = 2;
    while (i <= 30) {
        console.log(i);
        i += 2;
    }

    // IT'S EXECUTED AT LEAST 1 TIME
    do {

    } while (esSocio===true) { 

    }



    // WE USE BREAK TO STOP DE RINGLET. IF WE USE CONTINUE, WE COMEBACK TO THE CONDITION OF THE RINGLET. WE USE ONLY BREAK AND CONTINUE IN SWITCH.
    let auxClave = true;
    let numveces = 0;
    while (auxClave !== "SuperClave" && auxclave) {
        auxclave = prompt('Introduce la clave', '');
        numveces++;
        if (numveces === 3) {
            break;
        }
    }

    if (auxClave == "SuperClave") {
        console.log("La clave es correcta");
    } else {
        console.log("La clave no es correcta");
    }


    let i3;
    for (i3 = 2;i <= 50;i3 += 2){
        if ((i3 % 3) === 0){
            continue;
        }
        console.log(i3);
    }



    //TRY AND CATCH
    try {
        let a = 5; b = 0;
        let c = a / b;
        console.log(`El resultado es ${c}`); // WE DONT HAVE ANY ERROR BECAUSE WE CAN DO X / 0 = INFINITY

        const v = [1,2,3];
        v = [1,2,3,4];
        console.table(v); //WE CANT MODIFY THE LENGTH OF A CONST ARRAY
    }catch(error) {
        console.log("Ha habido problemas: " + error);
    }finally {
        console.log('Hola'); // IT GETS EXECUTED IN BOTH CASES
    }


    try {
        let numero2 = prompt('Introduce a number:', 'solo numeros');
        
        if (isNaN(numero2) || numero == null || numero==='') {
            throw new Error('No has introducido un número'); //WE EXECUTE OUR ERROR.
        }

        numero2++;
        console.log(numero2);
    } catch (err) {
        console.log('La proxima vez, por un número'); // WE HAVE  OUR ERROR
        console.log(err); // WE PRINT THE STRING OF THE ERROR
    } finally {
        
    }



    // DECLARATION AND USE OF FUNCTIONS
    function f (param1, param2=0, param3) {
        console.log(param1);
        console.log(param2);
        console.log(param3);
        // return X;
    }

    // CALL THE FUNCTION F
    f(10, 20, 30);

    //WE HAVE AN ENTER  PARAMETER THAT IS AN ARRAY (...param3)
    function f2 (param1, param2, ...param3) {
        console.log(param1);
        console.log(param2);
        console.log(param3);
    }

    f2(10, 20, 30); //OUTPUT: 10, 20, [30];
    f2(10, 20, 30, 40); //OUTPUT 10, 20, [30, 40];
    f2(10, 20, 30, 40, 50, 60, 70); //OUTPUT 10, 20, [30, 40, 50, 60, 70];

    //DECLARE A FUNCTION AND PUT IT IN A CONST.
    const f3 = function (param1, param2, param3=0) {
        console.log('Esto es bastante raro...');
        return 10+30;
    }
    console.log(f3); //OUTPUT: CODE OF THE FUNCTION
    f3(10, 20); //OUTPUT: Esto es bastante raro...
    let x3 = f3(10, 20);
    console.log(x3); // OUTPUT: 40



    //ANONYMOUS FUNCTIONS
    //THE FIRST BRACKETS HAVE THE FUNCTION, AND THE SECOND ONE HAS TE CALL TO THE FUNCTION.
    (function () {
        console.log('Función anónima');
    })(); //OUTPUT: Función anónima.

    //THE SAME BUT WE HAVE PARAMETERS
    (function (param1, param2, param3=30) {
        console.log('Función anónima2');
        console.log(param1);
        console.log(param2);
        console.log(param3);
    })(10, 20, 40); // OUTPUT: Función anónima \n 10 \n 20 \n 40

    //THE SAME BUT WE PUT OUR ANONYMOUS FUNCTION INSIDE OF A VAR
    const v3 = (function (param1, param2, param3=30) {
        console.log('Función anónima3')
        return parseInt(param1)+parseInt(param2);
    })(prompt('Introduce param1: ', 10). prompt('Introduce param2: ', 20));

    console.log(v3); //OUTPUT: 30 OR SPECIFIC VALUES



    //ARROWS FUNCTIONS   
    // WE HAVE THE PARAMETERS INTO THE BRACKETS AND THE COMMANDO AFTER THE ARROW
    () => console.log('Arrow function');
    (n1, n2) => n1+n2;
    
    const sumar = (n1, n2) => n1+n2;
    console.log(sumar(10, 20));  //OUTPUT: 30

    //IF WE WANT MORE CODE LINES, WE USE KEYS
    const s2 = (param1, param2, param3=0) => {
        console.log(param1);
        console.log(param2);
        console.log(param3);
        return param1+param2+param3;
    };
    
    console.log(s2(10,20,30)); //OUTPUT: 60

    //ANOTHER EXAMPLE
    const s3 = () => prompt('How old are you?', 8);
    console.log(s3()); //OUTPUT: 8 OR SPECIFIC VALUE
    
    //ANOTHER EXAMPLE
    const s4 = (param1, param2) => {
        console.log(param1);
        console.log(param2);
        return 'XXX';
    };
    s4(10, 20); //OUTPUT: 10 \n 20
    console.log(s4('Hola', 'Adios')); //OUTPUT: XXX
    
    

    //RECURSIVE FUNCTIONS
    //WE CREATE A RECURSIVE FUNCTION THEN WE DO OUR OBJECTIVE
    function cuentaAtras (numero) {
        //BASE CASE
        if (numero === 0) {
            return;
        }
        //RECURSIVE CASE
        console.log(numero);
        //EVERYTIME WE RETURN cuentaAtras - 1 BEFORE WE REACH 1.
        cuentaAtras(numero - 1);
    };
    console.log(cuentaAtras(5));

    //WE CREATE A RECURSIVE FUNCTION FOR SAYING IF A NUMBER IS EVEN OR ODD
    function parImpar (numero) {
        if (numero === 0) {
            //IF THE NUMBER ES EQUAL T0 0 WE SAY THAT IS EVEN
            return 'Par';
        } else if (numero === 1) {
            //IF IS EQUAL TO 1 WE SAY ITS ODD
            return 'Impar';
        } else {
            //WE QUIT 2 TO THE NUMNER EVERY LAP OF THE FUNCTION
            return parImpar(numero - 2);
        }
    };
    console.log(parImpar(20)) // EVEN
    console.log(parImpar(75)) // ODD
    console.log(parImpar(98)) // EVEN
    console.log(parImpar(113)) // ODD

    //THE SAME BUT WE PUT IT IN A VAR
    let parImpar = function (numero) {
        if (numero === 0) {
            //IF THE NUMBER ES EQUAL T0 0 WE SAY THAT IS EVEN
            return 'EVEN';
        } else if (numero === 1) {
            //IF IS EQUAL TO 1 WE SAY ITS ODD
            return 'ODD';
        } else {
            //WE QUIT 2 TO THE NUMNER EVERY LAP OF THE FUNCTION
            return parImpar(numero - 2);
        }
    };
    console.log(parImpar(20)) // EVEN
    console.log(parImpar(75)) // ODD
    console.log(parImpar(98)) // EVEN
    console.log(parImpar(113)) // ODD
    
    //THE SAME BUT WE PUT IT IN AN ARROW FUNCTION
    let parImpar = (numero) => {
        if (numero === 0) {
            //IF THE NUMBER ES EQUAL T0 0 WE SAY THAT IS EVEN
            return 'EVEN';
        } else if (numero === 1) {
            //IF IS EQUAL TO 1 WE SAY ITS ODD
            return 'ODD';
        } else {
            //WE QUIT 2 TO THE NUMNER EVERY LAP OF THE FUNCTION
            return parImpar(numero - 2);
        }
    };
    console.log(parImpar(20)) // EVEN
    console.log(parImpar(75)) // ODD
    console.log(parImpar(98)) // EVEN
    console.log(parImpar(113)) // ODD

    //WE CREATE A RECURSIVE FUNCTION FOR COUNT NUMBER BETWEEN A MINIMUM AND MAXIMUM
    function countUp (min, max) {
        //BASE CASE
        if (min === max) {
            console.log(max);
        } else {
            //RECURSIVE CASE
            console.log(min);
            countUp(min+1, max);
        }
    }

    countUp(1, 10);

    //WE CREATE A RECURSIVE ARROW FUNCTION
    let countDown2 = (n) => {
        if (n === 1) {
            //BASE CASE
            console.log(1);
        } else  {
            //RECURSIVE CASE
            console.log(n);
            countDown2(n-1);
        }
    }



    //STRING CLASS
    cadena=cadena.metodoQueDevuelveUnaModificacion(); /* FOR MODIFY 
    THE SAME CHAIN DIRECTLY*/
    toLowerCase()/toUpperCase() //FOR RETURN THE CHAIN IN SMALL LETTERS OR CAPITAL LETTERS
    concat(cadena) //FOR PUT TWO DIFFERENT CHAINS ON THE SAME VAR
    charAt(posicion) //RETURN ONE CHARACTER AT THAT POSITION
    indexOf(texto, [indice]) //SEARCH ONE CHARACTER IN OUR CHAIN STARTING AT THE BEGINNING.
    lastIndexOf(texto) //SEARCH ONE CHARACTER IN OUR CHAIN STARTING AT THE FINISH
    replace(texto1,texto2) //IT REPLACES THE FIRST TEXT1 FOR TEXT2 ON THE SAME STRING
    replaceAll(texto1,texto2) //IT REPLACES ALL THE TEXT1 FOR TEXT2 ON THE SAME STRING
    split(caracter) //IT MAKE SPACES BETWEEN EACH CHARACTER OF THE STRING. IT IS RETURNED IN AN ARRAY
    substring(inicio, fin) //IT RETURNS ANOTHER CHAIN BETWEEN ONE POSITION AND A NUMBER OF CHARACTERS.
    includes(texto) //IT RETURNS TRUE OR FALSE IF OUR CHAIN HAVE 'TEXTO'.
    repeat(3) //FOR REPEAT OUR CHAIN X TIMES
    trim () //IT DELETES ALL WHITE SPACES AT THE SIDES OF THE CHAIN
    match() //IT RETURNS ALL OCURRENCES OF THE CHAIN OF A REGULAR EXPRESSION
    cadena.length //IT RETURNS THE LENGTH OF THE CHAIN TEXT
}
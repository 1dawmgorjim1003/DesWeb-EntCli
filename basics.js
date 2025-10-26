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
    cadena.length //IT RETURNS THE LENGTH OF THE CHAIN TEXT

    //REGULAR EXPRESSIONS
    //FOR SEARCH WORDS WITH 4 LETTERS WITH AN A AND AN O IN THAT POSITIONS
    const r1 = /.a.o/;
    //THE ORDER DOESN'T MATTER. WE CAN PUT ALL OR ANY LETTER
    // i: It doesn't matter the height of the letters
    const r2 = /.a.o/gimuy;
    //ANOTHER WAY TO CREATE A REGULAR EXPRESSION. SECOND PARAMETER IS OPTIONAL
    const r3 = new RegExp(".a.o", "i");
    const r4 = new RegExp(/.a.o/,"i"); //ANOTHER WAY TO CREATE IT
    const r5 = new RegExp(/.a.o/i); //ANOTHER WAY TO CREATE IT

    r1.source //IT WRITE THE REGULAR EXPRESSION. OUTPUT: .a.o
    r2.flags //IT WRITE THE LETTERS OF THE REG. EXPRRESION. OUTPUT: gimuy
    r1.flags.includes("g")?console.log("yes"):console.log("no"); //IT CONFIRMS THE EXISTENCE OF LETTER X (G,I,M,U,Y)
    r1.global?console.log("yes"):console.log("no"); //IT CONFIRMS THE EXISTENCE OF LETTER G
    r1.ignoreCase?console.log("yes"):console.log("no"); //IT CONFIRMS THE EXISTENCE OF LETTER I
    r1.multiline?console.log("yes"):console.log("no"); //IT CONFIRMS THE EXISTENCE OF LETTER M
    r1.unicode?console.log("yes"):console.log("no"); //IT CONFIRMS THE EXISTENCE OF LETTER U
    r1.sticky?console.log("yes"):console.log("no"); //IT CONFIRMS THE EXISTENCE OF LETTER Y

    r5.test("GATO"); //IT RETURNS A BOOLEAN. OUTPUT: true
    r5.test("GATA"); //OUTPUT: false
    const regEx1 = new RegExp("^football"); //IT SEARCHS AT THE BEGINNING OF SOMETHING
    const regEx2 = new RegExp("^football", "m"); // THE SAME BUT WE CAN TEST MORE THAN 1 LINE
    regExp1.test("rugby\nfootball"); //OUTPUT: false
    regEx2.test("rugby\nfootball"); //OUTPUT: true
    let r6 = /😁./u; //IT COUNTS WITH SPECIAL CHARACTERS
    r6.test("😁ba"); //OUTPUT: true
    r6=/./;
    r6.test("ab"); //OUTPUT: true
    r6.test(" "); //OUTPUT: true
    r6=/^.$/; //THE $ IS FOR ANOUNCE THE FINAL
    r6.test("XX\nZ"); //OUTPUT: true
    let regExp3 = new RegExp("a", "y");
    regExp3.test("ba"); //OUTPUT: false
    regExp3.lastIndex=0; //DEFAULT
    regExp3.lastIndex=1;
    regExp3.test("ba"); //OUTPUT: true

    const regExp4 = /foo/y;
    let myStr1 = "table footballfootbolin";
    regExp4.lastIndex=6;
    regExp4.test(myStr1); //OUTPUT: true, THE NEXT TIME, THE INDEX STARTS WHEN FOO ENDED.
    /*
        . -> ANY CHARACTER
        \ -> FOR SEARCH A POINT
        \n -> LINE JUMP
        \t -> TABULATOR
        \r -> CARRO JUMP
        \f -> FORM END
        \s -> SPACE
        [] -> ANY CHARACTER INSIDE
        [a-z] -> ANY MINUSCULE LETTER (NO ACCENTS OR Ñ)
        [A-Z] -> ANY CAPITAL LETTER (NO ACCENTS OR Ñ)
        [a-zA-Z] -> ANY LETTER
        [^a-zA-Z] -> IT CAN'T BE LETTER
        [0-9] -> ANY NUMBER
        [^0-9] -> IT CAN'T BE NUMBER
        [0-9a-zA-Z] -> ANY NUMBER OR LETTER
        [^0-9a-zA-Z] -> IT CAN'T BE NUMBER OR LETTER
        \d -> ANY NUMBER ALSO
        [^] ->  IT CAN`T EXIST ANY CHARACTER INSIDE
        | -> ALTERNATIVE: THE THINGS THAT WE HAVE AT RIGHT OR AT LEFT
        [ ] -> A SPACE
        [\t] -> A TABULATOR
        [\r] -> CARRO JUMP
        [\n] -> SENTENCE JUMP
        [\f] -> END FORM
        [ \t\r\n\f] = \s (ALL THAT THINGS)
        [^ \t\r\n\f] = \S (NOT ALL THAT THINGS)
        \b -> IT FOUND A TEXT WITH SPACES O PUNTUATION SIMBOLS, AT THE END OR AT BEGINNING
        \B -> IT CAN'T FOUND A TEXT WITH SPACES O PUNTUATION SIMBOLS, AT THE END OR AT BEGINNING
    */
    let regExp18 = /a*/; //* -> ONE CHARACTER APPEARS ZERO O MORE TIMES
    regExp18.test(' '); //OUTPUT: true
    regExp18 = /a*b/;
    regExp18.test("c"); //OUTPUT: false
    regExp18 = /ba*/;
    regExp18.test("bc"); //OUTPUT: true

    let regExp19 = /a+/; //ONE CHARACTER WHO APPEARS 1 OR MORE TIMES 
    regExp19.test(""); //OUTPUT: false
    regExp19.test("a"); //OUTPUT: true
    regExp19.test("bb"); //OUTPUT: false
    regExp19.test("bba"); //OUTPUT: true

    let regExp20 = /disparos?/; //CHARACTER BEFORE MAY APPEAR OR NOT
    regExp20.test('Escuché disparos en la habitación.'); // OUTPUT: true
    regExp20.test('Escuché un disparo en la habitación.'); // OUTPUT: true
    regExp20.test('La pistola era de agua'); // OUTPUT: false
    
    let regExp21 = /x{3}/; /*{n, m}
    // {n} -> CHARACTER BEFORE APPEARS N TIMES
    // {n,} -> CHARACTER BEFORE APPEARS N OR MORE TIMES
    // {n,m}$ -> CHARACTER BEFORE APPEARS BETWEEN N AND M TIMES*/
    regExp21.test('holaxx x'); // OUTPUT: false
    regExp21 = /x{3,}/;
    regExp20.test('holaxxxxxxxxx  xx'); // OUTPUT: true
    regExp21 = /^x{3,5}$/;
    regExp21.test('xxxxxxxxx'); // OUTPUT: false
    regExp21 = /^[0-9]{2}$/;
    regExp21.test(225); // OUTPUT: false
    regExp21 = /^[0-9]{2,}$/;
    regExp21.test(225); // OUTPUT: true
    regExp21 = /^[0-9]{2,4}$/;
    regExp21.test(2254); // OUTPUT: true
    regExp21.test(22542); // OUTPUT: false
    let str = 'la ola de la playa tiene más sal que de costumbre'   ;
    regExp21 = /[a-zá]{3}/i;
    regExp21.test(str); //OUTPUT: true
    regExp21.exec(str); //OUTPUT: ola 
    regExp21 = /\b[a-z]{3}\b/gi;
    regExp21.test(str); //OUTPUT: ola
    regExp21.test(str); //OUTPUT: mas
    regExp21.test(str); //OUTPUT: sal
    regExp21.test(str); //OUTPUT: que

    match() //IT RETURNS ALL OCURRENCES OF THE CHAIN OF A REGULAR EXPRESSION
    str.match(regExp21); //OUTPUT: ['ola', 'más', 'sal', 'que'];



    //LITERAL OBJECTS
    let persona = {
        nombre: "Pepe",
        edad: 30,
        ciudad: "Cádiz"
    };

    console.log(persona.nombre);
    console.log(persona["nombre"]) //OUTPUT: Pepe
    persona.edad = 33; //WE CHANGE THE VALUE OF THE VAR
    console.log(persona.edad);  //OUTPUT: 33

    let animal = {
        tipo: "gato",
        patas: "4",
        tieneBigotes: true,
        dimensiones: {
            alto: 60,
            ancho:  30,
            largo: 80
        },
        dieta: ["pescado", "pienso", "sobras"]
    }

    console.log(animal); //OUTPUT: AN ARRAY WITH ALL THE INFORMATION
    animal.dimensiones["largo"] = 90; //WE CHANGE THE VALUE

    let personaCompleta = {
        nombre: "Hugo",
        dni: "28123456T",
        edad: 19,
        ciudad: "Sevilla",
        pasatiempos: ["Jugar a la consola", "Javascript", "Escuchar música"],
        contacto: {
            email: "hsilben979@g.educaand.es",
            telefono: 624975516,
            instagram: "@noQuieroDecirlo"
        },
        saludar() {
            console.log("Holaaaaaaa");
        },
        saludarCompleto() {
            console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años`);
        },
        decirEmail() {
            return this.contacto.email;
        }
    }

    personaCompleta.saludarCompleto(); //OUTPUT: Hola, me llamo Hugo y tengo 19 años
    let e = personaCompleta.decirEmail();
    console.log(e); //OUTPUT: hsilben979@g.educaand.es



    //DESTRUCTURING A LITERAL OBJECT
    //personaCompleta.nombre;
    const {nombre:n23, dni:id, contacto: c2} = personaCompleta;
    const {email, telefono, instagram} = c2;
    console.log(n23); //OUTPUT: Hugo
    console.log(ig); //OUTPUT: @noQuieroDecirlo



    //JOIN TWO LITERAL OBJETCS
    let producto = {
        nombreProducto: "Lejía",
        precio: 2.95,
        marca: "Don Limpio",

    }

    let colores = {
        colorLiquido: "Amarillo",
        colorRecipiente: "Blanco",
        colorTapon: "Azul"
    }

    let productoColor = {producto, colores}
    console.log(productoColor); //OUTPUT: BOTH LITERAL OBJECTS
    //THIS IS BAD, PER REFERENCE

    let productoColor1 = {...producto,...colores};
    console.log(productoColor1);
    producto.nombreProducto="suavizante";
    console.log(productoColor1); // THIS IS PER VALUE. WE ARE COPYING OUR LITERAL OBJECTS INTO A NEW ONE



    //ARRAYS
    //CREATE AN ARRAY
    let myArray1 = [];
    //PUT ELEMENTS IN AN ARRAY
    myArray1[0] = 10;
    myArray1[1] = 20;
    //WE CAN PUT INSIDE DIFFERENT TYPES OF VARIABLES
    myArray1[2] = 'Martínez';
    console.log(myArray2);

    let myArray3 = new Array(); //WE CREATE AN OBJECT OF THE CLASS ARRAY
    myArray3[0] = 30;
    myArray3[1] = "30";

    let myArray4 = ["Gamusino", "uo", "globo"]; //ANOTHER WAY TO DECLARE AN ARRAY
    console.log(`El array tiene ${myArray3.length} elementos`); //WE HAVE THE LENGTH OF THE ARRAY, THE NUMBER OF ELEMENTS

    //CLONE ARRAY BY VALUE
    let myArray5 = new Array();
    myArray5 = [...myArray1];
    myArray5 = [...myArray1,...myArray2,...myArray3]; //WE CAN PUT MORE THAN ONE ARRAY IN THE NEWER

    //BIDIMENSIONAL ARRAYS
    let myArrayBi1 = new Array();
    //let myArrayBi1 = [[0,1], 1];
    myArrayBi1[0] = [1,2,3,4,5];
    myArrayBi1[1] = [2,3,4,5,6];
    myArrayBi1[2] = [3,4,5,6,7];
    myArrayBi1[2][4] = 'a'; //WE CHANGE THE VALUE OF THE VAR. OUTPUT: 3,4,5,6,a

    //ANOTHER WAY TO DECLARE BIDIMENSIONAL ARRAYS
    let numFilas = 2;
    let numColumnas = 3;
    let myArrayBi2 = new Array(numFilas);
    for (let i = 0; i<numFilas; i++) {
        myArrayBi2[i] = new Array(numColumnas);
    }
    console.log(myArrayBi2); //OUTPUT: 2 ROWS & 3 COLS WITH EMPTY VALUES
    for (let i = 0; i < numFilas; i++) {
        for (let j = 0; j< numColumnas; j++) {
            myArrayBi2[i][j] = 0;
        }
    }
    console.log(myArrayBi2); //OUTPUT: 2 ROWS & 3 COLS WITH VALUES 0

    //ANOTHER WAY TO DECLARE BIDIMENSIONAL ARRAYS
    let myArrayBi3 = Array.from(Array(2), () => new Array(3)); //OUTPUT: 2 ROWS & 3 COLS WITH VALUES 0

    //ANTOHER WAY TO DECLARE BIDIMENSIONAL ARRAYS
    let myArrayBi4 = new Array (5).fill().map(() => new Array(4)); //OUTPUT: 5 ROWS & 3 COLS WITH EMPTY VALUES

    //OPERATIONS WITH ARRAYS
    //JOIN
    const elements = ["fire", "earth", "water"];
    let str3 = elements.join()
    console.log(str3); //OUTPUT: fire,earth,water
    str3 = elements.join(" ")
    console.log(str3); //OUTPUT: fire earth water

    //SPLIT
    const strNumbers = "1,2,3,4,5,6,7,8,9,10";
    const myArrayNumbers = strNumbers.split(",");
    console.log(myArrayNumbers); //OUTPUT: AN ARRAY WITH THE STRINGS

    //PUSH
    elements.push("storm");
    console.log(elements); //OUTPUT: ["fire", "earth", "water", "storm"]

    //POP
    elements.pop()
    console.log(elements); //OUTPUT: ["fire", "earth", "water"]

    //SHIFT
    elements.shift()
    console.log(elements); //OUTPUT: ["earth", "water"]

    //REVERSE   --> MODIFY THE ORIGINAL ARRAY
    elements.reverse();
    console.log(elements); //OUTPUT: ["water", "earth"]

    //SORT 
    let myNumbers = [100, 5, 15, 1, 99];
    myNumbers.sort();
    console.log(myNumbers); //OUTPUT: [1, 100, 15, 5, 99];
    //WE SORT IT FROM MINOR TO HIGHER
    myNumbers.sort(function (first, second) {
        if (first > second) {
            return 1;
        } else {
            return -1;
        }
    });
    console.log(myNumbers); //OUTPUT: [1, 5, 15, 99, 100]
    //WE SORT IT FROM MINOR TO HIGHER
    myNumbers.sort( (a,b) => a>b?1:-1);
    console.log(myNumbers); //OUTPUT: [1, 5, 15, 99, 100] 
    myNumbers.sort( (a,b) => a-b); //FROM MINOR TO HIGHER
    console.log(myNumbers); //OUTPUT: [1, 5, 15, 99, 100] 
    myNumbers.sort( (a,b) => b-a); //FROM HIGHER TO MINOR
    console.log(myNumbers); //OUTPUT: [100, 99, 15, 5, 1] 

    //SLICE (start, [end]) --> BETWEEN START AND END -1
    let names = ['Rita', 'Manuel', 'Miguel' , 'Ana' , 'Vanesa']    ;
    let manNames = names.slice(1,3);
    console.log(manNames); //OUTPUT: ['Manuel', 'Miguel'];
    console.log(names.slice(-2)); // OUTPUT: ['Ana', 'Vanesa'];
    console.log(names.slice(-4)); // OUTPUT: ['Manuel', 'Miguel', 'Ana', 'Vanesa'];


    //FILTER --> CREATE AN ARRAY WITH FILTERED ELEMENTS
    let users = [
        { name:'John', age: 34},
        { name:'Amy', age: 20},
        { name:'Amador', age: 25},
        { name:'Thomas', age: 10}
    ];
    let filteredUsers = users.filter(function (user) {
        return user.age > 15;
    });
    console.log(filteredUsers); /* OUTPUT:[{ name:'John', age: 34},{ name:'Amy', age: 20}]; */

    let filteredUsers2 = users.filter((user) => user.age > 15);
    console.log(filteredUsers2); /* OUTPUT:[{ name:'John', age: 34},{ name:'Amy', age: 20}]; */


    //FIND --> IT RETURN THE FIRST ELEMENT OF AN ARRAY THAT HAVE THE CONDITION
    let user = users.find(function (user) {
        return user.name.match(/A[a-z]*/);
    });
    console.log(user); //OUTPUT: {name: 'Amy', age: 20};
    let user2 = users.find((user) => user.name.match(/A[a-z]*/));
    console.log(user2); //OUTPUT: {name: 'Amy', age: 20};


    //SOME --> IT RETURN TRUE OR FALSE. IT CHECKS IF AT LEAST 1 ELEMENT HAVE THE CONDITION.
    let hasUser = users.some(function (user) {
        return user.age ===10;
    });
    console.log(hasUser); //OUTPUT: true
    let hasUser2 = users.some((user) => user.age === 11);
    console.log(hasUser2); //OUTPUT: false


    //FINDINDEX --> IT RETURNS THE INDEX OF THE FIRST ARRAY'S NUMBER THAT HAVE THE CONDITION
    let userIndex = users.findIndex((user) => user.age === 25);
    console.log(userIndex); //OUTPUT: 2
    let userIndex2 = users.findIndex((user) => user.age === 27);
    console.log(userIndex2); //OUTPUT: -1 (IT DOESN'T EXIST)


    //CONCAT --> IT CONCATENATE ARRAYS. IT COPY IT BY VALUES
    let array1 = ['a', 'b', 'c'];
    let array2 = ['d', 'e', 'f'];
    let concatenatedArray = array1.concat(array2);
    console.log(concatenatedArray); //OUTPUT: ['a', 'b', 'c', 'd', 'e', 'f'];


    //REDUCE (ACUMULATOR, ACTUALVALUE(BY DEFAULT IS 0))
    let numbers = [1,2,3,4,5];
    let totalSum = numbers.reduce(((acumulator, actualValue) => {acumulator += actualValue;return acumulator;}));
    console.log(totalSum); //OUTPUT: 15
    let totalSum2 = numbers.reduce(((acumulator, actualValue) => {acumulator += actualValue;return acumulator;}),10);
    console.log(totalSum2); //OUTPUT: 25

    const myNumbersArray = [[0,1],[2,3],[4,5]];
    let completedArray = myNumbersArray.reduce(((ac,av) => ac.concat(av)));
    console.log(completedArray); //OUTPUT: [0,1,2,3,4,5]


    //INCLUDES --> IT RETURNS TRUE OR FALSE
    const motos = ['yamaha','ducati','kawasaki'];
    console.log(motos.includes('vespa')); //OUTPUT: false
    console.log(motos.includes('ducati')); //OUTPUT: true
    


    /*ITERATE OVER AN ARRAY
        - FOR
        - FOREACH
        - MAP
        - FOR OF
    */
    //FOR
    let vector = [1,2,'A','F',-1,2.4];
    for (let i = 0; i < vector.length ; i++) {
        console.log(vector[i]); //OUTPUT: 1 /n 2 /n A /n F /n -1 /n 2.4
    }

    //FOREACH --> IT DOESN'T RETURN ANYTHING
    vector.forEach((elem) => console.log(elem)); //OUTPUT: 1 /n 2 /n A /n F /n -1 /n 2.4
    vector.forEach((elem, index) => console.log(`En la posición ${index} nos encontramos el elemento ${elem}`)); //OUTPUT: En la posición 1 nos encontramos el elemento 1 /n En la posición 2 nos encontramos el elemento 2 /n En la posición 3 nos encontramos el elemento A /n ...

    //MAP --> IT RETURNS AN ARRAY
    vector.map((elem) => console.log(elem)); //OUTPUT: 1 /n 2 /n A /n F /n -1 /n 2.4
    let vector2 = vector.map((elem) => {console.log(elem); return elem});
    console.log(vector2); //OUTPUT: [1,2,'A','F',-1,2.4]
    let vector3 = vector.map((elem) => elem*2);
    console.log(vector3); //OUTPUT: [2,4,NaN,NaN,-2,4.8]
    // let users = [
    //     { name:'John', age: 34},
    //     { name:'Amy', age: 20},
    //     { name:'Amador', age: 25},
    //     { name:'Thomas', age: 10}
    // ];
    let vector4 = vector.map(user => user.age);
    console.log(vector4); //OUTPUT: [34,20,25,10]
    let sumaEdades = vector4.reduce(((ac,av) => ac += av),0);
    console.log(sumaEdades); //OUTPUT: 89
    let fullUsers = users.map(user => {return {...user, city: 'Jalisco'}});
    console.log(fullUsers); //OUTPUT: { name:'John', age: 34, city: 'Jalisco'} \n { name:'Amy', age: 20, city: 'Jalisco'} \n ...
    let fullUsers2 = users.map(user => {return {...user, age: user.age*2}});
    console.log(fullUsers2); //OUTPUT: { name:'John', age: 68} \n { name:'Amy', age: 40} \n ...

    //FOR OF
    for (let user of users) {
        console.log(user); // OUTPUT: { name:'John', age: 34} \n { name:'Amy', age: 20} \n ...
    }
}
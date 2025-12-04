"use strict"
{
    function myFunction(vector) {
        let min = Infinity; let max = -Infinity;
        let minString = ''; let maxStrig = '';
        let regExp = new RegExp('a', 'gi');
        let regExp2 = new RegExp('b', 'gi');
        let ocurrencesA = [];
        let ocurrencesB = [];
        let stringA = '';
        vector.forEach(i => {
            if (i.length < min) {
                min = i.length;
                minString = i;
            } else if (i.length > max) {
                max = i.length;
                maxStrig = i;
            }
            
            if (i.match(regExp).length > ocurrencesA.length) {
                ocurrencesA = i.match(regExp);
                stringA = i;
            }

            if (i.match(regExp2)) {
                ocurrencesB.push(i);
            }
        })

        console.log(`Cadena mas corta: ${minString}`);
        console.log(`Cadena mas larga: ${maxStrig}`);
        console.log(`Cadena con más a: ${stringA}`);
        console.log(`Hay ${ocurrencesB.length} cadenas que tienen la b`);
        console.log(`Cadenas con la letra b: ${ocurrencesB}`);
    }

    myFunction(['Hola', 'Hola que tal', 'Hola buenas tardes me llamo Miguel','Hola buenas'])
} 
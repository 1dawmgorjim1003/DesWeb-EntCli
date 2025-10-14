"use strict"
{
    function myFunction(chain, value) {
        const regExp = new RegExp(value + "(\\d+)", "g");
        let isNull;
        const output = [];

        while ((isNull = regExp.exec(chain)) !== null) {
            output.push(isNull[1]);
        }

        return output;
    }

    console.log(myFunction("xyz1, xyz2, xyz3, xyz4, xyz5", "xyz")); 
}

"use strict" 
{
    const output = (chain) => {
        let regExp21 = /[0-9]/g;
        return chain.match(regExp21);
    }

    console.log(output("A1D2U23HDN050"));
}
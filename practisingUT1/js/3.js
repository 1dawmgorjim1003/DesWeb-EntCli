"use strict"
{
    let actualDate = new Date();
    console.log(actualDate);
    actualDate.setSeconds(actualDate.getSeconds()+1);
    console.log(`La hora mas un segundo es ${actualDate}`);  
}
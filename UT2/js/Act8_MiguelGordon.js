"use strict" 
{
    document.addEventListener('dblclick',(e) => {
      let colorOne =  Math.round(Math.random()*255);
      let colorTwo = Math.round(Math.random()*255);
      let colorThree = Math.round(Math.random()*255);
      document.body.style.backgroundColor = `rgb(${colorOne},${colorTwo},${colorThree})`;
    });
}
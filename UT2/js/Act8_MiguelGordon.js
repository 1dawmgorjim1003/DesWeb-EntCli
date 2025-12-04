"use strict" 
{
  let colours = ['red','blue','orange','yellow','green','black','brown','pink','violet','gray'];
  document.addEventListener('dblclick',(e) => {
    console.log('Doble click');
    let randomNumber = Math.floor(Math.random() * colours.length);
    document.body.style.backgroundColor = colours[randomNumber];
  });
}
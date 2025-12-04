"use strict"
{
  let myP2 = document.createElement('p');
  document.body.appendChild(myP2);
  document.addEventListener('mousemove',(e) => {
      myP2.innerHTML = 'X=' + e.x + ' ; Y=' + e.y;
      myP2.innerHTML += '<br>'+'X=' + e.screenX + ' ; Y=' + e.screenY;
  });
}
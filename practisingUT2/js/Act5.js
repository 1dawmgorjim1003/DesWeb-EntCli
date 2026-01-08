"use strict" 
{
    let p = document.createElement('p');
    document.body.append(p);
    
    document.addEventListener('mousemove', (e) => {
        p.textContent = `X: ${e.screenX} | Y: ${e.screenY}`;
    });
}
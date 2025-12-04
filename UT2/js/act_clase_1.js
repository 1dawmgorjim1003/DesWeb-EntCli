"use strict"
{
    let myH1 = document.createElement('h1');
    let myH3 = document.createElement('h3');
    let myDiv = document.createElement('div');
    let myP1 = document.createElement('p');
    let myP2 = document.createElement('p');
    let myImg = document.createElement('img');
    
    myH1.textContent = 'My H1 Title';
    myH3.textContent = 'My H3 Subtitle';
    myDiv.setAttribute('style','background-color: cyan');
    myP1.textContent = 'My P1 Paragraph';
    myP2.textContent = 'My P2 Paragraph';
    myImg.setAttribute('src','src/img.jpg');
    myImg.setAttribute('width','100px');
    myImg.setAttribute('height','100px');


    document.body.append(myH1);
    myH1.appendChild(myH3);
    myH3.appendChild(myDiv);
    myDiv.appendChild(myP1);
    myDiv.appendChild(myP2);
    myDiv.appendChild(myImg);
    let myH1_v2 = myH1.cloneNode();
    document.body.append(myH1_v2);
}
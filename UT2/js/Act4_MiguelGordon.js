"use strict"
{
  let newBtnBack = document.createElement('button');
  newBtnBack.textContent = 'Reaparecer';
  document.body.appendChild(newBtnBack);
  
  let newPContainer = document.createElement('div');
  document.body.appendChild(newPContainer);

  let newTexts = [
    'Párrafo 1',
    'Párrafo 2',
    'Párrafo 3'
  ];

  let texts = [];

  for (let i = 0; i < 3; i++) {
    let newP = document.createElement('p');
    newP.textContent = newTexts[i];
    newPContainer.appendChild(newP);
    texts.push(newP);

    newP.addEventListener('mouseout', () => {
      newP.classList.add('hidden');
    });

    newP.addEventListener('dblclick', () => {
      newP.remove();
    });
  }


  newBtnBack.addEventListener('click', () => {
    texts.forEach(p => {
      if (document.body.contains(p)) {
        p.classList.remove('hidden');
      }
    });
  });

}
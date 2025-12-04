"use strict"
{
  let newBtnMarked = document.createElement('button');
  newBtnMarked.textContent = 'Marcar todos';
  document.body.appendChild(newBtnMarked);

  let newBtnUnmarked = document.createElement('button');
  newBtnUnmarked.textContent = 'Desmarcar todos';
  document.body.appendChild(newBtnUnmarked);
  
  let newBtnEvenValue = document.createElement('button');
  newBtnEvenValue.textContent = 'Ampliar tamaño de checks con value par';
  document.body.appendChild(newBtnEvenValue);
  
  let newBtnOriginalSize = document.createElement('button');
  newBtnOriginalSize.textContent = 'Volver al tamaño original de los checks';
  document.body.appendChild(newBtnOriginalSize);

  let newCheckDiv = document.createElement('div');
  newCheckDiv.className = 'newCheckDiv';
  document.body.appendChild(newCheckDiv);

  for (let i = 0; i < 100; i++) {
    let newLabel = document.createElement('label');

    let newCheck = document.createElement('input');
    newCheck.type = 'checkbox';

    let randomNumber = Math.floor(Math.random() * (200 - 100 + 1) + 100);
    newCheck.value = randomNumber;

    let labelNumber = document.createElement('span');
    labelNumber.textContent = i;

    newCheck.addEventListener('change', (e) => {
      if (newCheck.checked) {
        console.log(`check${newCheck.value} marcado`);
      } else {
        console.log(`check${newCheck.value} desmarcado`);
      }
    })

    newLabel.appendChild(newCheck);
    newLabel.appendChild(labelNumber);
    newCheckDiv.appendChild(newLabel);
    newCheckDiv.appendChild(document.createElement('br'));
  }

  newBtnMarked.addEventListener('click', () => {
    newCheckDiv.querySelectorAll('input[type=checkbox]')
      .forEach(newCheck => newCheck.checked = true);
  });

  newBtnUnmarked.addEventListener('click', () => {
    newCheckDiv.querySelectorAll('input[type=checkbox]')
      .forEach(newCheck => newCheck.checked = false);
  });

  newBtnEvenValue.addEventListener('click',(e) => {
    newCheckDiv.querySelectorAll('input[type=checkbox]').forEach(newCheck => {
      if (newCheck.value % 2 == 0) {
        newCheck.style.transform = 'scale(1.5)';

      }
    });
  });

  newBtnOriginalSize.addEventListener('click',(e) => {
    newCheckDiv.querySelectorAll('input[type=checkbox]').forEach(newCheck => {
      newCheck.style.transform = '';
    });
  });
}
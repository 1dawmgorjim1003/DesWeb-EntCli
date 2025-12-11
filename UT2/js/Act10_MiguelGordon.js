"use strict" 
{
    let form = document.createElement('form');
    form.action='https://formsubmit.co/mgorjim1003@g.educaand.es';
    form.method='post';

    let input = document.createElement('input');
    input.name='dni';
    input.type='text';

    let br = document.createElement('br');

    let submit = document.createElement('input');
    submit.type='submit';

    let myWarning = document.createElement('p');
    myWarning.textContent = 'El DNI no es válido';
    myWarning.style.color = 'red';

    document.body.appendChild(form);
    form.append(input);
    form.append(br);
    form.appendChild(submit);

    function letterReview(dni) {
      let numbers = dni.substring(0,dni.length-1);
      if (numbers.length !== 8) {
        return false;
      } else {
        let letter = dni.charAt(dni.length-1);
        let IdLetters = ['T','R','W','A','G','M','Y','F','P','D','X',
            'B','N','J','Z','S','Q','V','H','L','C','K','E'];
        let GoodLetter = IdLetters[numbers%23];
        if (GoodLetter == letter) {
          return true;
        } else {
          return false;
        }
      }

    };
    
    input.addEventListener('blur',(e) => {
      if (!letterReview(input.value)) {
        input.insertAdjacentElement('afterend',myWarning);
        setTimeout(() => {
              myWarning.remove();
          },3000);
      }
    });

    form.addEventListener('submit',(e) => {
      e.preventDefault();
      if (letterReview(input.value)) {
        form.submit();
      } else {
        input.insertAdjacentElement('afterend',myWarning);
        setTimeout(() => {
              myWarning.remove();
          },3000);
      }
    });

}
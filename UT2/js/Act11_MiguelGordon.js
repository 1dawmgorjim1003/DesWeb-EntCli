"use strict" 
{
    let listaServidores = ["terra.es", "google.com", "marca.es", "yahoo.es"];

    let form = document.createElement('form');
    form.action = 'https://formsubmit.co/mgorjim1003@g.educaand.es';
    form.method = 'post';

    let input = document.createElement('input');
    input.name = 'email';
    input.type = 'email';
    input.required = true;

    let br = document.createElement('br');

    let submit = document.createElement('input');
    submit.type ='submit';

    let myWarning = document.createElement('p');
    myWarning.textContent = 'El EMAIL no es válido';
    myWarning.style.color = 'red';

    document.body.appendChild(form);
    form.append(input);
    form.append(br);
    form.appendChild(submit);

    function reviewEmail(email) {
      let regExp = /^[A-Za-z]{1,}@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i;
      if (regExp.test(email)) {
        let domain = email.split('@')[1].toLowerCase();
        return listaServidores.includes(domain);
      } else {
        return false;
      }
    }

    form.addEventListener('submit', (e) => {
      let email = input.value;

      if (!reviewEmail(email)) {
        e.preventDefault();
        input.insertAdjacentElement('afterend',myWarning);
        myWarning.style.display = 'block';
      }
    });

}
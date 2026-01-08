"use strict"
{
    let listaServidores=["terra.es","google.com","marca.es","yahoo.es"];

    let form = document.createElement('form');
    form.method = 'post';
    form.action = 'https://formsubmit.co/mgorjim1003@g.educaand.es';
    
    let input = document.createElement('input');
    input.type = 'text';
    input.name = 'email';
    input.placeholder = 'Introduzca su email';

    let submit = document.createElement('input');
    submit.type = 'submit';
    submit.value = 'Enviar';

    let p = document.createElement('p');
    p.style.color = 'red';
    p.textContent = 'El email es inválido';
    
    let p2 = document.createElement('p');
    p2.style.color = 'red';
    p2.textContent = 'El servidor es inválido';

    document.body.append(form);
    form.append(input);
    // form.append(document.createElement('br'));
    form.append(submit);

    function validateEmail(email) {
        let regExp = /^[A-Z\.0-9]{2,}@[A-Z]{2,}\.[A-Z]{2,}$/i;
        if (regExp.test(email)) {
            return true;
        }

        return false;
    }

    function validateServer(email) {
        let server = email.split('@')[1].toLowerCase();
        return listaServidores.includes(server);
    }

    form.addEventListener('submit',(e) => {
        e.preventDefault()
        if (validateEmail(input.value) && validateServer(input.value)) {
            form.submit();
        }
        
        if (!validateEmail(input.value)) {
            input.insertAdjacentElement('afterend',p);
            setTimeout(() => p.remove(),3000);
        }
        
        if (!validateServer(input.value)) {
            submit.insertAdjacentElement('beforebegin',p2);
            setTimeout(() => p2.remove(),3000);
        }
    })
}
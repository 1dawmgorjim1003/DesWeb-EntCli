"use strict"
{
    let form = document.createElement('form');
    form.method = 'post';
    form.action = 'https://formsubmit.co/mgorjim1003@g.educaand.es';

    let input = document.createElement('input');
    input.type = 'text';
    input.name = 'DNI';
    input.required = true;

    let submit = document.createElement('input');
    submit.type = 'submit';
    submit.value = 'Enviar';

    let myWarning = document.createElement('p');
    myWarning.textContent = 'El DNI no es válido.'
    myWarning.style.color = 'red';

    document.body.append(form);
    form.append(input);
    form.append(document.createElement('br'));
    form.append(document.createElement('br'));
    form.append(submit);

    input.addEventListener('blur',(e) => {
        if (!reviewId(input.value)) {
            input.insertAdjacentElement('afterend',myWarning);
            setTimeout(() => myWarning.remove(),2000);
        }
    });

    form.addEventListener('submit',(e) => {
        e.preventDefault();
        if (!reviewId(input.value)) {
            input.insertAdjacentElement('afterend',myWarning);
            setTimeout(() => myWarning.remove(),2000);
        } else {
            form.submit();
        }
    });

    function reviewId (id) {
        const IdLetters = [
            "T","R","W","A","G","M","Y","F","P","D","X","B",
            "N","J","Z","S","Q","V","H","L","C","K","E"
            ];
        let numbers = id.substring(0,id.length-1);
        let IdGoodLetter = IdLetters[numbers%23];
        
        if (IdGoodLetter === id.charAt(id.length-1)) {
            return true;
        }

        return false;

    }


}
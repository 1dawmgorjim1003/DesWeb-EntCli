"use strict"
{
    let form = document.createElement('form');
    form.method = 'post';
    form.action = 'https://formsubmit.co/mgorjim1003@g.educaand.es';

    let input = document.createElement('input');
    input.type = 'text';
    input.name = 'palabra1';

    let input2 = document.createElement('input');
    input2.type = 'text';
    input2.name = 'palabra2';

    let submit = document.createElement('input');
    submit.type = 'submit';
    submit.value = 'Enviar';

    let p = document.createElement('p');
    p.style.color = 'red';
    p.textContent = 'Las palabras no son anagramas';

    document.body.append(form);
    form.append(input);
    form.append(document.createElement('br'));
    form.append(document.createElement('br'));
    form.append(input2);
    form.append(document.createElement('br'));
    form.append(document.createElement('br'));
    form.append(submit);

    function isAnagrama(word1,word2) {
        if (word1.length > 0 && word2.length > 0) {
              return word1.toLowerCase().split("").sort().join("") === word2.toLowerCase().split("").sort().join("");
        }
    }

    form.addEventListener('submit',(e) => {
        e.preventDefault();
        if (isAnagrama(input.value,input2.value)) {
            form.submit();
        } else {
            submit.insertAdjacentElement('beforebegin',p);
            setTimeout(() => p.remove(),3000);
        }
    })
}
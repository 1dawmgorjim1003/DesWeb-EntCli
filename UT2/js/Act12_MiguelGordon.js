"use strict"
{
    let form = document.createElement('form');
    form.method = 'post';
    form.action = 'https://formsubmit.co/mgorjim1003@g.educaand.es';

    let input = document.createElement('input');
    input.type = 'text';
    input.name ='input';
    input.required = true;
    
    let input2 = document.createElement('input');
    input2.type = 'text';
    input2.name ='input2';
    input2.required = true;

    let button = document.createElement('button');
    button.type = 'submit';
    button.textContent = 'Enviar';

    let myWarning = document.createElement('p');
    myWarning.textContent = 'Las palabras no son anagramas';
    myWarning.style.color = 'red';

    document.body.append(form);
    form.append(input);
    form.append(input2);
    form.append(button);

    function makeSortedWord(word) {
        return word.toLowerCase().replace(/\s+/g, '').split('').sort().join(''); // (*)
    }

    function compareWords(word1,word2) {
        word1 = makeSortedWord(word1);
        word2 = makeSortedWord(word2);
        if (word1.length > 0 && word1 == word2) {
            return true
        } else {
            return false;
        }
    };

    form.addEventListener('submit',(e) => {
        if (!compareWords(input.value,input2.value)) {
            e.preventDefault();
            button.insertAdjacentElement('beforebegin',myWarning);
            myWarning.style.display='block';
        }
    });
}
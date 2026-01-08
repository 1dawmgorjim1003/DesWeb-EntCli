"use strict"
{
    let form = document.createElement('form');
    form.method = 'post';
    form.action = 'https://formsubmit.co/mgorjim1003@g.educaand.es';

    let select1 = document.createElement('select');
    select1.name = 'provincia';

    let option1 = document.createElement('option');
    option1.value = '';
    option1.textContent = 'Select no seleccionado';
    
    let select2 = document.createElement('select');
    select2.name = 'ciudad';

    let option2 = document.createElement('option');
    option2.value = '';
    option2.textContent = 'Select no seleccionado';

    let submit = document.createElement('input');
    submit.type = 'submit';
    submit.value = 'Enviar';

    document.body.append(form);
    form.append(select1);
    select1.append(option1);
    form.append(select2);
    select2.append(option2);
    form.append(document.createElement('br'));
    form.append(submit);

    function loadProvinces() {
        let provincias = ['Alicante','Castellón','Valencia'];
        for (let i = 0; i < 3; i++) {
            let opt = document.createElement('option');
            opt.value = provincias[i];
            opt.textContent = provincias[i];
            select1.append(opt);
        }
    }

    function loadCities(province) {
        reset();
        
        let ciudades1 = ['Alicante Capital','Elche','Orihuela'] ;
        let ciudades2 = ['Castellón Capital','Oropesa','Vinaroz'] ;
        let ciudades3 = ['Valencia Capital','Torrent','Mislata'] ;

        if (province == 'Alicante') {
            createOptions(ciudades1);
            return;
        } else if (province == 'Castellón') {
            createOptions(ciudades2);
            return;
        } else if (province == 'Valencia') {
            createOptions(ciudades3);
            return;
        }
    }

    function createOptions(array) {
        for (let i = 0; i < array.length ; i++) {
            let opt = document.createElement('option');
            opt.innerHTML = '<option value="' + array[i] + '">' + array[i] + '</option>';
            if (array[i] == 'Mislata') {
                opt.selected = true;
            }
            select2.append(opt);
        }
    }

    function reset() {
        select2.length = 1;
        select2.value = "";
    }

    loadProvinces();

    select1.addEventListener('change',(e) => loadCities(select1.value));

    form.addEventListener('submit',(e) => {
        e.preventDefault();
        if (select1.value !== '' && select2.value !== '') {
            form.submit();
        }
    })

}
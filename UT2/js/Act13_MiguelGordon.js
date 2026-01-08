"use strict";
{
    let cities = {
        "Alicante": ["Alicante Capital", "Elche", "Orihuela"],
        "Castellón": ["Castellón Capital", "Oropesa", "Vinaroz"],
        "Valencia": ["Valencia Capital", "Torrent", "Mislata"]
    };

    let form = document.createElement("form");
    form.method = "post";
    form.action = 'https://formsubmit.co/mgorjim1003@g.educaand.es';

    let select1 = document.createElement("select");
    select1.name = "provincia";

    let option = document.createElement("option");
    option.value = "";
    option.textContent = "Select no seleccionado";
    option.selected = true;
    select1.appendChild(option);

    ["Alicante", "Castellón", "Valencia"].forEach((p) => {
        let opt = document.createElement("option");
        opt.value = p;
        opt.textContent = p;
        select1.appendChild(opt);
    });

    let select2 = document.createElement("select");
    select2.name = "ciudad";

    function cityReset() {
        select2.textContent = "";
        let opt = document.createElement("option");
        opt.textContent = "Select no seleccionado";
        opt.selected = true;
        select2.appendChild(opt);
    }

    function loadCities(prov) {
        cityReset();
        if (!prov) {
            return;
        } else {
            cities[prov].forEach((c) => {
                let opt = document.createElement("option");
                opt.value = c;
                opt.textContent = c;
                select2.appendChild(opt);
            });
            if (prov === "Valencia") {
                select2.value = "Mislata";
            }
        }
    }

    cityReset();

    let btn = document.createElement("button");
    btn.type = "submit";
    btn.textContent = "Enviar";

    let myWarning = document.createElement("p");
    myWarning.textContent = "Debes seleccionar una provincia y una ciudad";
    myWarning.style.color = "red";
    myWarning.style.display = "none";

    document.body.append(form);
    form.append(select1);
    form.append(select2);
    form.append(btn);

    select1.addEventListener("change", () => {
        loadCities(select1.value);
    });

    form.addEventListener("submit", (e) => {
        if (!select1.value || !select2.value) {
            e.preventDefault();
            btn.insertAdjacentElement('beforebegin',myWarning);
            myWarning.style.display = "block";
        } 
    });
}

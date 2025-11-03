"use strict"
{
    let machine = ['Piedra','Papel','Tijeras'];
    let condition = false;
    do {
        let play = prompt('Indica tu jugada: ');
        let machineNum = Math.floor(Math.random()*3);
        if (machine[machineNum] == 'Piedra') {
            if (play == 'Piedra') {
                console.log('Ambos habéis sacado Piedra');
            } else if (play == 'Tijeras') {
                console.log('Has perdido, el oponente sacó Piedra y tu tenías Tijeras.')
                condition = true;
            } else if (play == 'Papel') {
                console.log('Has ganado, el oponente sacó Piedra y tu tenías Papel.')
                condition = true;
            }
        } else if (machine[machineNum] == 'Tijeras') {
            if (play == 'Piedra') {
                console.log('Has ganado, el oponente sacó Tijeras y tu tenías Piedra.');
                condition = true;
            } else if (play == 'Tijeras') {
                console.log('Ambos habeis sacado Tijeras.')
            } else if (play == 'Papel') {
                console.log('Has perdido, el oponente sacó Tijeras y tu tenías Papel.')
                condition = true;
            }
        } else if (machine[machineNum] == 'Papel') {
            if (play == 'Piedra') {
                console.log('Has perdido, el oponente sacó Papel y tu tenías Piedra.');
                condition = true;
            } else if (play == 'Tijeras') {
                console.log('Has ganado, el oponente sacó Papel y tu tenías Tijeras.')
                condition = true;
            } else if (play == 'Papel') {
                console.log('Ambos habeis sacado Papel.')
                condition = true;
            }
        }

    } while (condition !== true)
}
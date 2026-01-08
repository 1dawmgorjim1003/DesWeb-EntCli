"use strict"
{
    let imgBall = document.createElement('img');
    imgBall.src = '../../UT2/src/ball.png';
    imgBall.width = '50';
    imgBall.height = '50';
    imgBall.draggable = true;

    let imgBin = document.createElement('img');
    imgBin.src = '../../UT2/src/empty_trash.webp';
    imgBin.width = '100';
    imgBin.height = '100';

    document.body.append(imgBall);
    document.body.append(document.createElement('br'));
    document.body.append(imgBin);

    let draggedElement = '';

    imgBall.addEventListener('drag',(e) => draggedElement = e.target);

    imgBin.addEventListener('dragover',(e) => e.preventDefault());
    
    imgBin.addEventListener('drop',(e) => {
        if (draggedElement == imgBall) {
            imgBin.src = '../../UT2/src/full_trash.png';
            imgBall.remove();
        }
    });
}
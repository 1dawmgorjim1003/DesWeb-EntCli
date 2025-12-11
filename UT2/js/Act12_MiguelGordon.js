"use strict" 
{
  let imgBall = document.createElement('img');
  imgBall.src = 'src/ball.png';
  imgBall.width = '50';
  imgBall.height = '50';
  imgBall.draggable = true;
  imgBall.classList.add('hand');
  document.body.appendChild(imgBall);
  
  document.body.appendChild(document.createElement('br'));
  let imgTrash = document.createElement('img');
  imgTrash.src = 'src/empty_trash.webp';
  imgTrash.width = '100';
  imgTrash.height = '100';
  document.body.appendChild(imgTrash);

  let draggedBox = 0;

  imgBall.addEventListener('dragstart',(e) => {
    draggedBox = e.target;
  });
  imgBall.addEventListener('drag',(e) => {

  });
  imgBall.addEventListener('dragend',(e) => {

  });

  imgTrash.addEventListener('dragenter',(e) => {

  });
  imgTrash.addEventListener('dragleave',(e) => {

  });
  imgTrash.addEventListener('dragover',(e) => {
    e.preventDefault();
  });
  imgTrash.addEventListener('drop',(e) => {
    if (draggedBox === imgBall) {
      imgBall.style.display = 'none';
      imgTrash.src = 'src/full_trash.png';
    }
  });  
  
}
"use strict"
{
    let btn = document.querySelector('#btn');
    const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';
    const imgURL="https://desguacescorpas.com/wp-content/uploads/oKJFo8ipjIEA1vP6AjBJyAVBJdeWXkdkoRnb3NYeH1VGBjQGKZbDJQ.jpg";
    btn.addEventListener('click', e => {
        let myRequest = new Request(corsAnywhere+imgURL);
        fetch(myRequest, {
            method: 'GET',
            headers: new Headers({
                'Access-Control-Allow_Origin': "*",
                'Content-Type': 'application/image'
            })
        }).then(myResponse => {
            console.log(myResponse.status); // CODE'S NUMBER
            console.log(myResponse.statusText); // CODE'S TEXT (OK/NoOK)
            console.log(myResponse.ok); // TRUE or FALSE
            if (myResponse.ok) {
                return myResponse.blob()
            } else {
                throw new Error('Problema accediendo a la URL');
            }
        }).then(myBlob => {
            console.log(myBlob);
            let img = document.createElement('img');
            img.src = URL.createObjectURL(myBlob);
            document.body.append(img);
        }).catch(error => {
            console.log('ERROR: ' + error);
        }) 
    });
}
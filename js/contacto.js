let form = document.querySelector('form');

form.addEventListener('submit', function (evento){
    evento.preventDefault();
    let nombre = document.getElementById('txtNombre').value;

    let email = document.getElementById('txtEmail').value;

    let comentarios = document.getElementById('txtComentarios').value;
    let data = {
        nombre: nombre, 
        email: email,
        comentarios: comentarios,      
    };
    console.log(data); 

 let dataJSON = JSON.stringify(data); // convierte el objeto a un strin JSON // 

    console.log(dataJSON);
});
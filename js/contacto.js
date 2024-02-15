// 1. obtengo el tag al que le doy un evento
let enviarDatos = document.getElementById('enviarDatos');

let mail_array = []


// 2. Le asigno una escucha al evento que quiero que se realice
//addEventListener es un callback
enviarDatos.addEventListener('click', (e) => {
    
    e.preventDefault()

    let formulario = document.getElementById('form')

    let name = document.getElementById('name').value;
    let lastName = document.getElementById('lastName').value;
    let email  = document.getElementById('email').value;
    let subject = document.getElementById('subject').value;
    let msg = document.getElementById('msg').value;

    let mail = {
        nombre: name,
        apellido: lastName,
        email: email,
        asunto: subject,
        mensaje: msg
    }

    console.log(mail);

    mail_array.push(mail);
    //setear los datos en el local storage

    localStorage.setItem('mails', JSON.stringify(mail_array));

    console.log(mail_array);
    alert('Esta función me enviará un mail en el futuro')
    formulario.reset()
});


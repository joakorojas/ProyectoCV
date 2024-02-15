



const login = () => {
    let user = document.getElementById('user').value;
    let password = document.getElementById('password').value;

    let form = document.getElementById('formLogin')

    //console.log(`El usuario es ${user} con contraseña ${password}`)

    let auth_user = 'admin';
    let auth_password = 'admin';
    
    if (user == auth_user & password == auth_password){
        localStorage.setItem('admin', JSON.stringify(auth_user))
        location.href = 'index.html'
    }
    else{
        alert('Usuario y/o contraseña incorrectos')
    }
    form.reset();
    
}
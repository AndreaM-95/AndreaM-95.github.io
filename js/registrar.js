const btnRegistrar = document.querySelector('.btn');
btnRegistrar.addEventListener('click', function registroUser(evento){
    evento.preventDefault();

    var nombre = document.getElementById('name').value; 
    var email = document.getElementById('email').value;
    var username = document.getElementById('username').value;
    var contrasena = document.getElementById('password').value;
    
    if(nombre == "" || email == "" || username=="" || contrasena==""){                  //Si la tarea o la fecha está vacío mande la alert y retorne al inicio
        Swal.fire({
            text:'¡No se permiten campos vacíos!',
            icon:'warning',
            confirmButtonText: '¡Entendido!',
            timer: 10000,
            timerProgressBar: true,
            background:'#B7E6F4',
            color: 'black',
            allowOutsideClick: false,    //No deja que el usuario de click afuera de la alerta
            confirmButtonColor: '#0B7C83',
        });
        return;
    } else{
        var registro = {
            name: nombre,
            email: email,
            username: username,
            password: contrasena
        }
    
        var json = JSON.stringify(registro);
        localStorage.setItem(username, json);

        Swal.fire({
        text:'¡Registro exitoso!',
        icon:'success',
        confirmButtonText: 'Genial!',
        timer: 10000,
        timerProgressBar: true,
        background:'#B7E6F4',
        color: 'black',
        allowOutsideClick: false,    //No deja que el usuario de click afuera de la alerta
        confirmButtonColor: '#0B7C83',
        });
    }
});



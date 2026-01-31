const btnRegistrar = document.querySelector('.btn');
btnRegistrar.addEventListener('click', function registroUser(evento){
    evento.preventDefault();

    let nombre = document.getElementById('name').value; 
    let email = document.getElementById('email').value;
    let username = document.getElementById('username').value;
    let contrasena = document.getElementById('password').value;
    
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
        //Validar si el usuario ya existe
        let usuarioExistente = localStorage.getItem(username);
        if(usuarioExistente){
            Swal.fire({
                text:'¡El nombre de usuario ya existe, por favor elige otro!',
                icon:'error',
                confirmButtonText: '¡Entendido!',
                timer: 10000,
                timerProgressBar: true,
                background:'#B7E6F4',
                color: 'black',
                allowOutsideClick: false,
                confirmButtonColor: '#0B7C83',
            });
            return;
        }

        //Validar la longitud de la contraseña
        if(contrasena.length < 6){
            Swal.fire({
                text:'¡La contraseña debe tener al menos 6 caracteres!',
                icon:'error',
                confirmButtonText: '¡Entendido!',
                timer: 10000,
                timerProgressBar: true,
                background:'#B7E6F4',
                color: 'black',
                allowOutsideClick: false,
                confirmButtonColor: '#0B7C83',
            });
            return;
        }
        
        let registro = {
            name: nombre,
            email: email,
            username: username,
            password: contrasena
        }
    
        let json = JSON.stringify(registro);
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

        //Limpiar los campos del formulario
        document.getElementById('name').value = "";
        document.getElementById('email').value = "";
        document.getElementById('username').value = "";
        document.getElementById('password').value = "";
    }
});



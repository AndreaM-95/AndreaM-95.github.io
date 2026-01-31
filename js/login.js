const btnIngresar = document.querySelector('.btn-login');
btnIngresar.addEventListener('click', function ingreso(e){
    e.preventDefault();
    
    var username = document.getElementById('username').value;
    var contrasena = document.getElementById('password').value;
    var resultado = document.getElementById('result');


    var registro = localStorage.getItem(username);
    var data = JSON.parse(registro);
    console.log(data)

    if(registro == null){
        Swal.fire({
            text:'¡Datos incorrectos!',
            icon:'warning',
            confirmButtonText: '¡Entendido!',
            timer: 10000,
            timerProgressBar: true,
            background:'#B7E6F4',
            color: 'black',
            allowOutsideClick: false,    //No deja que el usuario de click afuera de la alerta
            confirmButtonColor: '#0B7C83',
        });
    } else if(username == data.username && contrasena == data.password){
        redireccion();
    }else{
        Swal.fire({
            text:'¡Datos incorrectos!',
            icon:'warning',
            confirmButtonText: '¡Entendido!',
            timer: 10000,
            timerProgressBar: true,
            background:'#B7E6F4',
            color: 'black',
            allowOutsideClick: false,    //No deja que el usuario de click afuera de la alerta
            confirmButtonColor: '#0B7C83',
        });
    }
});

function redireccion(){
    location.href = "productos.html"
}
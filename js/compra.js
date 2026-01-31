const compra = new Carrito();
const listaCompra = document.querySelector("#lista-compra tbody");
const carrito = document.getElementById('carrito');
const procesarCompraBtn = document.getElementById('procesar-compra');
const cliente = document.getElementById('cliente');
const correo = document.getElementById('correo');

cargarEventos();

function cargarEventos() {
    document.addEventListener('DOMContentLoaded', compra.leerLocalStorageCompra());

    //Eliminar productos del carrito
    carrito.addEventListener('click', (e) => { compra.eliminarProducto(e) });

    compra.calcularTotal();

    //cuando se selecciona procesar Compra
    procesarCompraBtn.addEventListener('click', procesarCompra);

    carrito.addEventListener('change', (e) => { compra.obtenerEvento(e) });
    carrito.addEventListener('keyup', (e) => { compra.obtenerEvento(e) });

}

function procesarCompra(e) {
    e.preventDefault();
    if (compra.obtenerProductosLocalStorage().length === 0) {
        Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'No hay productos, selecciona alguno',
            showConfirmButton: false,
            timer: 2000
        }).then(function () {
            window.location = "index.html";
        })
    }
    else if (cliente.value === '' || correo.value === '') {
        Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'Ingrese todos los campos requeridos',
            confirmButtonText: '¡Entendido!',
            showConfirmButton: false,
            confirmButtonColor: '#0B7C83',
            timer: 2000
        })
    }

    else if (compra.obtenerProductosLocalStorage().length > 0) {
        Swal.fire({
            text:'¡Compra realizada con éxito! Ya puedes acercarte a uno de nuestros puntos para recoger tu pedido.',
            icon:'success',
            confirmButtonText: '¡Entendido!',
            timer: 10000,
            timerProgressBar: true,
            background:'#fff',
            color: 'black',
            allowOutsideClick: false,    //No deja que el usuario de click afuera de la alerta
            confirmButtonColor: '#0B7C83',
        })
    }
}

function generarTabla(productosLS) {
    let div = document.createElement("div");

    let tabla = document.createElement("table");
    
    tabla.innerHTML += `<table class="table">
                        <thead>
                            <tr class="fila-box">
                                <th scope="col" class="fila-dato">Nombre</th>
                                <th scope="col" class="fila-dato">Precio</th>
                                <th scope="col" class="fila-dato">Cantidad</th>
                                <th scope="col" class="fila-dato">Sub total</th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>`;

    const body = tabla.childNodes[3];

    // productosLS = compra.obtenerProductosLocalStorage();
    productosLS.forEach(producto => {
        const row = document.createElement("tr");
        row.innerHTML += `
                            <td>${producto.titulo}</td>
                            <td>${producto.precio}</td>
                            <td>${producto.cantidad}</td>
                            <td>${producto.precio * producto.cantidad}</td>
                        `;
        body.appendChild(row);
    });

    tabla.appendChild(body);
    div.appendChild(tabla);
    return div;
}
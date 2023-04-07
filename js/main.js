const carrito = []

const prendas = [{
        codigo: 1,
        tipo: 'Remera rosa',
        precio: 2500
    },
    {
        codigo: 2,
        tipo: 'Campera y Pantalon de Cuero',
        precio: 7399
    },
    {
        codigo: 3,
        tipo: 'Buzo y Babucha Blanco',
        precio: 6690
    },
    {
        codigo: 4,
        tipo: 'Buzo Gris y Pantalón de jean',
        precio: 8900
    },
    {
        codigo: 5,
        tipo: 'Tacos Azul Oscuro',
        precio: 4500
    },
    {
        codigo: 6,
        tipo: 'Abrigo Gadget color negro',
        precio: 5699
    },
    {
        codigo: 7,
        tipo: 'Campera y Pantalon Tela Teddy',
        precio: 6999
    },
    {
        codigo: 8,
        tipo: 'Top Runner',
        precio: 2939
    },
    {
        codigo: 9,
        tipo: 'Blazer y Pollera a Cuadros Azul',
        precio: 5899
    },
    {
        codigo: 10,
        tipo: 'Tacos Zara color negro',
        precio: 8745
    }
]

const segundoMensaje = "Elija su medio de pago, si es efectivo tendra un 10% de descuento!. \n" +
    "1) Efectivo / debito \n" +
    "2) Tarjeta de credito \n"

function buscarPrenda(codigo) {
    let resultado = prendas.find(prenda => prenda.codigo === parseInt(codigo))
    return resultado
}

function comprar() {
    let codigo = prompt("Selecciona tu prenda por el código numérico:")
    let prendaElegida = buscarPrenda(codigo)
    if (prendaElegida === undefined) {
        alert("⛔️ Error en el código ingresado.")
        return
    } else {
        carrito.push(prendaElegida)
        alert(`La prenda ${prendaElegida.tipo} se ha agregado al carrito.`)
        let respuesta = confirm("¿Deseas llevar otra prenda?")
        if (respuesta) {
            comprar()
        } else {
            /*
            Hola Bruno,como estas, te mando este mensaje xq quise hacer este prompt pero no pude definirlo bien y a tiempo, si me pudieras ayudar lo agradeceria y si tengo una mala nota, lo volveria a reentregar
            Espero que entiendas mi idea, es decir, quiero que luego de llenar el carrito el usuario decida si quiere pagar en efectivo (se le hace 10% de descuento) y si lo hace con tarjeta queda el precio final sin ningun descuento
            Seguramente tengo incompleto y sea una nota baja, avisame y ver como puedo hacer para reentregar y subir la nota, saludos
            */
            /*medioPago = parseInt(prompt(segundoMensaje))
                if (medioDePago !== 1 && medioDePago !== 2){
                    alert ("Ingresa un dato válido, por favor")
                }
                if (medioDePago == 1){
                    let mensaje = `Haz seleccionado: ${carrito.tipo}'. Valor del mercado: $ ${carrito.precio * 0.9}`
                    alert(mensaje)
                }
                else{
                    let mensaje = `Haz seleccionado: ${carrito.tipo}'. Valor del mercado: $ ${carrito.precio}`
                    alert(mensaje)
                }*/
            finalizarCompra()
        }
    }
}

function verCarrito() {
    if (carrito.length > 0) {
        console.table(carrito)
    } else {
        console.warn("El carrito está vacío!")
    }
}

let costoTotal = 0

function finalizarCompra() {
    if (carrito.length === 0) {
        console.warn("El carrito está vacío!")
        return
    }
    const shopping = new Compra(carrito)
    const medioDePago = parseInt(prompt(segundoMensaje))

    if (medioDePago !== 1 && medioDePago !== 2) {
        alert("Ingresa un dato valido, por favor")
        return
    }


    costoTotal = shopping.obtenerSubtotal()
    if (medioDePago == 1 ){
        costoTotal = (costoTotal * 0.9).toFixed(2)
    }

    alert(`El costo total es de $ ${costoTotal}`)
    let respuesta = confirm("¿Deseas confirmar tu pago?")
    if (respuesta) {
        alert(shopping.confirmarCompra())
        carrito.length = 0
    }
}
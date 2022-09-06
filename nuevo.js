let arrayLista = ["1:Titan", "2:Pitufa", "3:Roquefeler"]
let totalCompra = 0
const seleccionarHamburguesa = parseInt(prompt('Ingrese el tipo de hamburguesa que desee: ' + arrayLista))
let comprar = true
let decision

class producto {
    constructor (precio){
        this.precio = precio;
    }
}

let producto1 = new producto(200)
let producto2 = new producto(300)
let producto3 = new producto(400)
let producto4 = new producto(500)


while (comprar === true){
    if(seleccionarHamburguesa === 1){
        totalCompra = totalCompra + producto1.precio
    }else if(seleccionarHamburguesa === 2){
        totalCompra = totalCompra + producto2.precio
    }else if(seleccionarHamburguesa === 3){
        totalCompra = totalCompra + producto3.precio
    }else if(seleccionarHamburguesa === 4){
        totalCompra = totalCompra + producto4.precio
    } else{
        seleccionarHamburguesa = parseInt(prompt('Ingresa una opcion correcta 1:Titan 2:Pitufa 3:Roquefeler 4:Wolter'))
        continue
    }
    
    arrayLista.push("4:Wolter")

    decision = parseInt(prompt('Quieres seguir agregando productos? 1:Si 2:No'))
    if (decision === 1){
        seleccionarHamburguesa = parseInt(prompt('Ingrese el tipo de hamburguesa que desee:' + arrayLista))
    } else if (decision === 2){
        comprar = false
    }
}

alert('el valor es de: '+totalCompra)

function calcularPrecioConDescuento(valor){
let descuento = 0
if(valor <= 800){
    descuento = 0
}else if(valor >800 && valor <= 1200){
    descuento = 3
}else if(valor >1200 && valor <= 1600){
    descuento = 5
}else {
    descuento = 7
}

let valorDescuento = valor *(descuento/100)
valor = valor - valorDescuento
return valor

}
let valorConDescuento = calcularPrecioConDescuento(totalCompra)
alert('el valor con descuento es de '+valorConDescuento)

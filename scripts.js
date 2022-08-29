let totalCompra = 0
const seleccionarHamburguesa = parseInt(prompt('Ingrese el tipo de hamburguesa que desee: 1:Titan 2:Pitufa 3:Roquefeler 4:Wolter'))
let comprar = true
let decision


while (comprar === true){
    if(seleccionarHamburguesa === 1){
        totalCompra = totalCompra + 500
    }else if(seleccionarHamburguesa === 2){
        totalCompra = totalCompra + 600
    }else if(seleccionarHamburguesa === 3){
        totalCompra = totalCompra + 650
    }else if(seleccionarHamburguesa === 4){
        totalCompra = totalCompra + 700
    } else{
        seleccionarHamburguesa = parseInt(prompt('Ingresa una opcion correcta 1:Titan 2:Pitufa 3:Roquefeler 4:Wolter'))
        continue
    }
    
    decision = parseInt(prompt('Quieres seguir agregando productos? 1:Si 2:No'))
    if (decision === 1){
        seleccionarHamburguesa = parseInt(prompt('Ingrese el tipo de hamburguesa que desee: 1:Titan 2:Pitufa 3:Roquefeler 4:Wolter'))
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


















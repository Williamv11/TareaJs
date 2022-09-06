const productos = ["1:snacks", " 2:fiambres", " 3:rabas", " 4:hamburguesa simple", " 5:hamburguesa completa", " 6:hamburguesa terminator", " 7:jugo", " 8:gaseosa", " 9:cerveza"]
let precioTotal = 0

class Producto{
    constructor(nombre,precio){
        this.nombre = nombre;
        this.precio = precio;
    }
}

let producto1 = new Producto ("snacks", 300)
let producto2 = new Producto ("fiambres", 450 )
let producto3 = new Producto ("rabas", 500)
let producto4 = new Producto ("hamburguesa simple", 400)
let producto5 = new Producto ("hamburguesa completa", 500)
let producto6 = new Producto ("hamburguesa terminator", 650)
let producto7 = new Producto ("jugo", 150)
let producto8 = new Producto ("gaseosa", 200)
let producto9 = new Producto ("cerveza", 300)


let carrito = []

let seleccion = prompt("Hola desea ordenar algo? Ingrese si o no")

while(seleccion !== "si" && seleccion !=="no"){
    alert("Por favor ingresa si o no")
    seleccion = prompt("Hola desea ordenar algo? Ingrese si o no")
}

if(seleccion === "si"){
    alert("A continuacion le mostramos nuestra cartilla")
    alert(productos)

} else if(seleccion === "no"){
    alert("Gracias por venir, vuelvas prontos!!!")
}

while(seleccion !== "no"){
    let productoSeleccionado = prompt("Elije un producto")

    if(productoSeleccionado === 1 ){
        precioTotal = precioTotal + producto1.precio
    } else if (productoSeleccionado === 2) {
        precioTotal = precioTotal + producto2.precio
    } else if(productoSeleccionado === 3){
        precioTotal = precioTotal + producto3.precio
    } else if(productoSeleccionado === 4){
        precioTotal = precioTotal + producto4.precio
    } else if(productoSeleccionado = 5){
        precioTotal = precioTotal + producto5.precio
    } else if(productoSeleccionado === 6){
        precioTotal = precioTotal + producto6.precio
    } else if(productoSeleccionado === 7){
        precioTotal = precioTotal + producto7.precio
    } else if(productoSeleccionado === 8){
        precioTotal = precioTotal + producto8.precio
    } else if(productoSeleccionado){
        precioTotal = precioTotal + producto9.precio
    } else{
        alert("Disculpe, no tenemos ese producto")
    }
        
        carrito.push({productoSeleccionado})
    

    seleccion = prompt("Desea ordenar algo mas?")
    
    while(seleccion === "no"){
        alert("Gracias, ya le preparamos su orden")
         
            alert(`total a pagar es:` + precioTotal)
         
        break;
    }
}




let carrito = []
let productos = []
const selectTag = document.getElementById('lista')

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

productos.push (producto1.nombre)
productos.push (producto2.nombre)
productos.push (producto3.nombre)
productos.push (producto4.nombre)
productos.push (producto5.nombre)
productos.push (producto6.nombre)
productos.push (producto7.nombre)
productos.push (producto8.nombre)
productos.push (producto9.nombre)

console.log(productos)

productos.forEach(productoss=>{
    const option = document.createElement('option')
    option.innerText = `${productos.nombre}`
    selectTag.append (option)
}
    )
const inputNombre = document.getElementById('nombre')
const inputApellido = document.querySelector('#apellido')
const botonIngresar = document.getElementById('botonIngresar')
const divDatos = document.querySelector('.divDatos')
const divSaludi = document.querySelector('#divSaludo')


botonIngresar.onclick = () => {
    const usuario = {
        nombre: inputNombre.value,
        apellido: inputApellido.value
    }
    localStorage.setItem('usuarioStorage',JSON.stringify(usuario))
    divDatos.remove()
    saludar (usuario)
}

function saludar(user){
    const saludarTitulo = document.createElement('h2')
    saludarTitulo.innerText = `Bienvenido ${user.nombre} ${user.apellido}, que desea ordenar?`
    divSaludo.append(saludarTitulo)

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
    
    productos.push (producto1)
    productos.push (producto2)
    productos.push (producto3)
    productos.push (producto4)
    productos.push (producto5)
    productos.push (producto6)
    productos.push (producto7)
    productos.push (producto8)
    productos.push (producto9)
    
    
    
    productos.findIndex(producto=>{
        const option = document.createElement('option')
        option.innerText = `${producto.nombre}: $${producto.precio}`
        selectTag.append (option)
    })
    
    
    const boton = document.createElement('button')
    boton.innerText = ('AGREGAR PRODUCTO')
    document.body.append(boton)
    
    const boton2 = document.createElement('button')
    boton2.innerText = 'TERMINAR COMPRA'
    document.body.append(boton2)
    
    boton.onclick = ()=>{
    const productoSeleccionado = productos[selectTag.selectedIndex]
    carrito.push(productoSeleccionado)
    }

    boton2.onclick = () =>{
        let totalCompra = 0
        carrito.forEach((prod)=>{
            totalCompra = totalCompra + prod.precio
        })
        alert(`Su cuenta es de ${totalCompra}`)
        }
    
}








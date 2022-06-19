import React, { useState, useEffect } from "react"

// El componente Item no tiene componentes hijos.
// ESTADO: Item debe tener un número para almacenar la cantidad de stock, la misma se la defina el padre a la hora de crearlo.
// MÉTODOS: Item debe manejar el click de su boton para restar la cantidad en stock de sí mismo y a su vez poder aumentar el estado de su "abuelo" App.
// PROPS: Item recibe todos los campos que muestra en pantalla: nombre, descripcion, stock y el métodos heredados para su uso.
// Maqueta de Item:
//    h3
//    p
//    h5 > span    (este span debe mostrar la cantidad si es mayor a 0 "agotado" si llega a 0)
//    button       (este boton debe permitir comprar, pero si la cantidad es menor a 0 debe estar deshabilitado y decir "Sin stock")

/*    <h3>Nombre de producto</h3>
      <p>descripcion del producto </p>
      <h5>stock</h5>
      <span>en caso de estar agotado lo muestro</span>
      <button>de comprar, cuando se acabe stck no es clickeable</button> 
*/

export default function Item({producto, setCount}) {

  const [num, setNum] = useState()

  useEffect(() => {
    setNum(producto.stock)
  }, [producto.stock])

  const manejadorStock = () => {
    if(num > 0) {
      setCount(prevState => prevState + 1)
      setNum(prevState => prevState - 1)
    }
  }
  return (
    <div className='producto'>
      <h2>{producto.producto.nombre}</h2>
      <p>{producto.producto.descripcion}</p>
      <img src={producto.producto.imagen} alt=""></img>
      <h5>STOCK: {num === 0 ? <span className='stockProductos'>SIN STOCK</span> : num } </h5>
      <button className={num === 0 ? 'sinStock' : 'comprar'} onClick={() => manejadorStock()}>{num === 0 ? 'SIN STOCK' : 'COMPRAR'}</button>
    </div>
  )
}

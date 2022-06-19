import React from 'react'

// El componente Cabera no tiene componentes hijos.
// ESTADO: Cabecera no tiene estado.
// MÉTODOS: Cabecera no tiene métodos.
// PROPS: Cabecera recibe de su padre la cantidad que va a mostrar dentro del span correpondiente
// Maqueta de Cabecera:
//    h1
//    p > span     (el span mostrará la cantidad recibida por props)

export default function Cabecera({count}) {
  
  return (
    <header>
      <h1>TU CARRITO</h1>
      <p>TOTAL: <span>{count}</span></p>
        {/* maquetar Cabecera aquí */}
    </header>
  )
}

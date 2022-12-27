import React from 'react'
import {useState} from 'react'
import Delete from './images/delete.png'

export const CartProduct = ({data}) => {
  
  let {nombre, precio, foto, id}=data
  
  const [cantidad, setCantidad]=useState(1)

  const sumador =(e)=>{
    setCantidad(cantidad+1);
  }
  const restart =(e)=>{
      (cantidad > 0) && setCantidad(cantidad-1);   
  }


return (
  <div className='cartshop'>

  <div>
    <h3>Producto:</h3>
    <img src={foto} alt={nombre} />
  </div>

  <div>
    <h3>{nombre}</h3>
    <h3>Precio:</h3>
    <h3>Cantidad:</h3>
  </div>

  <div>
    <img src={Delete} alt="Icono de borrado" />
    <h3>$ {precio} cop</h3>
    <div className='contador'>
      <button onClick={sumador}>+</button>
      <h3>{cantidad}</h3>
      <button onClick={restart}>-</button>
    </div>
  </div>

</div>
)
}

import React, { useContext } from 'react'
import {useState} from 'react'
import StateContext from './context/StateProvider'
import Delete from './images/delete.png'
import { TYPES } from './shoppingActions'

export const CartProduct = ({data}) => {
  
  let {nombre, precio, foto, id, qty}=data
  
  const {state,dispatch} = useContext(StateContext)


  const sumador =(e)=>{
    dispatch({type:TYPES.ADD_PRODUCT_QUANTITY, payload:id})
  }
  const restart =(e)=>{
    if (qty>0) {
      dispatch({type:TYPES.REMOVE_ONE_FROM_CART, payload:id})
    }
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
      <h3>{qty}</h3>
      <button onClick={restart}>-</button>
    </div>
  </div>

</div>
)
}

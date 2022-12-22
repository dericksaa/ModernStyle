import React from 'react'
import Delete from './images/delete.png'
import  './CartShop.css';


const CartShop = () => {
  return (
  <div className='Cartshop'>
    <div className='head'>
      <h3>Producto:</h3>
      <img src="" alt="" />
      <h3>Kit Kabuki</h3>
      <img src={Delete} alt="Icono de borrado" />
    </div>

  </div>
  )
}

export default CartShop
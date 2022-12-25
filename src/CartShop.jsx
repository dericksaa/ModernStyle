import React from 'react'
import {useState} from 'react'
import Delete from './images/delete.png'
import kabuki from './images/kabuki.png';
import  './CartShop.css';
import { NavLink } from 'react-router-dom';
import { CartProduct } from './CartProduct';


const CartShop = () => {


  return (
  <div className='shop'>
    <CartProduct/>
    <div className='resume'>
      <h2>Resumen</h2>
      <h3>total:     45000cop</h3>
      <NavLink to='/MakeUp'><button>Finalizar compra</button>
      </NavLink>
    </div>
    <NavLink to='/MakeUp'><button className='lastbutton'>Seguir comprando</button>
    </NavLink>
  </div>
  )
}

export default CartShop
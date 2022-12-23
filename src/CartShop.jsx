import React from 'react'
import {useState} from 'react'
import Delete from './images/delete.png'
import kabuki from './images/kabuki.png';
import  './CartShop.css';
import { NavLink } from 'react-router-dom';


const CartShop = () => {

  const [cantidad, setCantidad]=useState(1)

  const sumador =(e)=>{
    setCantidad(cantidad+1);
  }
  const restart =(e)=>{
      (cantidad > 0) && setCantidad(cantidad-1);   
  }

  return (
    <div className='shop'>
  <div className='cartshop'>

    <div>
      <h3>Producto:</h3>
      <img src={kabuki} alt="" />
    </div>

    <div>
      <h3>Kit Kabuki</h3>
      <h3>Precio:</h3>
      <h3>Cantidad:</h3>
    </div>

    <div>
      <img src={Delete} alt="Icono de borrado" />
      <h3>15000 cop</h3>
      <div className='contador'>
        <button onClick={sumador}>+</button>
        <h3>{cantidad}</h3>
        <button onClick={restart}>-</button>
      </div>
    </div>

  </div>
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
import  './CartShop.css';
import { NavLink } from 'react-router-dom';
import { CartProduct } from './CartProduct';
import Product from './Product';
import { useReducer } from 'react';
import { productStore, shopingReducer } from './productStore';


const CartShop = () => {

  const [state, dispatch] = useReducer( shopingReducer, productStore )
  const {cart}=state
  return (
  <div className='shop'>
    {
        cart.map(prodcar=>(
        <CartProduct key={prodcar.id} nombre={prodcar.nombre} precio={prodcar.precio}
        foto={prodcar.foto}/>
      ))
    }
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

export {CartShop}

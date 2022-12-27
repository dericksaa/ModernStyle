import  './CartShop.css';
import { NavLink } from 'react-router-dom';
import { CartProduct } from './CartProduct';
import { useReducer } from 'react';
import { productStore, shopingReducer } from './productStore';
import { useAppContext } from './productStore';


const CartShop = () => {


  const [state, dispatch] = useReducer( shopingReducer, productStore )
  const {cart}=state
  console.log('state cartshop', state);

  return (
  <div className='shop'>
    {
        cart.map((item, index)=>
        <CartProduct key={item.id} data={item}/>
      )
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

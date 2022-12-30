import  './CartShop.css';
import { NavLink } from 'react-router-dom';
import { CartProduct } from './CartProduct';
import { useContext } from 'react';
import StateContext from './context/StateProvider';


const CartShop = () => {

  const {state} = useContext(StateContext)

  const getTotal = ()=>{
    let result = 0
    for (let index = 0; index < state.cart.length; index++) {
      const element = state.cart[index];
      result=result+element.precio*element.qty
    }
    return result
  }

  return (
  <div className='shop'>
    {
        state.cart.map((item, index)=>
        <CartProduct key={item.id} data={item}/>
      )
    }
    <div className='resume'>
      <h2>Resumen</h2>
      <h3>$ {getTotal()} Cop</h3>
      <NavLink to='/FormCompra'><button>Finalizar compra</button>
      </NavLink>
    </div>
    <NavLink to='/MakeUp'><button className='lastbutton'>Seguir comprando</button>
    </NavLink>
  </div>
  )
}

export {CartShop}

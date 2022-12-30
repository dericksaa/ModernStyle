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

  const formatterPeso = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
  })

  const emptyCart = ()=>{
    if(getTotal()==0){
      return '/Shop'
    }else{
      return ('/FormCompra')
    }
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
      <h3>{formatterPeso.format(getTotal())}</h3>
      <NavLink to={emptyCart()}><button>Finalizar compra</button>
      </NavLink>
    </div>
    <NavLink to='/MakeUp'><button className='lastbutton'>Seguir comprando</button>
    </NavLink>
  </div>
  )
}

export {CartShop}

import  './CartShop.css';
import { NavLink } from 'react-router-dom';
import { CartProduct } from './CartProduct';
import { useContext } from 'react';
import StateContext from './context/StateProvider';


const CartShop = () => {
  // importamos el contexto para renderizar los productos
  //  que se han añadido al carrito de compras 

  const {state} = useContext(StateContext)
  // definimos la función getTotal para realizar la suma de los precios de los productos y las cantidades del mismo 
  
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
  // emptyCart la utilizamos para que el botón de finalizar 
  // compra nos redirige al formulario solo si el carrito contiene un producto 

  const emptyCart = ()=>{
    if(getTotal()==0){
      return '/Shop'
    }else{
      return ('/FormCompra')
    }
  }
  // retornamos el renderizado de la tarjeta que muestra la información
  // de cada unos de los productos en el carrito de compras y el resumen de la compra

  return (
  
    <div className='shop'>
    <div>
    {
        state.cart.map((item, index)=>
        <CartProduct key={item.id} data={item}/>
      )
    }
    </div>
    <div className='finalresumen'>
    <div className='resume'>
      <h2>Resumen</h2>
      <h3>{formatterPeso.format(getTotal())}</h3>
      <NavLink to={emptyCart()}><button>Finalizar compra</button>
      </NavLink>
    </div>
    <NavLink to='/MakeUp'><button className='lastbutton'>Seguir comprando</button>
    </NavLink>
    </div>
    </div>
 
  )
}

export {CartShop}

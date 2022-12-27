import './MakeUpPage.css';
import Product from './Product';
import { NavLink} from 'react-router-dom'
import { useReducer } from 'react';
import { productStore, shopingReducer } from './productStore';
import { TYPES } from './shoppingActions';

function MakeUpPage() {

  const [state, dispatch] = useReducer( shopingReducer, productStore )
  const {ProductsMakeUp}=state

  const addToCart =(id)=>{
    dispatch({type:TYPES.ADD_TO_CART, payload:id})
  }
  const delFromCart =()=>{}
  const clearCart =()=>{}

  return (
    <div className="App">
      <div className='category'>

        <button><NavLink
          className='CF' to='/MakeUp'>
          Maquillaje</NavLink>
        </button>
        
        <button><NavLink className='CF' to='/SkinCare'>
          Cuidado Facial</NavLink>
        </button>
        
      </div>
      {
        ProductsMakeUp.map(product=>(
          <Product key={product.id} data={product} addToCart={addToCart}/>
        ))
      }
    </div>
  );
}



export  {MakeUpPage}
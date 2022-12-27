import './MakeUpPage.css';
import Product from './Product';
import { NavLink} from 'react-router-dom'
import { useReducer } from 'react';
import {productStore, shopingReducer } from './productStore';

function SkinCare() {

  const [state, dispatch] = useReducer( shopingReducer, productStore)
  const {ProductsSkinCare}=state

  const addToCart =()=>{}
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
        ProductsSkinCare.map(product=>(
          <Product key={product.id} data={product} addToCart={addToCart} />
        ))
      }
    </div>
  );
}

export default SkinCare;
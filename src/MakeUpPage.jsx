import './MakeUpPage.css';
import Product from './Product';
import { NavLink} from 'react-router-dom'
import { useReducer } from 'react';
import { productStore, shopingReducer } from './productStore';


function MakeUpPage() {

  const [state, dispatch] = useReducer( shopingReducer, productStore )
  const {ProductsMakeUp}=state

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
        ProductsMakeUp.map(product=>(
          <Product key={product.id} nombre1={product.nombre} 
          precio={product.precio} foto={product.foto} id={product.id}/>
        ))
      }
    </div>
  );
}

export default MakeUpPage;

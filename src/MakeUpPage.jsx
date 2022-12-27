import './MakeUpPage.css';
import Product from './Product';
import { NavLink} from 'react-router-dom'
import { useContext, useReducer } from 'react';
import StateContext from './context/StateProvider';

function MakeUpPage() {

  const {state} = useContext(StateContext)

  
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
        state.ProductsMakeUp.map(product=>(
          <Product key={product.id} data={product}/>
        ))
      }
    </div>
  );
}



export  {MakeUpPage}
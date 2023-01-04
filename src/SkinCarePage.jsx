import './MakeUpPage.css';
import Product from './Product';
import { NavLink} from 'react-router-dom'
import { useContext } from 'react';
import StateContext from './context/StateProvider';
// Funciona de la misma manera que makeUpPage. solo que renderiza los elementos de skincare del estado inicial 
function SkinCare() {


  const {state} = useContext(StateContext)


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
        state.ProductsSkinCare.map(product=>(
          <Product key={product.id} data={product}/>
        ))
      }
    </div>
  );
}

export default SkinCare;
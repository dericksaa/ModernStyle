import './MakeUpPage.css';
import Product from './Product';
import { NavLink} from 'react-router-dom'
import { useContext, useReducer } from 'react';
import StateContext from './context/StateProvider';

function MakeUpPage() {

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
      {/* contiene una de las 2 secciones de la página, renderiza el 
      componente producto para cada uno de los productos que se 
      encuentran en el estado inicial dentro de esta categoría  */}
      <div className='cards'>{
        state.ProductsMakeUp.map(product=>(
          <Product key={product.id} data={product}/>
        ))
      }
      </div>
      
    </div>
  );
}



export  {MakeUpPage}
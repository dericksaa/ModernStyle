import './MakeUpPage.css';
import Product from './Product';
import { NavLink} from 'react-router-dom'
import { ProductsMakeUp } from "./ProductsMakeUp.js";

function MakeUpPage() {
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
          precio={product.precio} foto={product.foto}/>
        ))
      }
    </div>
  );
}

export default MakeUpPage;

 // style={({isActive})=>({
          //   backgroundColor: isActive? 'red':'blue'
          // })}
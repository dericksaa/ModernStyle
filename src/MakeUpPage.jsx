import './MakeUpPage.css';
import Product from './Product';
import { ProductsMakeUp } from "./ProductsMakeUp.js";

function MakeUpPage() {
  return (
    <div className="App">
      <div className='category'>
        <button id='maquillaje'>Maquillaje</button>
        <button>Cuidado Facial</button>
      </div>
      {
        ProductsMakeUp.map(product=>(
          <Product key={product.id} product={product} />
        ))
      }
    </div>
  );
}

export default MakeUpPage;
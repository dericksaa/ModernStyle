import './MakeUpPage.css';
import Product from './Product';
import { ProductsSkinCare } from "./ProductsSkinCare";

function SkinCare() {
  return (
    <div className="App">
      <div className='category'>
        <button id='maquillaje'>Maquillaje</button>
        <button>Cuidado Facial</button>
      </div>
      {
        ProductsSkinCare.map(product=>(
          <Product key={product.id} product={product} />
        ))
      }
    </div>
  );
}

export default SkinCare;
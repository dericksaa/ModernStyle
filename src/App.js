import './App.css';
import Footer from './Footer';
import Header from './Header';
import Product from './Product';
import { StoreProducts } from "./carac.js";

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='category'>
        <button id='maquillaje'>Maquillaje</button>
        <button>Cuidado Facial</button>
      </div>
      {
        StoreProducts.map(product=>(
          <Product key={product.id} product={product} />
        ))
      }
      <Footer/>
    </div>
  );
}

export default App;

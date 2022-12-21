import React,{useState} from 'react'
import './Product.css'
import kabuki from './images/kabuki.svg';

const Product = ()=>{

    const [cantidad, setCantidad]=useState(0)

    const sumador =(e)=>{
        setCantidad(cantidad+1);
    }
    const restart =(e)=>{
        (cantidad > 0) && setCantidad(cantidad-1);
        
    }
    return(
        <div className="product">
            <img src={kabuki} alt="prodcuto1" />
            <div className='info_prod'>
                <h3>kit kabuki</h3>
                <h3>$ 15.000 cop</h3>
                <div className='contador'>
                    <button onClick={sumador}>+</button>
                    <h3>{cantidad}</h3>
                    <button onClick={restart}>-</button>
                </div>
                <h3>Agregar</h3>
            </div>

        </div>
    )
}

export default Product
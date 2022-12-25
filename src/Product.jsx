import {useState} from 'react'
import './Product.css'







const Product = ({nombre1, precio, foto, id})=>{

    
    const [cantidad, setCantidad]=useState(0)

    const sumador =(e)=>{
        setCantidad(cantidad+1);
    }
    const restart =(e)=>{
        (cantidad > 0) && setCantidad(cantidad-1);   
    }
    return(
        <div className="product">
            <div className='foto'>
                <img src={foto} alt={nombre1} />
            </div>
            <div className='info_prod'>
                <h3>{nombre1}</h3>
                <h3>{`$ ${precio} cop`}</h3>
                <div className='contador'>
                    <button onClick={sumador}>+</button>
                    <h3>{cantidad}</h3>
                    <button onClick={restart}>-</button>
                </div>
                <button>Agregar</button>
            </div>

        </div>
    )
}

export default Product
import React,{useState} from 'react'
import './Product.css'



const Product = ({product})=>{

    const {nombre, precio, foto} = product

    const [cantidad, setCantidad]=useState(0)
    // const [items, setItems]=useState(carac)
    useState()
    const sumador =(e)=>{
        setCantidad(cantidad+1);
    }
    const restart =(e)=>{
        (cantidad > 0) && setCantidad(cantidad-1);   
    }
    return(
        <div className="product">
            <div className='foto'>
                <img src={foto} alt={nombre} />
            </div>
            <div className='info_prod'>
                <h3>{nombre}</h3>
                <h3>{`$ ${precio} cop`}</h3>
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
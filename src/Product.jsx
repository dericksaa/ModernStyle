import {useContext, useState} from 'react'
import StateContext from './context/StateProvider'
import './Product.css'
import { TYPES } from './shoppingActions'



const Product = ({data})=>{

    const {dispatch} = useContext(StateContext)

    let {nombre, precio, foto, id}=data
    
    const addToCart =(data)=>{
        dispatch({type:TYPES.ADD_TO_CART, payload:data})
    }
    

    return(
        <div className="product">
            <div className='foto'>
                <img src={foto} alt={nombre} />
            </div>
            <div className='info_prod'>
                <h3>{nombre}</h3>
                <h3>{`$ ${precio} cop`}</h3>
                
                <button onClick={()=>addToCart(data)}>Agregar</button>
            </div>

        </div>
    )
}

export default Product
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
    
    const formatterPeso = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
    })

    return(
        <div className="product">
            <div className='foto'>
                <img src={foto} alt={nombre} />
            </div>
            <div className='info_prod'>
                <h3>{nombre}</h3>
                <h3>{formatterPeso.format (precio)}</h3>
                
                <button onClick={()=>addToCart(data)}>Agregar</button>
            </div>

        </div>
    )
}

export default Product
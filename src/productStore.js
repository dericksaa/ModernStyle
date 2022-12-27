import { TYPES } from './shoppingActions';
import kabuki from './images/kabuki.png';
import Sombras from './images/sombras.png';
import Brochas from './images/brochas.png';
import paletTrendy from './images/PaletaTrendy.png';
import sombras2 from './images/sombras2.png';
import MascarillaTrendy from './images/MascarillaTrendy.png'
import puntosnegros from './images/puntosnegros.png'
import colageno from './images/colageno.png'
import tonicorosas from './images/tonicorosas.png'
import acne from './images/acne.png'
import React, { useContext } from "react"
import { useReducer } from 'react';








export const productStore = {
    ProductsMakeUp:[
    {id:1, nombre: 'kit kabuki', precio: 15000, foto:kabuki},
    {id:2, nombre: 'Sombras', precio: 15000, foto:Sombras},
    {id:3, nombre: 'Brochas', precio: 12000, foto:Brochas},
    {id:4, nombre: 'Paleta Trendy', precio: 11000, foto:paletTrendy},
    {id:5, nombre: 'Sombras', precio: 15000, foto:sombras2},
    ],

    ProductsSkinCare:[
    {id:1, nombre: 'Mascarilla Trendy', precio: 18000, foto:MascarillaTrendy},
    {id:2, nombre: 'Puntos Negros', precio: 2000, foto:puntosnegros},
    {id:3, nombre: 'Colageno Labios', precio: 12000, foto:colageno},
    {id:4, nombre: 'Tonico manzanilla y rosas', precio: 11000, foto:tonicorosas},
    {id:5, nombre: 'Sticker acné', precio: 15000, foto:acne},
    ],

    cart:[]
}

const AppContext = React.createContext()

const useAppContext= ()=>{
    return useContext(AppContext)
}

const AppProvider = ({children})=>{

    const [state, dispatch] = useReducer( shopingReducer, productStore )

    return(
        <AppContext.Provider value={{cart: state.cart}}>
            {children}
        </AppContext.Provider>
    )
}

export {
    AppProvider,
    useAppContext

}



export function shopingReducer(state, action){
    switch (action.type) {
        case TYPES.ADD_TO_CART:{
            let newItem = state.ProductsMakeUp.find(prod=> prod.id===action.payload);
            console.log(newItem);
            console.log('state',state)
            return{
                ...state,
                cart:[...state.cart,newItem]
            }
            console.log(productStore.cart);
        }
        case TYPES.REMOVE_ONE_FROM_CART:{

        }
        case TYPES.REMOVE_ALL_FROM_CART:{

        }
        case TYPES.CLEAR_CART:{

        }
        default: return state
    }

}




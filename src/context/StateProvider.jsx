import { createContext, useReducer } from "react";
import { stateReducer } from "../Reducers/stateReducer";
import kabuki from '../images/kabuki.png';
import Sombras from '../images/sombras.png';
import Brochas from '../images/brochas.png';
import paletTrendy from '../images/PaletaTrendy.png';
import sombras2 from '../images/sombras2.png';
import MascarillaTrendy from '../images/MascarillaTrendy.png'
import puntosnegros from '../images/puntosnegros.png'
import colageno from '../images/colageno.png'
import tonicorosas from '../images/tonicorosas.png'
import acne from '../images/acne.png'


const StateContext = createContext()

const StateProvider = ({children})=>{
    const [state, dispatch]=useReducer(stateReducer, {
        ProductsMakeUp:[
        {id:1, nombre: 'kit kabuki', precio: 15000, foto:kabuki},
        {id:2, nombre: 'Sombras', precio: 15000, foto:Sombras},
        {id:3, nombre: 'Brochas', precio: 12000, foto:Brochas},
        {id:4, nombre: 'Paleta Trendy', precio: 11000, foto:paletTrendy},
        {id:5, nombre: 'Sombras', precio: 15000, foto:sombras2},
        ],
    
        ProductsSkinCare:[
        {id:6, nombre: 'Mascarilla Trendy', precio: 18000, foto:MascarillaTrendy},
        {id:7, nombre: 'Puntos Negros', precio: 2000, foto:puntosnegros},
        {id:8, nombre: 'Colageno Labios', precio: 12000, foto:colageno},
        {id:9, nombre: 'Tonico manzanilla y rosas', precio: 11000, foto:tonicorosas},
        {id:10, nombre: 'Sticker acné', precio: 15000, foto:acne},
        ],
    
        cart:[]
    })

    return (
        <StateContext.Provider value={{state,dispatch}}> 
            {children}
        </StateContext.Provider>
    )
}

export{
    StateProvider
}

export default StateContext
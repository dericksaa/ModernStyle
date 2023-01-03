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

// los principales hooks que a utilizar son useReducer y use Context primero creamos el contexto dentro del mismo archivo en el cual tenemos nuestro estado inicial y el cual maneja las funcionalidades a través de los dispatch que queremos tener en todos los componentes de la página donde les llamemos 

const StateContext = createContext()
// Ahora iniciamos el estado de useReducer. 
const StateProvider = ({children})=>{
    // llamamos al reducer que se encuentra en stateReducer y definimos el estado inicial
    // el cual serán los arrays de los productos y el array inicial vacío de carrito de compras 
    const [state, dispatch]=useReducer(stateReducer, {
        ProductsMakeUp:[
        {id:1, nombre: 'kit kabuki', precio: 15000, foto:kabuki},
        {id:2, nombre: 'Sombras Trendy retro', precio: 15000, foto:Sombras},
        {id:3, nombre: 'Kit de Brochas', precio: 12000, foto:Brochas},
        {id:4, nombre: 'Paleta Trendy Cupcake', precio: 11000, foto:paletTrendy},
        {id:5, nombre: 'Sombras feria de las flores', precio: 30000, foto:sombras2},
        ],
    
        ProductsSkinCare:[
        {id:6, nombre: 'Mascarilla Trendy', precio: 18000, foto:MascarillaTrendy},
        {id:7, nombre: 'Mascarilla Puntos Negros', precio: 2000, foto:puntosnegros},
        {id:8, nombre: 'Colageno para labios', precio: 2000, foto:colageno},
        {id:9, nombre: 'Tonico manzanilla y rosas', precio: 25000, foto:tonicorosas},
        {id:10, nombre: 'Sticker para acné', precio: 20000, foto:acne},
        ],
    
        cart:[]
    })
    // retornamos statecontex.provider con los valores del estado inicial y dispatch 
    // para poder hacer actualizaciones de estado en los componentes que lo requieran. 

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
import kabuki from './images/kabuki.png';
import Sombras from './images/sombras.png';
import Brochas from './images/brochas.png';
import paletTrendy from './images/PaletaTrendy.png';
import sombras2 from './images/sombras2.png';
// import { TYPES } from './Actions/shoppingActions';

export const ProductsMakeUp = [
    {
        id:1,
        nombre: 'kit kabuki',
        precio: 15000,
        foto:kabuki
    },
    {
        id:2,
        nombre: 'Sombras',
        precio: 15000,
        foto:Sombras
    },
    {
        id:3,
        nombre: 'Brochas',
        precio: 12000,
        foto:Brochas
    },
    {
        id:4,
        nombre: 'Paleta Trendy',
        precio: 11000,
        foto:paletTrendy
    },
    {
        id:5,
        nombre: 'Sombras',
        precio: 15000,
        foto:sombras2
    },
]

export const cart=[]

// export function shoppingReducer(state,action){
//     switch (action.type) {
//         case TYPES.ADD_TO_CART: {

//         }
//         case TYPES.REMOVE_ONE_FROM_CART:{

//         }
//         case TYPES.REMOVE_ALL_FROM_CART:{

//         }
//         case TYPES.CLEAR_CART:{

//         }
//         default:
//             return state;
//     }
// }
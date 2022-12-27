import Product from "../Product";
import { TYPES } from "../shoppingActions";

export const stateReducer =(state, action)=> {
    switch (action.type) {
        case TYPES.ADD_TO_CART:{
            return{
                ...state,
                cart:[
                    ...state.cart,
                    { 
                        ...action.payload,
                        qty:1,
                    }
                    
                ]
            }
            
        }
        case TYPES.ADD_PRODUCT_QUANTITY:{
            const targetProductIdx = state.cart.findIndex(product=>product.id===action.payload)
            const updatedProduct = {...state.cart[targetProductIdx],qty:state.cart[targetProductIdx].qty+1}
            const updatedCart = [...state.cart]
            updatedCart.splice(targetProductIdx,1,updatedProduct)
            return{
                ...state,
                cart:updatedCart
            }
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
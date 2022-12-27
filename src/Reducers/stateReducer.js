import Product from "../Product";
import { TYPES } from "../shoppingActions";

export const stateReducer =(state, action)=> {
    switch (action.type) {
        case TYPES.ADD_TO_CART:{
            let newProd = { 
                ...action.payload,
            }

            let itemInCart = state.cart.find(item=>item.id===newProd.id)
            
            return itemInCart?{
                ...state,
                cart:state.cart.map(item=>item.id===newProd.id?{...item,qty:item.qty+1}:item)
            }:{
                    ...state,
                    cart:[
                        ...state.cart,
                        {...newProd,qty:1}
                        
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
            const targetProductIdx = state.cart.findIndex(product=>product.id===action.payload)
            const updatedProduct = {...state.cart[targetProductIdx],qty:state.cart[targetProductIdx].qty-1}
            const updatedCart = [...state.cart]
            updatedCart.splice(targetProductIdx,1,updatedProduct)
            return{
                ...state,
                cart:updatedCart
            }

        }
        case TYPES.REMOVE_ALL_FROM_CART:{

        }
        case TYPES.CLEAR_CART:{

        }
        default: return state
    }
}
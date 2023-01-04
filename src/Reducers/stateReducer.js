import { TYPES } from "../shoppingActions";
// En este archivo creamos nuestro reducer el cual recibe un 
// estado y una acción, dentro del switch del reducer se encuentran
//  las funciones a las cuales llamaremos con dispatch 

export const stateReducer =(state, action)=> {
    switch (action.type) {
        // El primer caso que encontramos es la acción para añadir un producto al carrito. le pasamos como payload el id del producto 
        case TYPES.ADD_TO_CART:{
            let newProd = { 
                ...action.payload,
            }
            // la siguiente variable verifica si el producto existe ya en el array Cart a partir de su id 
            let itemInCart = state.cart.find(item=>item.id===newProd.id)
            // utilizamos la forma del operador ternario en el return, si el producto existe 
            // la función aumenta su cantidad pero no agregar el objeto repetido al array Cart, 
            // si no existe añade el objeto 
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
            
        // Añadir cantidad al producto da la funcionalidad de sumar un producto del mismo tipo,
        //  funcionalidad otorgada al botón son el símbolo de suma en la tarjeta del producto que se muestra en el carrito 
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
        // remove uno solo del carrito tiene la funcionalidad de reducir en una unidad la cantidad del producto que se encuentra en el carrito 
        case TYPES.REMOVE_ONE_FROM_CART:{
            const targetProductIdx = state.cart.findIndex(product=>product.id===action.payload)
            const updatedProduct = {...state.cart[targetProductIdx],qty:state.cart[targetProductIdx].qty-1}
            const updatedCart = [...state.cart]
            updatedCart.splice(targetProductIdx,1,updatedProduct)
            return{
                ...state,
                cart:updatedCart
            }
            // la siguiente función elimina todos los productos añadidos de un mismo tipo sin importar su cantidad 
        }
        case TYPES.REMOVE_ALL_FROM_CART:{
            return{
                ...state,
                cart:state.cart.filter((item)=>item.id !== action.payload)
            }
        }
        default: return state
    }
}
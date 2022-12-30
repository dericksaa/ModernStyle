import React, { useContext, useState } from 'react'
import { CartShop } from './CartShop'
import StateContext from './context/StateProvider'
import './formCompra.css'


const FormCompra = (e) => {

  const {state} = useContext(StateContext)

  const getTotal = ()=>{
    let result = 0
    for (let index = 0; index < state.cart.length; index++) {
      const element = state.cart[index];
      result=result+element.precio*element.qty
    }
    return result
  }


    const [values, setValues]  = useState({
      nombre:'',
      direccion:'',
      ciudad:'',
      comentarios:'',
    })
    

    const handleInput = (e)=>{
      const {name,value} = e.target;
      setValues({
        ...values,
        [name]:value,
      })
    }

    const formatterPeso = new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    })

    const handleForm = (e)=>{
      e.preventDefault()
      const name = (state.cart.map((item)=>{
        return  (item.nombre +'. cantidad: '+ item.qty)
      }))
      let namewpp = values.nombre+' te damos la bienvenida a nuestra tienda'
      let ciudadEnvio = values.ciudad
      let directionwpp = 'La dirección de envio ingresada es: '+values.direccion
      let coment = values.comentarios
      let total = formatterPeso.format (getTotal())
      let url = 'https://api.whatsapp.com/send?phone=573153220760,&text=Hola '+ namewpp+
      '%0A%0ALa ciudad destino es: '+ciudadEnvio+
      '%0A'+directionwpp+
      '%0A%0ALos productos que deseas adquirir son los siguientes: '+name+
      '%0A%0AEl valor total de tu compra es: '+total+
      '%0A%0AComentarios :'+coment+'%0A%0AGracias por comprar en Moder Style en breve nos comunicaremos contigo para terminar tu compra'
      window.open(url)
    }


  return (
    <>
    <form className='formulario' onSubmit={handleForm}>
      <input 
        type="text"
        name='nombre'
        placeholder='Nombres y apellidos'
        onChange={handleInput}
      />

      <input 
        type="text"
        name='ciudad'
        placeholder='Ciudad'
        onChange={handleInput}
      />

      <input 
        type="text"
        name='direccion'
        placeholder='Direccion'
        onChange={handleInput}
      />

      <input className='comentarios'
        type="text"
        name='comentarios'
        placeholder='Comentarios o preguntas'
        onChange={handleInput}
      />

      <button type='submit'>Enviar</button>

    </form>    
    </>
  )
}

export default FormCompra
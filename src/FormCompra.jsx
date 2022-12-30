import React, { useContext, useState } from 'react'
import StateContext from './context/StateProvider'
import './formCompra.css'

const FormCompra = (e) => {

  const {state} = useContext(StateContext)


    const [values, setValues]  = useState({
      nombre:'',
      direccion:'',
      comentarios:'',
    })
    

    const handleInput = (e)=>{
      const {name,value} = e.target;
      setValues({
        ...values,
        [name]:value,
      })
    }

    const handleForm = (e)=>{
      e.preventDefault()
      const product_shop = state.cart.map((item)=>{
        return[
          item.nombre,
          item.qty,
        ]
      })
      let namewpp = values.nombre
      let directionwpp = values.direccion
      let coment = values.comentarios
      let url = 'https://api.whatsapp.com/send?phone=573153220760,&text=Hola: '+namewpp+'%0ADireccion: '+directionwpp+'%0AProductos :'+product_shop+'%0AComentarios :'+coment+''
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
        name='direccion'
        placeholder='direccion'
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
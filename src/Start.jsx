import React from 'react'
import { NavLink} from 'react-router-dom'
import logo from './images/logo.png'
import './Start.css';

const Start = () => {
  return (
    <>
      <div className='inicio'>
        <img src={logo} alt="logo modern"/>
        <p> ​Al fundar Modern Style Makeup teníamos un sólo
          objetivo en mente: crear una tienda en línea que 
          ofreciera la más alta calidad, con las mejores 
          opciones para realizar tus compras y con alto nivel
          de confiabilidad. Nuestra pasión por la excelencia 
          nos condujo a materializar esta misión, siendo ésta 
          la parte fundamental que nos ha impulsado a 
          seguir adelante. Sabemos que cada producto 
          es importante, por lo que procuramos que todo el 
          proceso sea lo más agradable posible. 
          ¡Echa un vistazo y compruébalo por tu cuenta!</p>
        <NavLink to='/MakeUp'><button>Tienda</button>
        </NavLink>
      </div>

    </>
  )
}

export default Start
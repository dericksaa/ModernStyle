import React, { useContext } from 'react'
import './Nav.css'
import { NavLink} from 'react-router-dom'
import Home from './images/home.png'
import Shop from './images/shop.png'
import StateContext from './context/StateProvider'

const Navigation = () => {

  const {state} = useContext(StateContext)

  let numero = state.cart.length
  const display = ()=>{
    if (numero===0) {
      return 'none'
    }else{return ''}
  }

return (
  <nav className='nav'>
    <ul>
      <li>
        <NavLink to='/'><img src={Home} alt="Home" /></NavLink>
        <div className='bolsa'>
          <div style={{display:display()}} className='cicle'>
            <h5>{numero}</h5>
          </div>
          <NavLink to='/Shop'><img src={Shop} alt="" /></NavLink>
        </div>
      </li>
    </ul>
  </nav>
)
}



export default Navigation
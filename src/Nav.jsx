import React from 'react'
import './Nav.css'
import { NavLink} from 'react-router-dom'
import Home from './images/home.png'
import Shop from './images/shop.png'

const Navigation = () => {
return (
  <nav className='nav'>
    <ul>
      <li>
        <NavLink to='/'><img src={Home} alt="Home" /></NavLink>
        <NavLink to='/Shop'><img src={Shop} alt="" /></NavLink>
      </li>
    </ul>
  </nav>
)
}



export default Navigation
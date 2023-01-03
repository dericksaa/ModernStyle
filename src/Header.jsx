// import React from "react";
import './Header.css'
import logo from './images/logo.png'

// retornamos la imagen y el logo de la tienda, este se presenta en todas las vistas de la página 


const Header = ()=>{
    return (
    
    <div className="Header">
        <img src={logo} alt="logo modern"/>
        <h1>Modern Style</h1>
    </div>
        
    )
}

export default Header
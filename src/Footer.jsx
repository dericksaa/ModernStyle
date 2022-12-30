import './Footer.css'
import facebook from './images/facebook.png'
import insta from './images/instagram.png'
import tiktok from './images/tiktok.png'



const Footer =()=>{
    return(
        <div className='footer'>
            <div className='social'>
                <a target='_blank' href="https://www.facebook.com/ModernStyleCosmetics"><img src={facebook} alt="fk" /> </a>  
                <a target='_blank' href="https://www.instagram.com/modernstyle_makeup/?hl=es-la"><img src={insta} alt="ig" /> </a>  
                <a target='_blank' href="https://www.tiktok.com/@modern_style0?_t=8V3j0InomEY&_r=1"><img src={tiktok} alt="tk" /> </a> 
            </div>
            <h3>Modern Style</h3>
            <h6>Developed by D.S.</h6>
        </div>
    )
}

export default Footer
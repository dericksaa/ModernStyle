import './Footer.css'
import facebook from './images/facebook.png'
import insta from './images/instagram.png'
import tiktok from './images/tiktok.png'


const Footer =()=>{
    return(
        <div className='footer'>
            <div className='social'>
                <img src={facebook} alt="fk" />
                <img src={insta} alt="ig" />
                <img src={tiktok} alt="tk" />
            </div>
            <h3>Modern Style</h3>
            <h6>Developed by Saa</h6>
        </div>
    )
}

export default Footer
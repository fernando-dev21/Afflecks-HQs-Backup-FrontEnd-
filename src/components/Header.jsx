import React from 'react'
//import logo from '../assets/image/logo.png'
import logo2 from '../assets/image/logo-escrita.png'
import redes from '../assets/image/facebook.png'
import redes_2 from '../assets/image/instagran.png'
import redes_3 from '../assets/image/whatsApp.png'

import './Header.css'
const Header = () => {
  return (
    
    <header>
        
        <img src={logo2} className="logo2" alt="LOGO DA PAGINA ESCRITO AFFLECKS HQS" />  

        <div className="redes">
        <div>
          <img src={redes} className="logo" alt="LOGO DA PAGINA ESCRITO AFFLECKS HQS" />
          <p>/AfflecksHQs</p>
        </div>

        <div>
          <img src={redes_2} className="logo" alt="LOGO DA PAGINA ESCRITO AFFLECKS HQS" />
          <p>@AfflecksHQs</p>
        </div>

        <div>
          <img src={redes_3} className="logo" alt="LOGO DA PAGINA ESCRITO AFFLECKS HQS" />
          <p>(XX)9999999</p>
        </div>
        </div>
        
    </header>   

  )
} 

export default Header


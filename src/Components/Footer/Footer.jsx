import React from 'react'
import "./Footer.css"
import Wave from "../../img/wave.png"
import GitHub from '@iconscout/react-unicons/icons/uil-github'
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'
import WhathsApp from '@iconscout/react-unicons/icons/uil-whatsapp'
import Email from "../../img/email.png"
import Swal from 'sweetalert2'

const Footer = () => {
  function copyLink(e){
    e.preventDefault()
    navigator.clipboard.writeText("hilberfraiese92@gmail.com")
    Swal.fire({
      icon: 'success',
      title: '¡Email copied!',
      width: "30%"
    })
  }

return (
    <div className="footer">
        <img src={Wave} alt="" style={{width:'100%'}} />
        <div className="f-content">
            <span>hilberfraiese92@gmail.com</span>
            <div className='f-icons'>
                 <a href="https://github.com/Hilberfraiese">
                 <GitHub color='white' size='3rem'/>
                 </a>
                 <a href="https://www.linkedin.com/in/hilber-fraiese/">
                 <Linkedin color='white' size='3rem'/>
                 </a>
                <a href="https://wa.me/5492235421793">
                <WhathsApp color='white' size='3rem'/>
                </a>
                <a onClick={copyLink}>
                <img src={Email} alt="" style={{width:'4rem', color:'white', height:'3rem' }} />
                </a>
            </div>
        </div>
    </div>
  )
}

export default Footer
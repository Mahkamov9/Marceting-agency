import './footer.css'


import logo from '../../assets/img/advertise.png'
import instagram from '../../assets/img/instagram.png'
import telegram from '../../assets/img/telegram.png'
import email from '../../assets/img/email.png'



const Footer = () =>{
    return(
        <div className="footer">
            <div className="container">
                <ul className="footer-list">
                    <li className="footer-item">
                        <img className='footer-logo' src={logo} alt="sdfaf" />
                        <p className='footer-subtext'>IT-time marceting-agency 2022</p>
                        <p className='footer-subtext'>+998 93 148 77 33</p>
                        <div className='footer-link-box'>
                            <a href=""><img className='footer-link-logo' src={instagram} alt="" /></a>
                            <a href=""><img className='footer-link-logo' src={telegram} alt="" /></a>
                            <a href=""><img className='footer-link-logo' src={email} alt="" /></a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}


export default Footer;
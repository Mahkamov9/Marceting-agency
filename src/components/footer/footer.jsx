import './footer.css'


import logo from '../../assets/img/advertise.png'


const Footer = () =>{
    return(
        <div className="footer">
            <div className="container">
                <ul className="footer-list">
                    <li className="footer-item">
                        <div>
                            <img className='footer-logo' src={logo} alt="sdfaf" />
                            <p className='footer-subtext'>IT-time marceting-agency 2022</p>
                        </div>
                    </li>
                    <li className="footer-item">
                        <ul>
                            <li className='fff'><a className='footer-link' href="">Xizmatlar</a></li>
                            <li className='fff'><a className='footer-link' href="">Xizmatlar</a></li>
                            <li className='fff'><a className='footer-link' href="">Xizmatlar</a></li>
                        </ul>
                    </li>
                    <li className="footer-item">
                        <ul>
                            <li className='fff'><a className='footer-link' href="">Xizmatlar</a></li>
                            <li className='fff'><a className='footer-link' href="">Xizmatlar</a></li>
                            <li className='fff'><a className='footer-link' href="">Xizmatlar</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}


export default Footer;
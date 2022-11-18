import "./navbar.css"

import Logo from '../../assets/img/advertise.png'
import { useState } from "react"
import Contact from "../contact/contact";

const Navbar= () => {

    const [open , setOpen] = useState(false);

    return(
        <div className="navbar">
            <div className="container nav-box">
                <img className="nav-logo" src={Logo} alt="" />
                <ul className="nav-list">
                    <li className="nav-item">
                        <a className="nav-item-text" href="#">Xizmatlar</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-item-text" href="#">Blog</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-item-text" href="#">Kompaniya</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-item-text" href="#">Til</a>
                    </li>
                </ul>
                <div className="nav-contact">
                    <a className="nav-text1" href=""> (93) 191 97 37</a>
                    
                    <button onClick={() => setOpen(false) }
                    className="nav-text2" href="">Biz bilan bog'lanish</button>
                <Contact modal={open} />
                 </div>
            </div>
        </div>
    )
}


export default Navbar;


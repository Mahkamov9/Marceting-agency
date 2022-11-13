import './header.css';

import fon from '../../assets/img/fon.png'
import js from '../../assets/img/js.png'
import react from '../../assets/img/physics.png'
import vue from '../../assets/img/brands.png'





const Header = () =>{
    return(
        <div className='header'>
            <div className="container">
                <div className="header-box">
                    <div>
                        <h1 className='header-subtitle'>
                            To'liq xizmat ko'rsatish marketing agentligi
                        </h1>
                        <p className='header-title'>Biz 2021 yildan beri Internet-marketingning barcha <br/> mumkin bo'lgan  kanallari va vositalaridan foydalanamiz</p>
                    </div>
                    <div>
                        <ul className='header-atom-list'>
                            <li className='header-atom-item'><a className='header-atom-link1' href="">Veb-sayt va ilovalarni ishlab chiqish</a></li>
                            <li className='header-atom-item'><a className='header-atom-link2' href="">Reklamarni o'rnatish va saqlash</a></li>
                        </ul>

                        <ul className='header-atom-list'>
                            <li className='header-atom-item'><a className='header-atom-link3' href="">SMM reklamasi</a></li>
                            <li className='header-atom-item'><a className='header-atom-link4' href="">Brendlash</a></li>
                            <li className='header-atom-item'><a className='header-atom-link5' href="">Foto va videolarni ishlab chiqarish</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Header;
import './card.css';

import js from '../../assets/img/js.png'
import tesla from '../../assets/img/tesla.png'


const Card = () =>{
    return(
        <div className="card">
            <img className='card-img' src={tesla} alt="asdas" />
            
            <a className='card-link' href="#">Learn more</a>
        </div>
    )
}


export default Card; 
import './card.css';

import js from '../../assets/img/js.png'


const Card = () =>{
    return(
        <div className="card">
            <img className='card-img' src={js} alt="asdas" />
            <p className='card-subtitle'>
                Urus Ejen
                va Xualan Bisnes platformasi.
            </p>
            <p className='card-title'>
                Sesuai untuk bisnes yang baru bermula mahupun yang sedang berkembang.
            </p>
            <a className='card-link' href="#">Learn more</a>
        </div>
    )
}


export default Card; 
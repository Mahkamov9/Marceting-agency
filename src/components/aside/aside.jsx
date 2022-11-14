import './aside.css';

import human from '../../assets/img/human.jpg'; 


const Aside = () =>{
    return(
        <div className="aside">
            <div className="container">
                <div className="aside-box">
                    <h1 className='aside-subtext'>Buni faqat haqiqiy jamoa yaxshi bajara oladi</h1>
                    <p className='aside-text'>Biz tirik odamlarmiz. Biz konferentsiyalarda nutq so'zlaymiz, ma'ruzalar o'tkazamiz, birga pikniklarga boramiz va ofisda aql bovar qilyapmiz. Buni bizning ijtimoiy tarmoqlarimizda ko'ring.</p>

                    <img className='human1' src={human} alt="human" />
                    <img className='human2' src={human} alt="human" />
                    <img className='human3' src={human} alt="human" />
                </div>
            </div>
        </div>
    )
}



export default Aside;
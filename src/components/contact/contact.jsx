import './contact.css';


const Contact = ( {modal} ) =>{
    return (
        <div  className={`contact ${ modal && 'contact-open'} `}> 
            
            <div className="contact-box">

                <div className='contact-subtitle'>
                    <p>It-time agency</p>
                    <button>X</button>
                </div>

                <div className='contact-content'>
                    <input type="text" placeholder='+998' />
                    <input type="mail" placeholder='ittimeagency@gmail.com' />
                </div>

            </div>


        </div>

    ) 
}


export default Contact ;
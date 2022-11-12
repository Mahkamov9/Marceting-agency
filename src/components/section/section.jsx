import Card from '../card/card';
import './section.css';



const Section = () =>{
    return(
        <div className='section'>
            <div className="container">
                <div className="section-box">
                    <p className='section-subtext'>Keling, biznesingizni keyingi bosqichga olib chiqaylik</p>
                    <p className='section-text'>
                        Raqamli marketing yordamida biz qisqa vaqt ichida sizning imidjingizni yaxshilash, yangi mijozlarga ega bo'lish va biznesingizni kengaytirish uchun Internetdagi mavjudligingizni yaxshilashimiz mumkin.  
                    </p>
                    <a className='section-link' href="#">Hoziroq buyurtma berish</a>
                </div>
                <iframe className='section-video'  src="https://www.youtube.com/embed/l79Mf-_1P7U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <div className="section-card-box">
                    <Card/>
                    <Card/>
                    <Card/>
                </div>

                <div className="section-card-box">
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
        </div>
    )
}


export default Section;

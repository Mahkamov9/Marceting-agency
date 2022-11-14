import Card from '../card/card';
import './section.css';



const Section = () =>{
    return(
        <div className='section'>
            <div className="container">
                <div className="section-box">
                    <p className='section-subtext'>15 ortiq loyihalar</p>
                    <h1 className='section-text'>
                        Portfolio  
                    </h1>
                </div>
                
                <iframe className='section-video'  src="https://www.youtube.com/embed/l79Mf-_1P7U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                
                
                <div className="section-card-box">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>

                {/* <div className="section-card-box">
                    <Card/>
                    <Card/>
                </div>

                <div className="section-card-box">
                    <Card/>
                    <Card/>
                </div> */}


            </div>
        </div>
    )
}


export default Section;

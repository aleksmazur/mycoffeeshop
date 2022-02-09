import './page-descr.css';
import descrImg from '../../resource/second_pg/about_our_beans.jpg';
import logodark from '../../resource/first_pg/logodark.svg';


const PageDescr = () => {
    return (
        <div className='page-descr'>
            <div className='about-our-beans'>
                <img src={descrImg} alt="descrImg" />
                <div className='wrapper'>
                    <h3 className='title_24 dark'>About our beans</h3>
                    <img src={logodark} alt="logodark" />
                    <p className='title_14 dark'>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.<br></br>
                    Afraid at highly months do things on at. Situation recommend objection do intention so questions.<br></br>
                    As greatly removed calling pleased improve an.<br></br>Last ask him cold feel
                    met spot shy want. Children me laughing we prospect answered followed. At it went
                    is song that held help face.</p>
                </div>
            </div>
            <div className='divider'></div>
        </div>
    )
}

export default PageDescr;
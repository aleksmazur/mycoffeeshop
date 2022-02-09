import './main-page.css';
import logolight from '../../resource/first_pg/logolight.svg';

const MainPage = () => {
    return (
        <div className='main-page'>
            <h1 className='title_40'>Everything You Love About Coffee</h1>
            <img className='logo_light' src={logolight} alt="coffee_beans" />
            <h2 className='title_24'>We makes every day full of energy and taste</h2>
            <h2 className='title_24'>Want to try our beans?</h2>
            <button className='btn title_14'>More</button>
        </div>
    );
}

export default MainPage;
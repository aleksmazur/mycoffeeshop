import './header.css';
import beans from '../../resource/first_pg/coffee_beans.png';

const Header = () => {
    return ( 
        <div className='header'>
            <img src={beans} alt="beans" />
            <div className='wrapper'>
                <a className='title_12' href="#">Coffee house</a>
                <a className='title_12' href="#">Our coffee</a>
                <a className='title_12' href="#">For your pleasure</a>
            </div>
        </div>
    )
}

export default Header;
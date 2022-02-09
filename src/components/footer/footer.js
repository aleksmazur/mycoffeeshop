import './footer.css';
import beans from '../../resource/first_pg/coffee_beans_dark.png';
import logodark from '../../resource/first_pg/logodark.svg';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='menu-wrapper'>
                <img src={beans} alt="beans" />
                <div className='wrapper'>
                    <a className='title_12 dark' href="#">Coffee house</a>
                    <a className='title_12 dark' href="#">Our coffee</a>
                    <a className='title_12 dark' href="#">For your pleasure</a>
                </div>
            </div>
            <img className='logo_dark' src={logodark} alt="coffee_beans" />
        </div>
    )
}

export default Footer;
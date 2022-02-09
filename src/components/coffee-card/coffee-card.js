import './coffee-card.css';
import coffeeImg from '../../resource/third_pg/coffee_card_img.jpg';
import logodark from '../../resource/first_pg/logodark.svg';

const CoffeeCard = ({name, country, price}) => {
    return (
        <div>
            <img src={coffeeImg} alt="coffeeImg" />
            <div className="wrapper">
                <h3 className='title_24 dark'>{name}</h3>
                <img src={logodark} alt="logodark" />
                <div className='text title_14 dark'>
                    <p>{`Country: ` + country}</p>
                    <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p>{`Price: ` + price} $</p>
                </div>
            </div>
        </div>
    )
}

export default CoffeeCard;
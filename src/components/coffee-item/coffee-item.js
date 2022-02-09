import './coffee-item.css';
import coffeeimg from '../../resource/second_pg/card1.png';

const CoffeeItem = (props) => {
    const {name, weight, country, price} = props;
    return (
        <div className='coffee-item title_14 dark'>
            <img src={coffeeimg} alt="coffeeimg" />
            <span className='title_14 dark'>{name + ' '}{weight + ' kg'}</span>
            <div className='title_14 dark'>{country}</div>
            <div className='title_14 dark bold'>{price + '$'}</div>
        </div>
    )
}

export default CoffeeItem;
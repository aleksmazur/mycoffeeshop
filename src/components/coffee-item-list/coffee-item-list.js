import CoffeeItem from '../coffee-item/coffee-item';
import './coffee-item-list.css';

const CoffeeList = ({data}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <CoffeeItem
            key={id}
            {...itemProps}/>
        )
    });

    return (
        <ul className='coffee-list'>
            {elements}
        </ul>
    );
}

export default CoffeeList;
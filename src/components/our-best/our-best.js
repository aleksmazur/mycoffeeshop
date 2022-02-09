import CoffeeItem from '../coffee-item/coffee-item';
import './our-best.css';

const OurBest = ({data}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <CoffeeItem
            key={id}
            {...itemProps}/>
        )
    });

    return (
        <div className='our-best'>
            <h2 className='title_24 dark'>Our best</h2>
            <ul className='coffee-list'>
                {elements}
            </ul>
        </div>

    );
}

export default OurBest;
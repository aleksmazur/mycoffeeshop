import './filter.css';

const Filter = (props) => {
    
    const buttonsData = [
        {name: 'Brazil', label: 'Brazil'},
        {name: 'Kenya', label: 'Kenya'},
        {name: 'Columbia', label: 'Columbia'}
    ];

    const buttons = buttonsData.map(({name, label}) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-dark' : 'btn-light';
        return (
            <button className={`btn title_12 dark ${clazz}`}
                    type='button'
                    key={name}
                    onClick={() => props.onFilterSelect(name)}>
                    {label}
            </button>
        )
    });

    return (
        <div className='filter-group title_14 dark'>
            <div>Or filter</div>
            <div className='btn-group'>
                {buttons}
            </div>
        </div>
    );
}

export default Filter;
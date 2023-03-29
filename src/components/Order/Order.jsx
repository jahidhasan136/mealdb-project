import React from 'react';
import './Order.css';

const Order = (props) => {
    const {strCategory, strCategoryThumb} = props.ordered
    return (
            
            <div className='order-info'>
                <img src={strCategoryThumb} alt="" />
                <h5>{strCategory}</h5>
            </div>
    );
};

export default Order;
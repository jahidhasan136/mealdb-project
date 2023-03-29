import React from 'react';
import './Order.css';

const Order = (props) => {
    const {strCategory, strCategoryThumb} = props.order
    return (
        <div className='order-container'>
            <h3>Order Summary</h3>
            <div className='order-info'>
                <img src={strCategoryThumb} alt="" />
                <h5>{strCategory}</h5>
            </div>
        </div>
    );
};

export default Order;
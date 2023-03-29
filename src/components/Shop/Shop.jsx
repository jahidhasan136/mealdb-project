import React from 'react';
import Cart from '../Cart/Cart';
import './Shop.css';

const Shop = () => {
    return (
        <div className='shop-container'>
            <div>
                <Cart></Cart>
            </div>
            <div>
            <h3>Ordered Summary</h3>
            </div>
        </div>
    );
};

export default Shop;
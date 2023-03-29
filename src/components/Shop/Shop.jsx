import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import './Shop.css';

const Shop = () => {

    const [shop, setShop] = useState([])

    useEffect( () =>{
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(res => res.json())
        .then(data => setShop(data.categories))
    },[])


    return (
        <div className='shop-container'>
            <div className='food-info'>
                {
                    shop.map(cart => <Cart cart={cart}></Cart>)
                }
            </div>
            <div>
            <h3>Ordered Summary</h3>
            </div>
        </div>
    );
};

export default Shop;
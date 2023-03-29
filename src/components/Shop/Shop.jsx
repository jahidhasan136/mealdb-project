import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Order from '../Order/Order';
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
                    shop.map(cart => <Cart cart={cart} key={cart.idCategory}></Cart>)}
            </div>
            <div>
                <Order></Order>
            </div>
        </div>
    );
};

export default Shop;
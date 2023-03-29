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
    },[]);

    const [order, setOrder] = useState([])

    function handleCart(shop){
        setOrder(shop)
    }


    return (
        <div className='shop-container'>
            <div className='food-info'>
                {
                    shop.map(cart => <Cart cart={cart} key={cart.idCategory} handleCart={handleCart}></Cart>)}
            </div>
            <div>
                <Order order={order}></Order>
            </div>
        </div>
    );
};

export default Shop;
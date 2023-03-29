import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Order from '../Order/Order';
import './Shop.css';

const Shop = () => {

    const [shop, setShop] = useState([])
    const [order, setOrder] = useState([])

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(res => res.json())
            .then(data => setShop(data.categories))
    }, []);


    const handleCart = (shop) => {
        console.log(shop.idCategory)
        const exist = order.find(item => item.idCategory == shop.idCategory)
        if (exist) {
            return alert("This cart already added to cart")
        }
        const newOrder = [...order, shop]
        setOrder(newOrder)
    }

    return (
        <div className='shop-container'>
            <div className='food-info'>
                {
                    shop.map(cart => <Cart cart={cart} key={cart.idCategory} handleCart={handleCart}></Cart>)}
            </div>
            <div className='order-container'>
                <h3>Order Summary</h3>
                {
                    order.map(ordered => <Order key={ordered.idCategory
                    } ordered={ordered}></Order>)
                }
            </div>
        </div>
    );
};

export default Shop;
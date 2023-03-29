import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Cart = (props) => {
    const handleCart = props.handleCart
    

    const { strCategory, strCategoryThumb, strCategoryDescription } = props.cart;
    return (
        <div className='cart-container'>
            <div className='cart-img'>
                <img src={strCategoryThumb} alt="" />
            </div>
            <h4>Food Name: {strCategory}</h4>
            <p>{strCategoryDescription}.</p>
            <div className='btn'>
                <button onClick={()=>handleCart(props.cart)}>Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
            </div>
        </div>
    );
};

export default Cart;
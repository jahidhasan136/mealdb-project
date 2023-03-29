import './Cart.css';

const Cart = (props) => {
    console.log(props.cart)

    const {idCategory, strCategory, strCategoryThumb, strCategoryDescription} = props.cart;
    return (
        <div className='cart-container'>
            <img src={strCategoryThumb} alt="" />
            <h4>Food Name: {strCategory}</h4>
            <p>{strCategoryDescription}</p>
        </div>
    );
};

export default Cart;
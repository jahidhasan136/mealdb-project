import './Cart.css';

const Cart = (props) => {
    console.log(props.cart)

    const {idCategory, strCategory, strCategoryThumb, strCategoryDescription} = props.cart;
    return (
        <div className='cart-container'>
            <img src={strCategoryThumb} alt="" />
            <h4>Food Name: {strCategory}</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, facilis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, at.</p>
            <div className='btn'>
            <button>Add to Cart</button>
            </div>
        </div>
    );
};

export default Cart;
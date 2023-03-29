import './Cart.css';

const Cart = (props) => {
    console.log(props.cart)

    const {idCategory, strCategory, strCategoryThumb, strCategoryDescription} = props.cart;
    return (
        <div>
            <img src={strCategoryThumb} alt="" />
            <h4>Food Name: {strCategory}</h4>
            
        </div>
    );
};

export default Cart;
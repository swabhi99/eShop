import React from 'react';
import './CheckoutProduct.css'
import './Product.css';
import { useStateValue } from './StateProvider';

const CheckOutProduct = ({id,title,image,price,rating}) => {
    const[{basket},dispatch] = useStateValue()

    const removeFromBasket=()=>{
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id,
        })
    }

    return (
        <div className="checkoutProduct">
            <img src={image} className='checkoutProduct__image' />
            <div className="checkoutProduct__info">
                <p className='checkoutProduct__title'>{title}</p>
                <p className='checkoutProduct__price'> ₹{price}</p>
                <div className="checkout__rating product__rating">
                {Array(rating)
                   .fill()
                   .map((_,i)=>{
                    return <p>⭐</p>
                   })
                   }
                </div>
                <button onClick={removeFromBasket}>Remove from basket</button>
            </div>

        </div>

    );
}

export default CheckOutProduct;

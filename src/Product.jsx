import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';

const Product = ({id,title,price,rating,image}) => {

    const[state,dispatch] = useStateValue()

    const addToBasket = ()=>{
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                id:id,
                image:image,
                price:price,
                rating:rating
            }
        })
    }

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    ₹{price}
                </p>
                <div className="product__rating">
                   {Array(rating)
                   .fill()
                   .map((_,i)=>{
                    return <p>⭐</p>
                   })
                   }
                </div>
                
            </div>
            <img src={image} alt="productimage" />
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    );
}

export default Product;

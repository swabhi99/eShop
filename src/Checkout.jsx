import React from 'react';
import CheckOutProduct from './checkOutProduct';
import './Checkout.css'
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';

const Checkout = () => {
    const[{basket},dispatch] = useStateValue()
    return (
        <div className='checkout'>
            <div className="checkout__left">
                <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" className="checkout__ad" />
                <h2 className='checkout__title'>Your shopping Basket</h2>

                {basket.map(item =>{
                    return <CheckOutProduct 
                        id={item.id}
                        title = {item.title}
                        image = {item.image}
                        price = {item.price}
                        rating = {item.rating}
                    />
                })}
            </div>


            <div className="checkout__right">
                <Subtotal></Subtotal>
            </div>

        </div>
    );
}

export default Checkout;

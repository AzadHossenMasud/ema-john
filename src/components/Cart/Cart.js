import React from 'react';
import './Cart.css'

const Cart = (props) => {

    const { cart } = props
    let totalItem = 0;
    let total = 0;
    let shipping = 0;

    for (const product of cart) {
        totalItem = totalItem + product.quantity
        total = total + product.price * product.quantity
        shipping = shipping + product.shipping * product.quantity
    }
    const tax = (total * 0.1).toFixed(2)

    const grandTotal = parseFloat(total) + parseFloat(shipping) + parseFloat(tax);



    return (
        <div className='cart'>
            <h3 className='order-summary-heading'>Order Summary</h3>
            <div className='order-summary'>
                <p>Selected Items: {totalItem}</p>
                <p>Total Price : ${total} </p>
                <p>Total Shipping Charge: ${shipping}</p>
                <p>Tax: ${tax}</p>
                <h6 className='grand-total'>Grand Total: $ {grandTotal}</h6>
            </div>
        </div>
    );
};

export default Cart;
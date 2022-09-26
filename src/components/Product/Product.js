import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = (props) => {
    const { name, price, img, ratings, seller } = props.product
    const { handleAddToCart, product } = props

    return (
        <div className='product'>
            <img src={img} alt="Image Not Found" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p className='price'>Price: ${price}</p>
                <p className='manufacture'>Manufacturer: {seller}</p>
                <p className='ratings'>Rating: {ratings}</p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-add-to-cart'>
                <p>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;
import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const Product = ({product ,handelAddtoCart}) => {
    // const {product ,handelAddtoCart} = props;
    const {name , img, seller, price , ratings} = product
    
    return (
        <div className='product'>
           <img src={img} alt="" srcset="" />
           <div className="product-info">
           <p className='product-name'>{name}</p>
           <p>Price: ${price}</p>
           <p><small>Seller:{seller}</small></p>
           <p><small>Rating:{ratings}stars</small></p>
           </div>
        <button onClick={() => handelAddtoCart(product)} className='button-cart'> <p>Add To cart</p></button>
        <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
        </div>
    );
};

export default Product;
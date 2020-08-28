import React from 'react';
import {FontAwsomeIcon, FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import './Product.css';


const Product = (props) => {
    // console.log(props);
    const { id, name, price, image } = props.product;
    return (
        <div className="product">
            <div>
                <img src={image} alt="" />
            </div>
            <div>
                <h4 className="product-name">{id}</h4>
                <br />
                <p><small>by: {name}</small></p>
                <p>Price: ${price}</p>
                <br />
                <button className="main-btn"
                onClick={() => props.handleAddProduct(props.product)}
                >
                    <FontAwesomeIcon icon={faShoppingCart}/> add to cart</button>
            </div>

        </div>
    );
};

export default Product;
import React from 'react';

const Product = ({ product, addToCart, cart, updateCartItem }) => {
  return (
    <div className="product" data-item-name={product.name}>
      <p>{product.name}</p>
      <p>${product.price}</p>
      {cart ? (
        <>
          <p>{product.quantity}</p>
          <button 
            className="b1"
            onClick={() => updateCartItem(product.name, 1)}
          >
            +
          </button>
          <button 
            className="b1"
            onClick={() => updateCartItem(product.name, -1)}
          >
            -
          </button>
        </>
      ) : (
        <button 
          className="add-btn" 
          onClick={() => addToCart(product)}
        >
          +
        </button>
      )}
    </div>
  );
};

export default Product;

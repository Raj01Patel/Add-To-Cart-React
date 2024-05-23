import React from 'react';
import Product from '../Product/Product';

const Cart = ({ cartItems, updateCartItem }) => {
  const totalPrice = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <div id="container2" className="container2">
      <h2>Cart Item🛒</h2>
      <div id="total">
        <p>Total Price: ${totalPrice}</p>
      </div>
      {cartItems.length === 0 ? (
        <p className="empty-message">No items added yet!</p>
      ) : (
        cartItems.map((item) => (
          <Product
            key={item.name}
            product={item}
            cart
            updateCartItem={updateCartItem}
          />
        ))
      )}
    </div>
  );
};

export default Cart;

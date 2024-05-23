
import React, { useState } from 'react';
import ProductList from './components/ProductList/ProductList';
import Cart from './components/Cart/Cart';
import './App.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.name === product.name);
    if (existingItem) {
      setCartItems(cartItems.map(item => 
        item.name === product.name 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const updateCartItem = (productName, quantityChange) => {
    setCartItems(cartItems => {
      return cartItems.reduce((acc, item) => {
        if (item.name === productName) {
          const newQuantity = item.quantity + quantityChange;
          if (newQuantity > 0) {
            acc.push({ ...item, quantity: newQuantity });
          }
        } else {
          acc.push(item);
        }
        return acc;
      }, []);
    });
  };

  return (
    <div className='container'>
      <h1>Add To Cart</h1>
      <div className="main-container">
      <ProductList addToCart={addToCart} />
      <Cart cartItems={cartItems} updateCartItem={updateCartItem} />
    </div>
    </div>
  );
};

export default App;

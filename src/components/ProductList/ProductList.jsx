import React from 'react';
import Product from '../Product/Product';

const ProductList = ({ addToCart }) => {
  const products = [
    { name: 'Dosa', price: 100 },
    { name: 'Panipuri', price: 150 },
    { name: 'Samosa', price: 145 },
    { name: 'Jalebi', price: 182 },
    { name: 'Noodles', price: 200 },
  ];

  return (
    <div id="container1" className="container1">
      <h2 style={{marginBottom:'5px'}}>Product</h2>
      {products.map((product) => (
        <Product 
          key={product.name} 
          product={product} 
          addToCart={addToCart}
        />
      ))}
    </div>
  );
};

export default ProductList;

import React from 'react';
import Card from './Card';

function Products() {
  const products = [
    {
      id: 1,
      name: 'vest',
      price: 50,
    },
    {
      id: 2,
      name: 'jacket',
      price: 70,
    },
    {
      id: 3,
      name: 'sweater',
      price: 20,
    },
    {
      id: 4,
      name: 'tshirt',
      price: 40,
    },
    {
      id: 5,
      name: 'necklace',
      price: 70,
    },
    {
      id: 6,
      name: 'jumper',
      price: 40,
    },
  ];

  return (
    <div className='productList'>
      {products.map((product) => {
        return (
          <Card key={product.id} name={product.name} price={product.price} />
        );
      })}
    </div>
  );
}

export default Products;

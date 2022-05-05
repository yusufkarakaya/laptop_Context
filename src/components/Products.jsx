import React from 'react';
import Card from './Card';

function Products() {
  const products = [
    {
      id: 1,
      name: 'HP - 17.3" Laptop - Intel Core i5 ',
      price: 519.99,
    },
    {
      id: 2,
      name: 'HP - 14" 2-In-1 Touchscreen Chromebook - Intel Celeron ',
      price: 129.0,
    },
    {
      id: 3,
      name: 'Dell - Precision 7000 17.3" Laptop - Intel Core i7 ',
      price: 533.0,
    },
    {
      id: 4,
      name: 'MSI - Vector GP76 17.3" Gaming Laptop - Intel Core i9 ',
      price: 949.0,
    },
    {
      id: 5,
      name: 'Dell - Precision 5000 17" Laptop - Intel Core i7 ',
      price: 570.99,
    },
    {
      id: 6,
      name: 'MSI - WS66 15.6" Gaming Laptop - Intel Core i9 ',
      price: 629.99,
    },
    {
      id: 7,
      name: 'Dell - Precision 5000 17" Laptop - Intel Core i7 ',
      price: 569.99,
    },
  ];

  return (
    <div className='productContainer'>
      <div className='productList'>
        {products.map((product) => {
          return (
            <Card key={product.id} name={product.name} price={product.price} />
          );
        })}
      </div>
    </div>
  );
}

export default Products;

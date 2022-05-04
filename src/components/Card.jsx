import React from 'react';
import { IoShirtOutline } from 'react-icons/io5';
import { AiFillShopping } from 'react-icons/ai';
import { useContext } from 'react';
import CardContext from '../CardContext';

function Card({ name, price }) {
  const { addToCard } = useContext(CardContext);

  return (
    <div onClick={() => addToCard(name, price)} className='card'>
      <div className='cardIcon'>
        <IoShirtOutline />
      </div>
      <div className='cardNameIcon'>
        <h3>{name}</h3>
        <AiFillShopping />
      </div>
      <h4>${price}</h4>
    </div>
  );
}

export default Card;

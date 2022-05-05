import React, { useContext } from 'react';
import styled from 'styled-components';

import CardContext from '../CardContext';

import { IoShirtOutline } from 'react-icons/io5';
import { AiFillShopping } from 'react-icons/ai';

function Card({ name, price }) {
  const { addToCart } = useContext(CardContext);

  return (
    <div onClick={() => addToCart(name, price)} className='card'>
      <div className='cardIcon'>
        <IoShirtOutline />
      </div>
      <div className='cardNameIcon'>
        <h3>{name}</h3>
      </div>
      <Flex>
        <h4>${price}</h4>
        <AiFillShopping />
      </Flex>
    </div>
  );
}

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-top: 1px solid;

  svg {
    font-size: 2rem;
    color: #2c6705;
    cursor: pointer;
    transition: all 0.2s linear;
  }
  svg:hover {
    color: #7bbb51;
  }
  h4 {
    font-size: 1.5rem;
  }
`;

export default Card;

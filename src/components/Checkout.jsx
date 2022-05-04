import React from 'react';
import { useContext } from 'react';
import CardContext from '../CardContext';
import styled from 'styled-components';
import { MdOutlineRemoveShoppingCart } from 'react-icons/md';

function Checkout() {
  const { items } = useContext(CardContext);
  const { handleRemoveItem } = useContext(CardContext);

  return (
    <Wrapper>
      <div>
        <p>Contact Form</p>
      </div>
      <div>
        {items.map((item) => {
          return (
            <Items>
              <p>{item.name}</p>
              <p>${item.price}</p>
              <span onClick={() => handleRemoveItem(item.name)}>
                <MdOutlineRemoveShoppingCart />
              </span>
            </Items>
          );
        })}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  margin: 2rem 30rem;
  justify-content: space-between;
  min-width: 1000px;

  p {
    font-size: 1.3rem;
  }

  span {
    font-size: 1.2rem;
    cursor: pointer;
  }
  span:hover {
    color: red;
    transition: all 0.1s linear;
  }
`;

const Items = styled.div`
  display: flex;
  gap: 3rem;
  align-items: center;
  justify-content: flex-end;
`;

export default Checkout;

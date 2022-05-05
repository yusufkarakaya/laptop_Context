import React, { useContext } from 'react';
import styled from 'styled-components';
import { MdOutlineRemoveShoppingCart } from 'react-icons/md';
import CardContext from '../CardContext';

function Checkout() {
  const { items } = useContext(CardContext);
  const { removeItem } = useContext(CardContext);

  return (
    <Wrapper>
      <div></div>
      <div>
        <div>
          {items.map((product) => {
            return (
              <Items>
                <p key={product.id}>{product.name}</p>
                <p>{product.price}</p>
                <span onClick={() => removeItem(product.name)}>
                  <MdOutlineRemoveShoppingCart />
                </span>
              </Items>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  margin: 2rem 20rem;
  justify-content: space-evenly;

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
  p {
    font-size: 1rem;
  }
`;

export default Checkout;

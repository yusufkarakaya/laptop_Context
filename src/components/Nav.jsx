import React from 'react';
import { IoBagCheckOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import CardContext from '../CardContext';
import { useContext } from 'react';

function Nav() {
  const { items } = useContext(CardContext);
  return (
    <header>
      <div>
        <div>
          <Link to={'/'}>
            <strong>NOTEBOOK</strong>
          </Link>
        </div>
        <div className='checkout'>
          <Link to={'/checkout'}>
            <IoBagCheckOutline className='buttonCheckout' />
          </Link>
          <span>{items.length}</span>
        </div>
      </div>
    </header>
  );
}

export default Nav;

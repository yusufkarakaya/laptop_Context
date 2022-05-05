import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Nav from './components/Nav';
import Products from './components/Products';
import Checkout from './components/Checkout';
import { CardProvider } from './CardContext';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <CardProvider>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path={'/'} element={<Products />} />
          <Route path={'/checkout'} element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </CardProvider>
  );
}

export default App;

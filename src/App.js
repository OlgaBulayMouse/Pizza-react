import React from 'react';
import {Route, Routes} from "react-router-dom";

import './scss/app.scss';
import Header from './components/header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';

function App() {

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='*' element={<NotFound />} />
              <Route path='/cart' element={<Cart />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

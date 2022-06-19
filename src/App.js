import React from 'react';
import './scss/app.scss';
import Header from './components/header';
import Categories from './components/categories';
import Sort from './components/sort';
import PizzaBlock from './components/pizzaBlock';


function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              <PizzaBlock title='Мексиканская' price='200'/>
              <PizzaBlock title='4 сезона' price='600'/>
              <PizzaBlock title='Острая' price='400'/>
              <PizzaBlock title='Американская' price='300'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

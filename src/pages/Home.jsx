import React from "react";

import Categories from "../components/categories";
import Sort from "../components/sort";
import PizzaBlock from "../components/pizzaBlock";

function Home() {
  const [itemsPizza, setItemsPizza] = React.useState([]);

  React.useEffect(() => {
    fetch("https://62bc9761eff39ad5ee2869c7.mockapi.io/pizza")
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItemsPizza(arr);
      });
  }, []);
  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {itemsPizza.map((objPizza) => (
          <PizzaBlock key={objPizza.id} {...objPizza} />
        ))}
        ;
      </div>
    </>
  );
}

export default Home;

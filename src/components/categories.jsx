import React from "react";

function Categories() {
  const [activeIndexCategory, setActiveIndexCategory] = React.useState(0)

const category = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

  const onClickCategory = (index) => {
    setActiveIndexCategory(index)
  };

  return (
    <div className="categories">
      <ul>
        {
          category.map((value, index) => (
            <li onClick={() => onClickCategory(index)}
                className={activeIndexCategory === index  ? 'active' : ''}>{value}</li>
          ))
        }
      </ul>
    </div>
  );
};

export default Categories;

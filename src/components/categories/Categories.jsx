import React from "react";
const Categories = () => {
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  const [activeCategory, setActiveCateory] = React.useState(0);

  const onClickCategoryChange = (index) => {
    setActiveCateory(index);
  };
  return (
    <div className="categories">
      <ul>
        {categories.map((item, idx) => {
          return (
            <li
              key={idx}
              className={activeCategory === idx ? "active" : null}
              onClick={() => {
                onClickCategoryChange(idx);
              }}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Categories;

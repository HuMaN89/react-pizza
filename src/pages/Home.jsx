import React from "react";
import ContentMenu from "../components/contentMenu/ContentMenu";
import PizzaItems from "../components/pizzaItems/PizzaItems";

const Home = ({ filter }) => {
  const [pizzas, setPizzas] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [activeCategory, setActiveCateory] = React.useState(0);
  const [activeSort, setActiveSort] = React.useState(0);
  const [visibleData, setVisibleData] = React.useState([]);
  let category = "";
  let sort = "";
  if (activeCategory !== 0) {
    category = `&category=${activeCategory}`;
  }
  const chose = {
    0: "?sortBy=rating&order=inc",
    1: "?sortBy=rating&order=desc",
    2: "?sortBy=name&order=inc",
    3: "?sortBy=name&order=desc",
    4: "?sortBy=price&order=inc",
    5: "?sortBy=price&order=desc",
  };
  const request = () => {
    fetch(
      `https://62d838df9c8b5185c78591dc.mockapi.io/pizzas${chose[activeSort]}${category}`
    )
      .then((res) => res.json())
      .then((json) => {
        setPizzas(json);
        setVisibleData(json);
        setLoading(false);
      });
  };
  React.useEffect(() => {
    // onRequest(true);
    request();
    window.scrollTo(0, 0);
  }, [activeCategory, activeSort]);

  React.useEffect(() => {
    if (filter !== "all") {
      setVisibleData((pizzas) => {
        return pizzas.filter((pizza) => {
          return pizza.name.indexOf(filter) !== -1;
        });
      });
    } else {
      setVisibleData(pizzas);
    }
  }, [filter]);
  return (
    <>
      <div className="container">
        <ContentMenu
          activeCategory={activeCategory}
          setActiveCateory={setActiveCateory}
          activeSort={activeSort}
          setActiveSort={setActiveSort}
        />
        <h2 className="content__title">Все пиццы</h2>
        <PizzaItems pizzas={visibleData} loading={loading} />
      </div>
    </>
  );
};

export default Home;

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
  switch (activeSort) {
    case 0:
      sort = "?sortBy=rating&order=inc";
      break;
    case 1:
      sort = "?sortBy=rating&order=desc";
      break;
    case 2:
      sort = "?sortBy=name&order=inc";
      break;
    case 3:
      sort = "?sortBy=name&order=desc";
      break;
    case 4:
      sort = "?sortBy=price&order=inc";
      break;
    case 5:
      sort = "?sortBy=price&order=desc";
      break;
    default:
      sort = "?sortBy=name&order=inc";
      break;
  }
  const request = () => {
    fetch(
      `https://62d838df9c8b5185c78591dc.mockapi.io/pizzas${sort}${category}`
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
  console.log(filter);
  console.log(visibleData);
  console.log(pizzas);
  console.log("_______________________________________");
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

import React from "react";
import ContentMenu from "../components/contentMenu/ContentMenu";
import PizzaItems from "../components/pizzaItems/PizzaItems";

const Home = () => {
  const [pizzas, setPizzas] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const request = () => {
    fetch("https://62d838df9c8b5185c78591dc.mockapi.io/pizzas")
      .then((res) => res.json())
      .then((json) => {
        setPizzas(json);
        setLoading(false);
      });
  };
  React.useEffect(() => {
    // onRequest(true);
    request();
  }, []);

  return (
    <>
      <ContentMenu />
      <h2 className="content__title">Все пиццы</h2>
      <PizzaItems pizzas={pizzas} loading={loading} />
    </>
  );
};

export default Home;

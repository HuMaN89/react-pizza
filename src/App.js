import React from "react";
import "./scss/app.scss";
import Header from "./components/header/Header";
import ContentMenu from "./components/contentMenu/ContentMenu";
import PizzaItems from "./components/pizzaItems/PizzaItems";
import usePizzalService from "./services/PizzaService";

function App() {
  const [pizzas, setPizzas] = React.useState([]);
  const { getAllPizzas, loading, error } = usePizzalService();
  const onRequest = (initial) => {
    getAllPizzas().then(onPizzasLoaded);
  };

  const onPizzasLoaded = (res) => {
    console.log(res);
    setPizzas(res);
  };

  React.useEffect(() => {
    onRequest(true);
  }, []);
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <ContentMenu />
          <h2 className="content__title">Все пиццы</h2>
          <PizzaItems pizzas={pizzas} />
        </div>
      </div>
    </div>
  );
}

export default App;

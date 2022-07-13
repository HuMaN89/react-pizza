import "./scss/app.scss";
import Header from "./components/header/Header";
import ContentMenu from "./components/contentMenu/ContentMenu";
import PizzaItems from "./components/pizzaItems/PizzaItems";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <ContentMenu />
          <h2 className="content__title">Все пиццы</h2>
          <PizzaItems />
        </div>
      </div>
    </div>
  );
}

export default App;

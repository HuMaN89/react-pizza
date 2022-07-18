import PizzaItem from "../pizzaItem/PizzaItem";
import pizzas from "../../assets/pizzas.json";

const PizzaItems = () => {
  return (
    <div className="content__items">
      {pizzas.map((item) => {
        return <PizzaItem key={item.id} {...item} />;
      })}
    </div>
  );
};

export default PizzaItems;

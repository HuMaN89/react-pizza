import PizzaItem from "../pizzaItem/PizzaItem";
import Skeleton from "../skeleton/Skeleton";

const PizzaItems = ({ pizzas }) => {
  const elements = () => {
    if (pizzas) {
      return pizzas.map((item) => {
        return <PizzaItem key={item.id} {...item} />;
      });
    } else {
      return <Skeleton />;
    }
  };
  return <div className="content__items">{elements}</div>;
};

export default PizzaItems;

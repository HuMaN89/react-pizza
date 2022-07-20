import PizzaItem from "../pizzaItem/PizzaItem";

const PizzaItems = ({ pizzas }) => {
  return (
    <div className="content__items">
      {pizzas.map((item) => {
        return <PizzaItem key={item.id} {...item} />;
      })}
    </div>
  );
};

export default PizzaItems;

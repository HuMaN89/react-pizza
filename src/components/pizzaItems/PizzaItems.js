import PizzaItem from "../pizzaItem/PizzaItem";

const PizzaItems = () => {
  return (
    <div className="content__items">
      {[1, 2, 3].map((item) => {
        return <PizzaItem />;
      })}
    </div>
  );
};

export default PizzaItems;

import PizzaItem from "../pizzaItem/PizzaItem";

const PizzaItems = () => {
  return (
    <div className="content__items">
      {[1, 2, 3].map((item, idx) => {
        return <PizzaItem key={idx} />;
      })}
    </div>
  );
};

export default PizzaItems;

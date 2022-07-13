import PizzaItem from "../pizzaItem/PizzaItem";

const PizzaItems = () => {
  const elements = () => {
    for (let i = 0; i < 9; i++) {
      return <PizzaItem />;
    }
  };
  return (
    <div className="content__items">
      {[1, 2, 3].map((item) => {
        return <PizzaItem />;
      })}
    </div>
  );
};

export default PizzaItems;

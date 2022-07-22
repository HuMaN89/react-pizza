import PizzaItem from "../pizzaItem/PizzaItem";
import Skeleton from "../skeleton/Skeleton";

const PizzaItems = ({ pizzas, loading }) => {
  const skeletonCount = 10;
  const renderList = (arr) => {
    return (
      <>
        {arr.map((item) => {
          return <PizzaItem key={item.id} {...item} />;
        })}
      </>
    );
  };
  const elements = renderList(pizzas);
  return (
    <div className="content__items">
      {loading
        ? [...new Array(10)].map((_, index) => <Skeleton key={index} />)
        : elements}
    </div>
  );
};

export default PizzaItems;

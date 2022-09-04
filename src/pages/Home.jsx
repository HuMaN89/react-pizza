import React from "react";
import { SearchContext } from "../App";
import ContentMenu from "../components/contentMenu/ContentMenu";
import Pagination from "../components/pagination/Pagination";
import PizzaItems from "../components/pizzaItems/PizzaItems";
import { useSelector, useDispatch } from "react-redux";
import { setCategoryId, setSortId } from "../redux/slices/filterSlice";
import axios from "axios";

const Home = () => {
  const activeCategory = useSelector((state) => state.filter.categoryId);
  const activeSort = useSelector((state) => state.filter.sortId);
  const dispatch = useDispatch();

  const changeCategoryId = (id) => {
    dispatch(setCategoryId(id));
  };
  const changeSortId = (id) => {
    dispatch(setSortId(id));
  };

  const { filter } = React.useContext(SearchContext);
  const setActiveCateory = () => {};

  const [pizzas, setPizzas] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  // const [activeCategory, setActiveCateory] = React.useState(0);
  // const [activeSort, setActiveSort] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [visibleData, setVisibleData] = React.useState([]);
  let category = "";
  let sort = "";
  if (activeCategory !== 0) {
    category = `&category=${activeCategory}`;
  }
  switch (activeSort) {
    case 0:
      sort = "sortBy=rating&order=inc";
      break;
    case 1:
      sort = "sortBy=rating&order=desc";
      break;
    case 2:
      sort = "sortBy=name&order=inc";
      break;
    case 3:
      sort = "sortBy=name&order=desc";
      break;
    case 4:
      sort = "sortBy=price&order=inc";
      break;
    case 5:
      sort = "sortBy=price&order=desc";
      break;
    default:
      sort = "sortBy=name&order=inc";
      break;
  }
  const request = () => {
    axios
      .get(
        `https://62d838df9c8b5185c78591dc.mockapi.io/pizzas?page=${currentPage}&limit=4&${sort}${category}`
      )
      .then((res) => {
        setPizzas(res.data);
        setVisibleData(res.data);
        setLoading(false);
      });
  };
  React.useEffect(() => {
    // onRequest(true);
    request();
    window.scrollTo(0, 0);
  }, [activeCategory, activeSort, currentPage]);

  React.useEffect(() => {
    if (filter === "all") {
      setVisibleData(pizzas);
    } else {
      setVisibleData(() => {
        return pizzas.filter((pizza) => {
          return pizza.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
        });
      });
    }
  }, [filter]);

  return (
    <>
      <div className="container">
        <ContentMenu
          activeCategory={activeCategory}
          setActiveCateory={changeCategoryId}
          activeSort={activeSort}
          setActiveSort={changeSortId}
        />
        <h2 className="content__title">Все пиццы</h2>
        <PizzaItems pizzas={visibleData} loading={loading} />
      </div>
      <Pagination onChangePage={setCurrentPage} />
    </>
  );
};

export default Home;

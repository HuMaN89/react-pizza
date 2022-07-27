import Categories from "../categories/Categories";
import Sort from "../sort/Sort";

const ContentMenu = ({
  activeCategory,
  setActiveCateory,
  activeSort,
  setActiveSort,
}) => {
  return (
    <div className="content__top">
      <Categories
        activeCategory={activeCategory}
        setActiveCateory={setActiveCateory}
      />

      <Sort activeSort={activeSort} setActiveSort={setActiveSort} />
    </div>
  );
};

export default ContentMenu;

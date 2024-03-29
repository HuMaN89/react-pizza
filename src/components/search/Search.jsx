import React from "react";
import { SearchContext } from "../../App";
import debounce from "lodash.debounce";
import style from "./Search.module.scss";

const Search = () => {
  const { filter, setFilter } = React.useContext(SearchContext);
  const inputRef = React.useRef();

  const testDebounce = React.useCallback(
    debounce((e) => {
      console.log("debounce");
    }, 1500),
    []
  );

  const onChangeFilter = (e) => {
    e.target.value ? setFilter(e.target.value) : setFilter("all");
    testDebounce();
  };
  const clearFilter = (e) => {
    e.target.value = "";
    inputRef.current.focus();
    setFilter("all");
  };
  const styles = {
    opacity: filter !== "all" ? "1" : "0",
    right: filter !== "all" ? "15px" : "-25px",
  };
  return (
    <div className={style.search}>
      <input
        ref={inputRef}
        placeholder="Поиск"
        className={style.input}
        onChange={onChangeFilter}
        value={filter === "all" ? "" : filter}
      />
      <svg
        style={styles}
        className={style.close}
        onClick={clearFilter}
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g data-name="Layer 2">
          <g data-name="close">
            <rect
              width="24"
              height="24"
              transform="rotate(180 12 12)"
              opacity="0"
            />
            <path d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z" />
          </g>
        </g>
      </svg>

      <svg
        className={style.icon}
        enableBackground="new 0 0 32 32"
        id="Glyph"
        version="1.1"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M27.414,24.586l-5.077-5.077C23.386,17.928,24,16.035,24,14c0-5.514-4.486-10-10-10S4,8.486,4,14  s4.486,10,10,10c2.035,0,3.928-0.614,5.509-1.663l5.077,5.077c0.78,0.781,2.048,0.781,2.828,0  C28.195,26.633,28.195,25.367,27.414,24.586z M7,14c0-3.86,3.14-7,7-7s7,3.14,7,7s-3.14,7-7,7S7,17.86,7,14z"
          id="XMLID_223_"
        />
      </svg>
    </div>
  );
};

export default Search;

import React from "react";
import "./scss/app.scss";
import Header from "./components/header/Header";
import ContentMenu from "./components/contentMenu/ContentMenu";
import PizzaItems from "./components/pizzaItems/PizzaItems";
import Home from "./pages/Home";
import Card from "./pages/Card";
import Page404 from "./pages/Page404";

import { Routes, Route } from "react-router-dom";

export const SearchContext = React.createContext("");
function App() {
  const [filter, setFilter] = React.useState("all");

  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ filter, setFilter }}>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/card" element={<Card />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;

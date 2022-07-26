import React from "react";
import "./scss/app.scss";
import Header from "./components/header/Header";
import ContentMenu from "./components/contentMenu/ContentMenu";
import PizzaItems from "./components/pizzaItems/PizzaItems";
import Home from "./pages/Home";
import Card from "./pages/Card";
import Page404 from "./pages/Page404";

import { Routes, Route } from "react-router-dom";

function App() {
  // const { getAllPizzas, loading, error } = usePizzalService();
  // const onRequest = (initial) => {
  //   getAllPizzas().then(onPizzasLoaded);
  // };

  // const onPizzasLoaded = (res) => {
  //   console.log(res);
  //   setPizzas(res);
  // };

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/card" element={<Card />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

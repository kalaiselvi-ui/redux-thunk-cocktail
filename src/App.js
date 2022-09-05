import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import CocktailDetails from "./pages/CocktailDetails";
function App() {
  return (
    <div className="App">
      <h2>Cocktail using redux thunk</h2>
      <Header />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cocktail/:id" element={<CocktailDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

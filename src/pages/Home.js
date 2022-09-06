import React from "react";
import CocktailList from "../component/CocktailList";
import SearchInput from "../component/SearchInput";

const Home = () => {
  return (
    <div>
      <SearchInput />
      <CocktailList />
    </div>
  );
};

export default Home;

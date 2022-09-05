import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleCocktail } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";

const CocktailDetails = () => {
  const { cocktail, loading } = useSelector((state) => ({ ...state.data }));
  const [modifiedCocktail, setModifiedCocktail] = useState(null);
  const { id } = useParams();
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleCocktail(id));
  }, [id]);

  useEffect(() => {
    if (cocktail.length > 0) {
      const {
        strDrink: name,
        strDrinkThumb: image,
        strAlcoholic: info,
        strCategory: category,
        strGlass: glass,
        strInstructions: instructions,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      } = cocktail[0];
      const ingredients = [
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      ];
      const newCocktail = {
        name,
        image,
        info,
        category,
        instructions,
        ingredients,
      };
      setModifiedCocktail(newCocktail);
    } else {
      setModifiedCocktail(null);
    }
  }, [id, cocktail]);
  return (
    <div>
      <h2>CocktailDetails</h2>
      <h2>CocktailDetails</h2>
      <h2>CocktailDetails</h2>
      <h2>CocktailDetails</h2>
      <h2>CocktailDetails</h2>
      <h2>CocktailDetails</h2>
      <h2>CocktailDetails</h2>
      <h2>CocktailDetails</h2>
    </div>
  );
};

export default CocktailDetails;

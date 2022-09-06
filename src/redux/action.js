import * as types from "./actionTypes";
import axios from "axios";

const fetchCockTailStart = () => ({
  type: types.FETCH_COCKTAIL_START,
});

const fetchCockTailSuccess = (cocktails) => ({
  type: types.FETCH_COCKTAIL_SUCCESS,
  payload: cocktails,
});

const fetchCockTailFail = (error) => ({
  type: types.FETCH_COCKTAIL_FAIL,
  payload: error,
});
const fetchSearchCocktailStart = () => ({
  type: types.SEARCH_COCKTAIL_START,
});

const fetchSearchCocktailSuccess = (cocktails) => ({
  type: types.SEARCH_COCKTAIL_SUCCESS,
  payload: cocktails,
});

const fetchSearchCocktailFail = (error) => ({
  type: types.SEARCH_COCKTAIL_FAIL,
  payload: error,
});
const fetchSingleCockTailStart = () => ({
  type: types.GET_SINGLE_COCKTAIL_START,
});

const fetchSingleCockTailSuccess = (cocktails) => ({
  type: types.GET_SINGLE_COCKTAIL_SUCCESS,
  payload: cocktails,
});

const fetchSingleCockTailFail = (error) => ({
  type: types.GET_SINGLE_COCKTAIL_FAIL,
  payload: error,
});

export function fetchCocktail() {
  return function (dispatch) {
    dispatch(fetchCockTailStart());
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
      .then((response) => {
        const cocktails = response.data.drinks;
        dispatch(fetchCockTailSuccess(cocktails));
      })
      .catch((error) => {
        dispatch(fetchCockTailFail(error));
      });
  };
}
export function fetchSearchCocktail(searchText) {
  return function (dispatch) {
    dispatch(fetchSearchCocktailStart());
    axios
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`
      )
      .then((response) => {
        const cocktails = response.data.drinks;
        dispatch(fetchSearchCocktailSuccess(cocktails));
      })
      .catch((error) => {
        dispatch(fetchSearchCocktailFail(error));
      });
  };
}

export function fetchSingleCocktail(id) {
  return function (dispatch) {
    dispatch(fetchSingleCockTailStart());
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => {
        const cocktail = response.data.drinks;
        dispatch(fetchSingleCockTailSuccess(cocktail));
      })
      .catch((error) => {
        dispatch(fetchSingleCockTailFail(error));
      });
  };
}

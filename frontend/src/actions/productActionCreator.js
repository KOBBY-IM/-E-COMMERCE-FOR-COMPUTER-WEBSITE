import { FETCH_PRODUCTS_SUCCESS, SET_LOADING_STATE } from "./productActionType";

export const setLoadingState = (loadingState) => {
  return {
    type: SET_LOADING_STATE,
    loadingState
  };
};

export const setProducts = (products) => {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    products
  };
};

export const fetchProducts = () => {
	return (dispatch) => {
    dispatch(setLoadingState(true));

    return fetch('./products.json')
      .then((res) => res.json())
      .then((data) => dispatch(setProducts(data)))
      .catch((err) => console.log(err))
      .finally(() => dispatch(setLoadingState(false)));
  }
}
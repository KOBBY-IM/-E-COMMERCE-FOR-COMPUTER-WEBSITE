import { FETCH_PRODUCTS_SUCCESS, SET_LOADING_STATE } from "./productActionType";
import axios from 'axios';

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

    return axios.get('http://localhost:5000/api/products')
      .then((res) => res)
      .catch((err) => console.log(err))
      .finally(() => dispatch(setLoadingState(false)));
  }
}
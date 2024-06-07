import { FETCH_PRODUCTS_SUCCESS, SET_LOADING_STATE } from "../actions/productActionType";
import { Map } from "immutable";

export const initialStateProducts = {
  products: [],
  loading: false,
};

export const ProductsReducer = (state = Map(initialStateProducts), action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS: {
      return state.set('products', action.products);
    }
    case SET_LOADING_STATE: {
      return state.set('loading', action.loadingState);
    }
    default: 
    return state;
  }
};
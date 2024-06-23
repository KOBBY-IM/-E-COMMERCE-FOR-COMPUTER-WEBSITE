import { FETCH_PRODUCTS_SUCCESS, SET_LOADING_STATE } from "../actions/productActionType";
import { Map } from "immutable";

export const initialStateProducts = {
  products: [],
  loading: false,
};

export const productsReducer = (state = Map(initialStateProducts), action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS: {
      const data = action.products.map((product) => ({...product, images: 'http://localhost:8564/assets/' + product._id + '.jpeg'}) )
      return state.set('products', data);
    }
    case SET_LOADING_STATE: {
      return state.set('loading', action.loadingState);
    }
    default: 
    return state;
  }
};
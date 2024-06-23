import { CART_ADD_ITEM, CART_REMOVE_ITEM, SET_LOADING_STATE, CART_FETCH_SUCCESS } from "../actions/cartActionType";
import { Map } from "immutable";
import { cartNormalizer } from "../schema/cart";

export const initialStateCarts = {
  cart: [],
  loading: false
}

export const cartsReducer = (state = Map(initialStateCarts), action) => {
  switch (action.type) {
    case CART_FETCH_SUCCESS: {
      const normalizedData = cartNormalizer(action.data)
      return state.mergeDeep(normalizedData);
    }
    case CART_ADD_ITEM: {
      const normalizedData = cartNormalizer(action.product);
      return state.mergeDeep(normalizedData);
    }
    case CART_REMOVE_ITEM: {
      const updatedCart = state.get('cart').filter(item => item._id !== action.product._id);
      return state.set('cart', updatedCart);
    }
    case SET_LOADING_STATE: {
      return state.set('loading', action.loadingState);
    }
    default: 
    return state;
  }
}


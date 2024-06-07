import {
  DISPLAY_CART_DRAWER,
  HIDE_CART_DRAWER
} from "../actions/uiActionType";
import { Map } from 'immutable';

export const initialStateUi = {
  isCartDrawerVisible : false,
  IsUSerLoggedIn: false,
  user: null,
};

export const uiReducer = (state = Map(initialStateUi), action) => {
  switch (action.type) {
    case DISPLAY_CART_DRAWER: {
      return state.set('isCartDrawerVisible', true);
    }
    case HIDE_CART_DRAWER: {
      return state.set('isCartDrawerVisible', false);
    }
    default: {
      return state;
    }
  }
};
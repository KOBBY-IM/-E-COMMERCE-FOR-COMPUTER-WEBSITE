import {
  DISPLAY_CART_DRAWER,
  HIDE_CART_DRAWER,
  LOGIN,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT,
  SIGNUP,
  SIGNUP_FAILURE,
  SIGNUP_SUCCESS
} from "../actions/uiActionType";
import { Map } from 'immutable';

export const initialStateUi = {
  isCartDrawerVisible : false,
  IsUSerLoggedIn: false,
  user: null,
};

export const userInteractionReducer = (state = Map(initialStateUi), action) => {
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

export const userLoginReducer = (state = Map(initialStateUi), action) => {
  switch (action.type) {
    case LOGIN: {
      return state.set('user', action.user);
    }
    case LOGIN_SUCCESS: {
      return state.set('IsUSerLoggedIn', true);
    }
    case LOGIN_FAILURE: {
      return state.set('IsUSerLoggedIn', false);
    }
  }
};

export const userSignUpReducer = (state = Map(initialStateUi), action) => {
  switch (action.type) {
    case SIGNUP: {
      return state.set('user', action.user);
    }
    case SIGNUP_SUCCESS: {
      return state.set('IsUSerLoggedIn', true);
    }
    case SIGNUP_FAILURE: {
      return state.set('IsUSerLoggedIn', false);
    }
  }
};

export const userLogoutReducer = (state = Map(initialStateUi), action) => {
  switch (action.type) {
    case LOGOUT: {
      return state.set('IsUSerLoggedIn', false).set('user', null);
    }
  }
};
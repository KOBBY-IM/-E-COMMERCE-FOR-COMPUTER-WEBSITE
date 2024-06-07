import {
  LOGIN,
  LOGOUT,
  DISPLAY_CART_DRAWER,
  HIDE_CART_DRAWER
} from './uiActionType';

export const login = (email, password) => {
  return {
    type: LOGIN,
    user: {
      email,
      password
    }
  };
};

export const logout = () => {
  return {
    type: LOGOUT
  };
};

export const displayCartDrawer = () => {
  return {
    type: DISPLAY_CART_DRAWER
  };
};

export const hideCartDrawer = () => {
  return {
    type: HIDE_CART_DRAWER
  };
};

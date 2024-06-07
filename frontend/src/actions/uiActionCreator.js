import {
  LOGIN,
  LOGOUT,
  DISPLAY_CART_DRAWER,
  HIDE_CART_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP,
  SIGNUP_FAILURE,
  SIGNUP_SUCCESS
} from './uiActionType';
import 'node-fetch';

export const login = (email, password) => {
  return {
    type: LOGIN,
    user: {
      email,
      password
    }
  };
};

export const loginSuccess = () => {
  return {
    type: LOGIN_SUCCESS
  };
};

export const loginFailure = () => {
  return {
    type: LOGIN_FAILURE
  };
};

export const signUp = (user) => {
  return {
    type: SIGNUP,
    user
  };
};

export const signUpSuccess = () => {
  return {
    type: SIGNUP_SUCCESS
  };
};

export const signUpFailure = () => {
  return {
    type: SIGNUP_FAILURE
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

export const signUpRequest = (user) => {
  return(dispatch) => {
    {
      dispatch(signUp(user))

      return fetch('')
      .then((res) => res.json())
      .then((json) => dispatch(signUpSuccess()))
      .catch((err) => dispatch(signUpFailure()));
    }
  }
}

export const loginRequest = (email, password) => {
  return(dispatch) => {
    {
      dispatch(login(email, password))

      return fetch('')
      .then((res) => res.json())
      .then((json) => dispatch(loginSuccess()))
      .catch((err) => dispatch(loginFailure()));
    }
  }
}
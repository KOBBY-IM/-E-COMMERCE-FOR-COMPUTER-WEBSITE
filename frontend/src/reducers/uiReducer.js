import {
  DISPLAY_CART_DRAWER,
  HIDE_CART_DRAWER,
  LOGIN,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER,
  REGISTER_FAILURE,
  REGISTER_SUCCESS
} from "../actions/uiActionType";
import { Map } from 'immutable';

export const initialStateUi = {
  isCartDrawerVisible : false,
  isUserLoggedIn: false,
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
    case LOGIN: {
      return state.set('user', action.user);
    }
    case LOGIN_SUCCESS: {
      return state.set('isUserLoggedIn', true);
    }
    case LOGIN_FAILURE: {
      return state.set('isUserLoggedIn', false);
    }
    case REGISTER: {
      return state.set('user', action.user);
    }
    case REGISTER_SUCCESS: {
      return state.set('isUserLoggedIn', true);
    }
    case REGISTER_FAILURE: {
      return state.set('isUserLoggedIn', false);
    }
    case LOGOUT: {
      return state.set('isUserLoggedIn', false).set('user', null);
    }
    default: {
      return state;
    }
  }
};

// export const userLoginReducer = (state = Map(initialStateUi), action) => {
//   switch (action.type) {
//     case LOGIN: {
//       return state.set('user', action.user);
//     }
//     case LOGIN_SUCCESS: {
//       return state.set('isUserLoggedIn', true);
//     }
//     case LOGIN_FAILURE: {
//       return state.set('isUserLoggedIn', false);
//     }
//   }
// };

// export const userRegisterReducer = (state = Map(initialStateUi), action) => {
//   switch (action.type) {
//     case REGISTER: {
//       return state.set('user', action.user);
//     }
//     case REGISTER_SUCCESS: {
//       return state.set('isUserLoggedIn', true);
//     }
//     case REGISTER_FAILURE: {
//       return state.set('isUserLoggedIn', false);
//     }
//   }
// };

// export const userLogoutReducer = (state = Map(initialStateUi), action) => {
//   switch (action.type) {
//     case LOGOUT: {
//       return state.set('isUserLoggedIn', false).set('user', null);
//     }
//   }
// };
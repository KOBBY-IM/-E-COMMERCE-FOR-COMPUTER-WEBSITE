import {
  LOGIN,
  LOGOUT,
  DISPLAY_CART_DRAWER,
  HIDE_CART_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER,
  REGISTER_FAILURE,
  REGISTER_SUCCESS
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

export const register = (user) => {
  return {
    type: REGISTER,
    user
  };
};

export const registerSuccess = () => {
  return {
    type: REGISTER_SUCCESS
  };
};

export const registerFailure = () => {
  return {
    type: REGISTER_FAILURE
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

export const registerRequest = (user) => {
  return(dispatch) => {
    {
      dispatch(register(user))

      return fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        body: {user}
      })
      .then((res) => res.json())
      .then((json) => dispatch(registerSuccess()))
      .catch((err) => dispatch(registerFailure()));
    }
  }
}

// export const loginRequest = (email, password) => {
//   return(dispatch) => {
//     {
//       dispatch(login(email, password))

//       return fetch('http://localhost:5000/api/auth/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           email,
//           password
//         })
//       })
//       .then((res) => res.json())
//       .then((json) => dispatch(loginSuccess()))
//       .catch((err) => dispatch(loginFailure()));
//     }
//   }
// }

export const loginRequest = (email, password) => {
  return async (dispatch) => {
    dispatch(login(email, password));

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error(response.message);
      }

      const data = await response.json();
      dispatch(loginSuccess());
    } catch (error) {
      dispatch(loginFailure());
    }
  };
};
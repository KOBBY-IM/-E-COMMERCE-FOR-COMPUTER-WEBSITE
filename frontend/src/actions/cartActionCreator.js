import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_FETCH_SUCCESS, SET_LOADING_STATE } from "./cartActionType";

export const cartAddItem = (products) => {
  return {
    type: CART_ADD_ITEM,
    products
  };
};

export const cartRemoveItem = (products) => {
  return {
    type: CART_REMOVE_ITEM,
    products
  };
}

export const setLoadingState = (loadingState) => {
  return {
    type: SET_LOADING_STATE,
    loadingState
  };
};

export const setCart = (data) => {
  return {
    type: CART_FETCH_SUCCESS,
    data
  };
}

export const fetchCartData = (user) => {
  return async (dispatch) => {
    dispatch(setLoadingState(true));
    try {
      const response = await fetch('http://localhost:5000/api/cart', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch cart data');
      }

      const cartData = await response.json();
      dispatch(setCart(cartData));
      dispatch(setLoadingState(false));
    } catch (error) {
      console.error('Error fetching cart data:', error);
      dispatch(fetchCartFailure(error));
      dispatch(setLoadingState(false));
    }
  };
};

export const AddCartItem = (user, productId, quantity) => {
  return async (dispatch) => {
    try {
      const response = await fetch('http://localhost:5000/api/cart/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}` // Assuming you have the access token stored somewhere
        },
        body: JSON.stringify({ user, productId, quantity })
      });

      if (!response.ok) {
        throw new Error('Failed to add item to cart');
      }

      const cartData = await response.json();
      dispatch(addItemToCartSuccess(cartData));
    } catch (error) {
      console.error('Error adding item to cart:', error);
      dispatch(addItemToCartFailure(error));
    }
  };
};

export const RemoveCartItem = (user, productId) => {
  return async (dispatch) => {
    try {
      const response = await fetch('http://localhost:5000/api/cart/remove', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`
        },
        body: JSON.stringify({ productId })
      });

      if (!response.ok) {
        throw new Error('Failed to remove item from cart');
      }

      const cartData = await response.json();
      dispatch(setCart(cartData));
    } catch (error) {
      console.error('Error removing item from cart:', error);
      dispatch(fetchCartFailure(error));
    }
  };
};
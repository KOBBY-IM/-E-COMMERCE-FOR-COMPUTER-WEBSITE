import {
  ORDER_CREATE_FAIL, ORDER_CREATE_REQUEST, ORDER_CREATE_SUCCESS,
  ORDER_DELETE_FAIL, ORDER_DELETE_REQUEST, ORDER_DELETE_SUCCESS,
  ORDER_PAY_FAIL, ORDER_PAY_REQUEST, ORDER_PAY_SUCCESS
} from "./orderActionType";

export const createOrder = (products) => {
  return {
    type: ORDER_CREATE_REQUEST,
    products
  };
};

export const createOrderSuccess = () => {
  return {
    type: ORDER_CREATE_SUCCESS,
  };
}

export const createOrderFail = () => {
  return {
    type: ORDER_CREATE_FAIL,
  };
}

export const deleteOrder = (products) => {
  return {
    type: ORDER_DELETE_REQUEST,
    products
  };
};

export const deleteOrderSuccess = () => {
  return {
    type: ORDER_DELETE_SUCCESS,
  };
}

export const deleteOrderFail = () => {
  return {
    type: ORDER_DELETE_FAIL,
  };
}

export const payOrder = (products) => {
  return {
    type: ORDER_PAY_REQUEST,
    products
  };
};

export const payOrderSuccess = () => {
  return {
    type: ORDER_PAY_SUCCESS,
  };
}

export const payOrderFail = () => {
  return {
    type: ORDER_PAY_FAIL,
  };
}
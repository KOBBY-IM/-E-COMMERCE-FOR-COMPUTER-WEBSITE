import { Map } from "immutable";
import {
  userInteractionReducer,
  initialStateUi,
} from './uiReducer';
import { cartsReducer, initialStateCarts } from "./cartReducer";
import { initialStateProducts, productsReducer } from './productReducer';

export const initialState = {
  ui: Map(initialStateUi),
  products: Map(initialStateProducts),
  carts: Map(initialStateCarts),
};

export const rootReducer = {
  ui: userInteractionReducer,
  products: productsReducer,
  carts: cartsReducer,
}
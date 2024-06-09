import { Map } from "immutable";
import {
  userInteractionReducer,
  userLoginReducer,
  userLogoutReducer,
  userRegisterReducer,
  initialStateUi,
} from './uiReducer';
import { initialStateProducts, productsReducer } from './productReducer';

export const initialState = {
  ui: Map(initialStateUi),
  products: Map(initialStateProducts)
};

export const rootReducer = {
  ui: userInteractionReducer,
  products: productsReducer,
}
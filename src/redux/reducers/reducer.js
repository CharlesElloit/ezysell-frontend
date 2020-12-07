import { combineReducers } from "redux";

import userReducer from "./userReducer";
import cartReducer from "./cartReducer";
import productsReducer from "./productsReducer";

const reducers = combineReducers({
  users: userReducer,
  shoppingCart: cartReducer,
  products: productsReducer
});

export default reducers;

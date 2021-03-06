import { combineReducers } from "@reduxjs/toolkit";
import { reducer as pizzaReducer } from "./pizzaSlice";
import { reducer as ordersReducer } from "./ordersSlice";
import { reducer as currenciesReducer } from "./currenciesSlice";
import { reducer as profileReducer } from "./profileSlice";
import { reducer as cartReducer } from "./cartSlice";
import { reducer as globalReducer } from "./global";

export default combineReducers({
  pizza: pizzaReducer,
  orders: ordersReducer,
  currencies: currenciesReducer,
  profile: profileReducer,
  cart: cartReducer,
  global: globalReducer,
});

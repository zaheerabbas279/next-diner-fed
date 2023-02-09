import { configureStore } from "@reduxjs/toolkit";
import restaurantReducer from "../features/restaurants/restaurantSlice";

export default configureStore({
  reducer: {
    restaurant: restaurantReducer,
  },
});

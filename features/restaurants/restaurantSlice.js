import { createSlice } from "@reduxjs/toolkit";

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: [],
  reducers: {
    addRestaurant: (state, action) => {
      const _res = action.payload;
      return _res;
    },
  },
});

// export action
export const { addRestaurant } = restaurantSlice.actions;

// export reducer to store
export default restaurantSlice.reducer;

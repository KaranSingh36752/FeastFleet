import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload); //add the item to the array of items in the state
    },
    clearCart: (state) => {
      state.items = []; //clear out all the items in the cart
    },
    removeItem: (state, action) => {
      state.items.pop(); //remove the last item in the array because pop() removes the last added item
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 }); // Mutate the draft directly
      }
    },
    removeItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    addQuantity: (state, action) => {
      const existingItem = state.find((item) => item.id === action.payload);
      if (existingItem) {
        existingItem.quantity += 1;
      }
    },
    subQuantity: (state, action) => {
      const existingItem = state.find((item) => item.id === action.payload);
      if (existingItem) {
        if (existingItem.quantity === 1) {
          return state.filter((item) => item.id !== action.payload);
        }
        existingItem.quantity -= 1;
      }
    },
    clearCart: () => {
      return [];
    },
  },
});

export const cartSelector = (state) => state.cart;
export const { addItem, removeItem, subQuantity, addQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;

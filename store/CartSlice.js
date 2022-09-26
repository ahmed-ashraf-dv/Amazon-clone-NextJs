import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const CartSlice = createSlice({
  name: "CartSlice",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.products.push({ ...action.payload, qty: 1 });
    },
    delWithId: (state, action) => {
      const withoutProduct = state.products.filter(
        (product) => product.id != action.payload
      );

      state.products = withoutProduct;
    },
    increseProductFromCart: (state, action) => {
      const currentProductIdx = state.products.findIndex(
        (product) => product.id === action.payload?.id
      );

      const currentQty = state.products[currentProductIdx].qty;

      state.products[currentProductIdx].qty =
        action.payload?.qty || currentQty + 1;
    },
  },
});

export const { addToCart, delWithId, increseProductFromCart } =
  CartSlice.actions;

export default CartSlice.reducer;

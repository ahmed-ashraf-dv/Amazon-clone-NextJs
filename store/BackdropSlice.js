import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isShow: false,
};

export const BackdropSlice = createSlice({
  name: "BackdropSlice",
  initialState,
  reducers: {
    show: (state) => {
      state.isShow = true;
    },
    hidden: (state) => {
      state.isShow = false;
    },
  },
});

export const { show, hidden } = BackdropSlice.actions;

export default BackdropSlice.reducer;

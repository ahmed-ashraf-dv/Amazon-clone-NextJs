import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isShow: false,
};

export const AsideSlice = createSlice({
  name: "AsideSlice",
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

export const { show, hidden } = AsideSlice.actions;

export default AsideSlice.reducer;

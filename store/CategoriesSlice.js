import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  categories: [],
  isLoading: false,
};

export const getCategories = createAsyncThunk(
  "user/getCategories",
  async () => {
    const res = await axios("/api/getCategories");

    return res.data;
  }
);

export const CategoriesSlice = createSlice({
  name: "categories",
  initialState,
  extraReducers: {
    [getCategories.fulfilled]: (state, action) => {
      state.categories = action.payload;
      state.isLoading = true;
    },
  },
});

export default CategoriesSlice.reducer;

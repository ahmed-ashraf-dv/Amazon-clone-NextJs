import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  countryData: null,
  isLoading: false,
};

export const getCountry = createAsyncThunk("user/getCountry", async () => {
  const response = await axios("/api/ipAdress");

  return response.data;
});

export const UserSlice = createSlice({
  name: "UserSlice",
  initialState,
  extraReducers: {
    [getCountry.fulfilled]: (state, action) => {
      state.countryData = action.payload;
      state.isLoading = true;
    },
  },
});

export default UserSlice.reducer;

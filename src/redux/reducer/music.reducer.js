import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const musicSlice = createSlice({
  name: "music",
  initialState: {
    page: "Home",
  },
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { setPage } = musicSlice.actions;

export default musicSlice.reducer;

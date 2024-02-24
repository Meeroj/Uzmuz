import { configureStore } from "@reduxjs/toolkit";
import musicReducer from "../reducer/music.reducer";

export const store = configureStore({
  reducer: {
    music: musicReducer,
  },
});

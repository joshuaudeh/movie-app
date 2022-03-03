import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../slices/moviesSlice";
import searchReducer from "../slices/searchSlice";

export const store = configureStore({
  reducer: {
    movie: moviesReducer,
    search: searchReducer,
  },
});

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const API_KEY = process.env.REACT_APP_API_KEY;
export const movieData = createAsyncThunk(
  "addmovie/movieData",
  async (input) => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&query=${input}`
      );
      const response = await data.json();
      return response.results;
    } catch (error) {
      // console.error(error);
    }
  }
);

const initialState = {
  movies: [],
  isLoading: true,
  hasError: true,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, action) => {
      state.movies = action.payload;
    },
  },
  extraReducers: {
    [movieData.pending]: (state) => {
      state.isLoading = true;
    },
    [movieData.fulfilled]: (state, action) => {
      state.movies = action.payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [movieData.rejected]: (state) => {
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

export const { addMovies } = moviesSlice.actions;

export default moviesSlice.reducer;

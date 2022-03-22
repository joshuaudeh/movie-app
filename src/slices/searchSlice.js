import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const API_KEY = process.env.REACT_APP_API_KEY;
export const searchData = createAsyncThunk(
  "search/searchData",
  async (movieText) => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${movieText}`
      );
      const response = await data.json();
      console.log(response.results);
      return response.results;
    } catch (error) {
      // console.error(error);
    }
  }
);

const initialState = {
  movies: [],
  input: "",
  isLoading: true,
  hasError: true,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchTerm: (state, action) => {
      state.input = action.payload;
    },
    clearSearchTerm: (state) => {
      state.input = "";
    },
  },
  extraReducers: {
    [searchData.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [searchData.fulfilled]: (state, action) => {
      state.movies = action.payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [searchData.rejected]: (state) => {
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

export const { searchTerm, clearSearchTerm } = searchSlice.actions;

export default searchSlice.reducer;

import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useDebounce } from "use-debounce";

import { searchData, searchTerm } from "../slices/searchSlice";

function SearchInput() {
  const { input } = useSelector((state) => ({
    input: state.search.input,
  }));

  const [debouncedSearchInput] = useDebounce(input, 500);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchData(debouncedSearchInput));
  }, [dispatch, debouncedSearchInput]);

  const handleChange = (event) => {
    dispatch(searchTerm(event.target.value));
  };

  return (
    <div className="search">
      <h1>MOVIE APP</h1>
      <input
        type="search"
        value={input}
        onChange={handleChange}
        placeholder="Search movies..."
      />
    </div>
  );
}

export default SearchInput;

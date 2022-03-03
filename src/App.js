import React from "react";
import "./App.css";
import Movies from "./features/Movies";
import SearchInput from "./features/SearchInput";

function App() {
  return (
    <div className="App">
      <SearchInput />
      <Movies />
    </div>
  );
}

export default App;

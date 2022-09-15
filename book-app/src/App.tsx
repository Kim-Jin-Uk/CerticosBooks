import React from "react";
import Header from "./components/Header";
import Contents from "./components/Contents";

function App() {
  return (
    <>
      <Header selectMenu={"search"}></Header>
      <Contents title={"도서 검색"} hasSearchBar={true}></Contents>
    </>
  );
}

export default App;

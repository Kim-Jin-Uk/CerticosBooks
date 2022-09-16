import Header from "./components/Header";
import Contents from "./components/Contents";
import React from "react";

const Main = () => {
  return (
    <>
      <Header selectMenu={"search"}></Header>
      <Contents title={"도서 검색"} hasSearchBar={true}></Contents>
    </>
  );
};

export default Main;

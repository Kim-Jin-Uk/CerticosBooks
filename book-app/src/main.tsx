import Header from "./components/Header";
import Contents from "./components/Contents";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { GET_BOOKS_DATA_LIST_FOR_KEYWORD_REQUEST } from "./reducers";

const Main = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: GET_BOOKS_DATA_LIST_FOR_KEYWORD_REQUEST,
      data: {
        query: " ",
        sort: null,
        page: 1,
        size: 10,
        target: null,
      },
    });
  }, []);
  return (
    <>
      <Header></Header>
      <Contents
        hasSearchBar={true}
        pageIndex={null}
        path={null}
        likeMode={false}
      ></Contents>
    </>
  );
};

export default Main;

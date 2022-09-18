import { useParams } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { GET_BOOKS_DATA_LIST_FOR_KEYWORD_REQUEST } from "../../../../reducers";
import Header from "../../../../components/Header";
import Contents from "../../../../components/Contents";

const Search = () => {
  const params = useParams();
  const { target, query, page } = params;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: GET_BOOKS_DATA_LIST_FOR_KEYWORD_REQUEST,
      data: {
        query: query,
        sort: null,
        page: page,
        size: 10,
        target: target,
      },
    });
  }, [dispatch, page, params, query, target]);
  return (
    <>
      <Header></Header>
      <Contents
        hasSearchBar={true}
        pageIndex={page ? +page : null}
        likeMode={false}
        path={`/search/${target}/${query}/`}
      ></Contents>
    </>
  );
};

export default Search;

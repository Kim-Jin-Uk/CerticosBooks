import Header from "../components/Header";
import React from "react";
import Contents from "../components/Contents";
import { useParams } from "react-router-dom";

const Own = () => {
  const params = useParams();
  const { page } = params;
  return (
    <>
      <Header></Header>
      <Contents
        hasSearchBar={false}
        pageIndex={page ? +page : null}
        path={`/own/`}
        likeMode={true}
      ></Contents>
      <div></div>
    </>
  );
};

export default Own;

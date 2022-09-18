import Header from "./components/Header";
import React from "react";
import styled from "styled-components";

const ErrorDiv = styled.div`
  text-align: center;
  margin-top: 20px;
  font-size: 30px;
  font-weight: 500;
`;
const NotFound = () => {
  return (
    <>
      <Header></Header>
      <ErrorDiv style={{ fontWeight: 700, fontSize: 40 }}>404 Error</ErrorDiv>
      <ErrorDiv>해당하는 페이지가 없습니다.</ErrorDiv>
      <ErrorDiv>메뉴바를 통해 다른페이지로 이동해 주세요.</ErrorDiv>
    </>
  );
};
export default NotFound;

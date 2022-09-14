import React from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  position: absolute;
`;
const Header = () => {
  return (
    <Wrapper>
      <h1>CERTICOS BOOKS</h1>
      <ol>
        <li>도서 검색</li>
        <li>내가 찜한 책</li>
      </ol>
    </Wrapper>
  );
};
export default Header;

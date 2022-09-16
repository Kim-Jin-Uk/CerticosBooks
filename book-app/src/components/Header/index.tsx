import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  position: absolute;
  top: 0;
  text-align: center;
  color: #353c49;
  > h1 {
    display: inline-block;
    margin-left: 160px;
    margin-right: 400px;
    font-weight: 700;
    font-size: 24px;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }
  > nav {
    display: inline-block;
    font-weight: 500;
    font-size: 20px;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    > span {
      margin-right: 56px;
      display: inline-block;
      > a {
        text-decoration: none;
        color: #353c49;
      }
      > div {
        position: relative;
        top: 2.33px;
        width: 100%;
        height: 1px;
        background: #4880ee;
      }
    }
  }
`;
const Header = (props: { selectMenu: string }) => {
  return (
    <Wrapper>
      <h1>CERTICOS BOOKS</h1>
      <nav>
        <span>
          <Link to={"/"}>도서 검색</Link>
          {props.selectMenu === "search" && <div></div>}
        </span>
        <span>
          <Link to={"/own"}>내가 찜한 책</Link>
          {props.selectMenu === "own" && <div></div>}
        </span>
      </nav>
    </Wrapper>
  );
};
export default Header;

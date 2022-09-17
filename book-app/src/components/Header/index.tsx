import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  top: 0;
  color: #353c49;
  > h1 {
    width: 207px;
    display: inline-block;
    font-weight: 700;
    font-size: 24px;
    position: absolute;
    left: 160px;
    top: 24px;
  }
  > nav {
    width: 100%;
    margin: 24px 0 0;
    padding: 0 calc(50% - 480px);
    display: inline-block;
    font-weight: 500;
    font-size: 20px;
    text-align: center;
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
const Header = () => {
  const location = useLocation();
  const [selectMenu, setSelectMenu] = useState("search");
  useEffect(() => {
    if (
      location.pathname === "/" ||
      location.pathname.split("/")[1] === "search"
    ) {
      setSelectMenu("search");
    } else {
      setSelectMenu("own");
    }
  }, [location]);
  return (
    <Wrapper>
      <h1>CERTICOS BOOKS</h1>
      <nav>
        <span>
          <Link to={"/"}>도서 검색</Link>
          {selectMenu === "search" && <div></div>}
        </span>
        <span>
          <Link to={"/own/1"}>내가 찜한 책</Link>
          {selectMenu === "own" && <div></div>}
        </span>
      </nav>
    </Wrapper>
  );
};
export default Header;

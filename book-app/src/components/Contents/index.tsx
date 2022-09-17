import styled from "styled-components";
import SearchBox from "../SearchBox";
import NullData from "../NullData";
import { bookData } from "../../types/bookData";
import BookData from "../BookData";
import { useDispatch, useSelector } from "react-redux";
import { RootState, SET_LIKES_DATA } from "../../reducers";
import BottomNav from "../BottomNav";
import ErrorData from "../NullData/error";
import { useEffect } from "react";
const Wrapper = styled.div`
  height: 100%;
  width: 960px;
  margin: 80px auto;
  color: #353c49;
  > h2 {
    font-weight: 700;
    font-size: 22px;
    line-height: 24px;
    color: #1a1e27;
  }
`;
const Title = styled.div`
  margin-top: 25px;
  > span {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #353c49;
  }
`;
const Contents = (props: {
  hasSearchBar: boolean;
  pageIndex: number | null;
  path: string | null;
  likeMode: boolean;
}) => {
  const {
    booksDataList,
    likesDataList,
    booksPageableCount,
    getBooksDataListForKeywordSuccess,
  } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: SET_LIKES_DATA });
  }, []);
  return (
    <Wrapper>
      <h2>{props.hasSearchBar ? "도서 검색" : "내가 찜한 책"}</h2>
      {props.hasSearchBar && <SearchBox></SearchBox>}
      <Title>
        <span>{props.hasSearchBar ? "도서 검색 결과" : "찜한 책"} 총 </span>
        <span style={{ color: "#4880EE" }}>
          {props.likeMode ? likesDataList.length : booksPageableCount}
        </span>
        <span>건</span>
      </Title>
      {!props.likeMode ? (
        booksDataList.length ? (
          booksDataList.map((book: bookData, i) => (
            <BookData key={`${book.isbn}-${i}`} bookData={book}></BookData>
          ))
        ) : getBooksDataListForKeywordSuccess ? (
          <NullData></NullData>
        ) : (
          <ErrorData></ErrorData>
        )
      ) : props.pageIndex !== null &&
        likesDataList.length > (props.pageIndex - 1) * 10 ? (
        likesDataList
          .slice((props.pageIndex - 1) * 10, props.pageIndex * 10)
          .map((book: bookData, i) => (
            <BookData key={`${book.isbn}-${i}`} bookData={book}></BookData>
          ))
      ) : (
        <NullData></NullData>
      )}
      {!props.likeMode && booksDataList.length !== 0 && props.pageIndex && (
        <BottomNav
          pageIndex={props.pageIndex}
          path={props.path}
          likeMode={props.likeMode}
        ></BottomNav>
      )}
      {props.likeMode && likesDataList.length !== 0 && props.pageIndex && (
        <BottomNav
          pageIndex={props.pageIndex}
          path={props.path}
          likeMode={props.likeMode}
        ></BottomNav>
      )}
    </Wrapper>
  );
};

export default Contents;

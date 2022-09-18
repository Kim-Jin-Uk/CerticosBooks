import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers";
import Item from "./item";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Wrapper = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 60px;
`;
const BottomNav = (props: {
  pageIndex: number;
  path: string | null;
  likeMode: boolean;
}) => {
  const { booksPageableCount, likesDataList } = useSelector(
    (state: RootState) => state
  );
  const [maxPageNum, setMaxPageNum] = useState(0);
  const pageNum = props.pageIndex;
  const navigate = useNavigate();

  useEffect(() => {
    setMaxPageNum(
      Math.ceil(
        (props.likeMode ? likesDataList.length : booksPageableCount) / 10
      )
    );
  }, [booksPageableCount, likesDataList, props.likeMode]);

  const onClickItem = useCallback(
    (num: number) => {
      navigate(`${props.path}${num}`);
    },
    [navigate, props.path]
  );

  return (
    <Wrapper>
      <Item
        value={null}
        isPressAble={true}
        isActive={false}
        isPrev={true}
        isNext={false}
        onClickItem={() => {
          onClickItem(Math.max(1, pageNum - 1));
        }}
      ></Item>
      {pageNum > 4 && (
        <Item
          value={"···"}
          isPressAble={false}
          isActive={false}
          isPrev={false}
          isNext={false}
          onClickItem={null}
        ></Item>
      )}
      {new Array(pageNum - 4 > 0 ? 3 : pageNum - 1).fill(1).map((v, i) => {
        return (
          <Item
            key={`left${i}`}
            value={(
              pageNum -
              (pageNum - 4 > 0 ? 3 : pageNum - 1) +
              i
            ).toString()}
            isPressAble={true}
            isActive={false}
            isPrev={false}
            isNext={false}
            onClickItem={() => {
              onClickItem(pageNum - (pageNum - 4 > 0 ? 3 : pageNum - 1) + i);
            }}
          ></Item>
        );
      })}
      <Item
        value={pageNum.toString()}
        isPressAble={true}
        isActive={true}
        isPrev={false}
        isNext={false}
        onClickItem={() => {
          onClickItem(pageNum);
        }}
      ></Item>
      {new Array(
        maxPageNum - pageNum - 4 > 0
          ? 3
          : maxPageNum - pageNum > 0
          ? maxPageNum - pageNum
          : 0
      )
        .fill(1)
        .map((v, i) => {
          return (
            <Item
              key={`right${i}`}
              value={(pageNum + 1 + i).toString()}
              isPressAble={true}
              isActive={false}
              isPrev={false}
              isNext={false}
              onClickItem={() => {
                onClickItem(pageNum + 1 + i);
              }}
            ></Item>
          );
        })}
      {pageNum < maxPageNum - 3 && (
        <Item
          value={"···"}
          isPressAble={false}
          isActive={false}
          isPrev={false}
          isNext={false}
          onClickItem={null}
        ></Item>
      )}
      <Item
        value={null}
        isPressAble={true}
        isActive={false}
        isPrev={false}
        isNext={true}
        onClickItem={() => {
          onClickItem(Math.min(pageNum + 1, maxPageNum));
        }}
      ></Item>
    </Wrapper>
  );
};

export default BottomNav;

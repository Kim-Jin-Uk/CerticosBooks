import styled, { css } from "styled-components";
import defaultIcon from "../../images/detail_icon_default.svg";
import activeIcon from "../../images/detail_icon_active.svg";
import activeHeart from "../../images/heart_active.svg";
import defaultHeart from "../../images/heart_default.svg";
import { bookData } from "../../types/bookData";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DEL_LIKES_DATA, PUSH_LIKES_DATA, RootState } from "../../reducers";
const Wrapper = styled.div<{ isOpen: boolean }>`
  width: 960px;
  position: relative;
  ${(props) =>
    props.isOpen
      ? css`
          height: 342px;
        `
      : css`
          height: 98px;
        `}
  border-bottom: 1px solid #d2d6da;
  display: flex;
  margin: 8px auto 0;
  color: #353c49;
  line-height: 100%;
`;
const Img = styled.img<{ isOpen: boolean }>`
  margin: 25px 0 0 46px;
  width: ${(props) => (props.isOpen ? `${(48 * 278) / 68}px` : "48px")};
  height: ${(props) => (props.isOpen ? "278px" : "68px")};
  transition: 0.25s;
`;
const Heart = styled.div<{ isOpen: boolean }>`
  position: absolute;
  width: ${(props) => (props.isOpen ? "26px" : "13px")};
  height: ${(props) => (props.isOpen ? "26px" : "13px")};
  top: ${(props) => (props.isOpen ? "28px" : "25px")};
  left: ${(props) => (props.isOpen ? "212px" : "78px")};
  cursor: pointer;
  transition: 0.25s;
  > img {
    width: 100%;
    height: 100%;
  }
`;
const Title = styled.div<{ isOpen: boolean }>`
  max-width: ${(props) => (props.isOpen ? "400px" : "300px")};
  margin: 50px 0 0 48px;
  font-weight: 700;
  font-size: 18px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 19px;
`;
const Author = styled.div`
  margin: 50px 0 0 16px;
  font-weight: 500;
  font-size: 14px;
  color: #6d7582;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 19px;
`;
const Price = styled.span`
  margin: 50px 0 0 auto;
  font-weight: 700;
  font-size: 18px;
`;
const BuyButton = styled.button<{ isOpen: boolean }>`
  width: ${(props) => (props.isOpen ? "240px" : "115px")};
  min-width: 115px;
  height: 48px;
  margin: 35px 0 0 56px;
  ${(props) =>
    props.isOpen &&
    css`
      position: absolute;
      bottom: 40px;
      right: 16px;
    `}
  font-weight: 500;
  font-size: 16px;
  color: #ffffff;
  background: #4880ee;
  border-radius: 8px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: 0.25s;
  &:hover {
    background: #82aeff;
    transition: 0.25s;
  }
`;
const DetailButton = styled.button<{ isOpen: boolean }>`
  width: 115px;
  min-width: 115px;
  height: 48px;
  margin: 35px 16px 0 ${(props) => (props.isOpen ? "auto" : "8px")};
  font-weight: 500;
  font-size: 16px;
  color: #6d7582;
  background: #f2f4f6;
  border-radius: 8px;
  outline: none;
  border: none;
  cursor: pointer;
  &:hover {
    background: #e3e3e3;
    transition: 0.25s;
  }
  img {
    width: 14px;
    height: 8px;
    margin-left: 5px;
  }
`;
const InfoTitle = styled.span`
  position: absolute;
  top: 85px;
  left: 293px;
  font-weight: 700;
  font-size: 14px;
`;
const Info = styled.p`
  position: absolute;
  top: 123px;
  left: 293px;
  width: 360px;
  font-weight: 500;
  font-size: 10px;
  line-height: 16px;
`;
const PriceWrapper = styled.div`
  position: absolute;
  bottom: 115px;
  right: 16px;
`;
const PriceInfo = styled.div`
  width: 37px;
  display: inline-block;
  font-weight: 500;
  font-size: 10px;
  color: #8d94a0;
  margin: 0 8px;
  text-align: right;
  position: relative;
  top: -2px;
`;
const OriginPrice = styled.div`
  display: inline-block;
  min-width: 76px;
  font-weight: 350;
  font-size: 18px;
  text-decoration-line: line-through;
`;
const DiscountPrice = styled.div`
  display: inline-block;
  min-width: 76px;
  font-weight: 700;
  font-size: 18px;
`;
const BookData = (props: { bookData: bookData }) => {
  const formatter = Intl.NumberFormat("kr-KO");
  const [isOpen, setIsOpen] = useState(false);
  const [isLike, setIsLike] = useState(false);
  const dispatch = useDispatch();

  const { likesDataHashMap } = useSelector((state: RootState) => state);
  const onChangeIsOpen = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);
  const onChangeIsLike = useCallback(() => {
    if (!isLike) {
      dispatch({
        type: PUSH_LIKES_DATA,
        data: props.bookData,
      });
    } else {
      dispatch({
        type: DEL_LIKES_DATA,
        data: props.bookData.isbn,
      });
    }
    setIsLike(!isLike);
  }, [isLike, props.bookData]);
  useEffect(() => {
    if (likesDataHashMap[props.bookData.isbn]) {
      setIsLike(true);
    } else {
      setIsLike(false);
    }
  }, [likesDataHashMap]);
  return (
    <Wrapper isOpen={isOpen}>
      <Img
        isOpen={isOpen}
        src={
          props.bookData.thumbnail ||
          "https://search1.kakaocdn.net/thumb/C116x164.q85/?fname=http://search1.daumcdn.net/search/statics/common/img/noimg/4grid.png"
        }
      />
      <Heart onClick={onChangeIsLike} isOpen={isOpen}>
        <img src={isLike ? activeHeart : defaultHeart}></img>
      </Heart>

      <Title isOpen={isOpen}>{props.bookData.title}</Title>
      <Author>{props.bookData.authors.join(", ")}</Author>
      {!isOpen && (
        <Price>
          {props.bookData.price
            ? formatter.format(
                props.bookData.sale_price !== -1
                  ? props.bookData.sale_price
                  : props.bookData.price
              )
            : "판매처 없음"}
        </Price>
      )}
      <BuyButton
        isOpen={isOpen}
        onClick={() => window.open(props.bookData.url, "_blank")}
      >
        <div>구매하기</div>
      </BuyButton>
      <DetailButton isOpen={isOpen} onClick={onChangeIsOpen}>
        <div>
          상세보기 <img src={isOpen ? activeIcon : defaultIcon}></img>
        </div>
      </DetailButton>
      {isOpen && (
        <>
          <InfoTitle>책 소개</InfoTitle>
          <Info>{props.bookData.contents}</Info>
          <PriceWrapper>
            <div>
              {props.bookData.price > 0 && <PriceInfo>원가</PriceInfo>}
              {props.bookData.sale_price !== -1 ? (
                <OriginPrice>{`${formatter.format(
                  props.bookData.price
                )}원`}</OriginPrice>
              ) : (
                <DiscountPrice>
                  {props.bookData.price > 0
                    ? `${formatter.format(props.bookData.price)}원`
                    : "판매처 없음"}
                </DiscountPrice>
              )}
            </div>

            {props.bookData.sale_price !== -1 && (
              <div style={{ marginTop: 8 }}>
                <PriceInfo>할인가</PriceInfo>
                <DiscountPrice>{`${formatter.format(
                  props.bookData.sale_price
                )}원`}</DiscountPrice>
              </div>
            )}
          </PriceWrapper>
        </>
      )}
    </Wrapper>
  );
};

export default BookData;

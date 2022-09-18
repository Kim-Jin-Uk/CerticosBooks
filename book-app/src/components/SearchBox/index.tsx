import styled from "styled-components";
import searchIcon from "../../images/search_icon.svg";
import closeIcon from "../../images/close_icon.svg";
import defaultIcon from "../../images/detail_icon_default.svg";
import activeIcon from "../../images/detail_icon_active.svg";
import { ChangeEvent, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { defaultObject } from "../../utils/types";
import { DefaultButton, DefaultInput } from "../../styles/styledUtils";
const Wrapper = styled.div`
  position: relative;
  width: 100%;
  margin-top: 16px;
`;
const MainForm = styled.form`
  width: 480px;
  height: 50px;
  border-radius: 25px;
  background: #f2f4f6;
  padding: 10px;
  display: inline-block;
  > button {
    margin: 5px;
    cursor: pointer;
    background: none;
    border: none;
  }
`;
const MainInput = styled(DefaultInput)`
  margin: 0 0 0 16px;
  padding: 0;
  height: 100%;
  width: calc(100% - 46px);
  font-size: 16px;
`;
const MainButton = styled(DefaultButton)`
  margin-left: 16px;
  width: 72px;
  height: 35.27px;
  color: #8d94a0;
  border: 1px solid #8d94a0;
  background: none;
  font-size: 14px;
  vertical-align: top;
  top: 7.37px;
  position: relative;
  padding: 10px 0;
  transition: 0.25s;
  &:hover {
    color: #5b5f67;
    border: 1px solid #5b5f67;
    transition: 0.25s;
  }
`;
const DetailForm = styled.form`
  position: absolute;
  width: 360px;
  height: 160px;
  background: #ffffff;
  box-shadow: 0 4px 14px 6px rgba(151, 151, 151, 0.15);
  border-radius: 8px;
  left: 352px;
  top: 59px;
  z-index: 1;
`;
const CloseButton = styled.img`
  position: absolute;
  width: 12px;
  height: 12px;
  top: 12px;
  right: 12px;
  cursor: pointer;
`;
const SearchArea = styled.div`
  margin: 44px 24px 32px;
`;
const DropDownWrapper = styled.div`
  position: relative;
  width: 100px;
  height: 28px;
  display: inline-block;
  border-bottom: 1px solid #d2d6da;
  margin-right: 4px;
  cursor: pointer;
  > span {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-weight: 700;
    font-size: 14px;
    color: #353c49;
    margin-left: 8px;
  }
  > img {
    position: absolute;
    right: 9.5px;
    top: 50%;
    transform: translateY(-50%);
  }
`;
const DropDown = styled.div`
  width: 100px;
  position: absolute;
  background: #ffffff;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
  top: 35px;
  > div {
    width: 100%;
    height: 30px;
    padding: 4px 8px;
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    color: #8d94a0;
    transition: 0.25s;
    &:hover {
      background: #ebecef;
      transition: 0.25s;
    }
  }
`;
const DetailInput = styled(DefaultInput)`
  width: 208px;
  height: 28px;
  border-bottom: 1px solid #4880ee;
  font-size: 14px;
  line-height: 22px;
  padding: 5px 8px;
`;
const DetailButton = styled(DefaultButton)`
  width: 100%;
  height: 36px;
  margin-top: 16px;
  background: #4880ee;
  font-size: 14px;
  line-height: 22px;
  color: #ffffff;
  transition: 0.25s;
  &:hover {
    background: #82aeff;
    transition: 0.25s;
  }
`;
const SearchBox = () => {
  const [mainKeyword, setMainKeyword] = useState("");
  const [detailKeyword, setDetailKeyword] = useState("");
  const [isDetailMode, setIsDetailMode] = useState(false);
  const [isDropdownMode, setIsDropdownMode] = useState(false);
  const [searchType, setSearchType] = useState("title");
  const typesList = ["title", "person", "publisher"];
  const typeToText: defaultObject = {
    title: "제목",
    person: "저자명",
    publisher: "출판사",
  };
  const navigate = useNavigate();

  const onChangeDetailMode = useCallback(() => {
    setIsDetailMode(!isDetailMode);
  }, [isDetailMode]);
  const onChangeDropdownMode = useCallback(() => {
    setIsDropdownMode(!isDropdownMode);
  }, [isDropdownMode]);
  const onChangeSearchType = useCallback((key: string) => {
    setSearchType(key);
  }, []);
  const onChangeMainKeyword = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      setMainKeyword(e.target.value);
      setDetailKeyword("");
    },
    []
  );
  const onChangeDetailKeyword = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      setDetailKeyword(e.target.value);
      setMainKeyword("");
    },
    []
  );
  const onSubmitFormForMainKeyword = useCallback(() => {
    if (!mainKeyword) return alert("검색어를 입력해주세요");
    navigate(`/search/title/${mainKeyword}/1`);
  }, [mainKeyword, navigate]);
  const onSubmitFormForDetailKeyword = useCallback(() => {
    if (!detailKeyword) return alert("검색어를 입력해주세요");
    navigate(`/search/${searchType}/${detailKeyword}/1`);
  }, [detailKeyword, navigate, searchType]);
  return (
    <Wrapper>
      <MainForm onSubmit={onSubmitFormForMainKeyword}>
        <button>
          <img src={searchIcon} alt="검색 하기"></img>
        </button>
        <MainInput
          placeholder={"검색어를 입력하세요"}
          value={mainKeyword}
          onChange={onChangeMainKeyword}
        ></MainInput>
      </MainForm>
      <MainButton onClick={onChangeDetailMode}>상세 검색</MainButton>
      {isDetailMode && (
        <DetailForm>
          <CloseButton
            onClick={onChangeDetailMode}
            src={closeIcon}
            alt="폼 닫기"
          ></CloseButton>
          <SearchArea>
            <DropDownWrapper onClick={onChangeDropdownMode}>
              <span>{typeToText[searchType]}</span>
              <img
                src={isDropdownMode ? activeIcon : defaultIcon}
                alt={isDropdownMode ? "접기" : "펼치기"}
              />
              {isDropdownMode && (
                <DropDown>
                  {typesList
                    .filter((v) => v !== searchType)
                    .map((v) => (
                      <div key={v} onClick={() => onChangeSearchType(v)}>
                        {typeToText[v]}
                      </div>
                    ))}
                </DropDown>
              )}
            </DropDownWrapper>
            <DetailInput
              placeholder={"검색어 입력"}
              value={detailKeyword}
              onChange={onChangeDetailKeyword}
              type="text"
            />
            <DetailButton onClick={onSubmitFormForDetailKeyword}>
              검색하기
            </DetailButton>
          </SearchArea>
        </DetailForm>
      )}
    </Wrapper>
  );
};

export default SearchBox;

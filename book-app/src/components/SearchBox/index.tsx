import styled from "styled-components";
import searchIcon from "../../images/search_icon.svg";
const Wrapper = styled.div`
  width: 100%;
  margin-top: 16px;
`;
const Input = styled.div`
  width: 480px;
  height: 50px;
  border-radius: 25px;
  background: #f2f4f6;
  padding: 10px;
  display: inline-block;
  > img {
    margin: 5px;
    cursor: pointer;
  }
  > input {
    display: inline-block;
    margin: 0 0 0 16px;
    padding: 0;
    height: 100%;
    vertical-align: top;
    width: calc(100% - 46px);
    border: none;
    background: none;
    outline: none;
    font-weight: 500;
    font-size: 16px;
  }
`;
const Button = styled.button`
  margin-left: 16px;
  width: 72px;
  height: 35.27px;
  color: #8d94a0;
  border: 1px solid #8d94a0;
  background: none;
  border-radius: 8px;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  vertical-align: top;
  top: 7.37px;
  position: relative;
  padding: 10px 0;
`;
const SearchBox = () => {
  return (
    <Wrapper>
      <Input>
        <img src={searchIcon}></img>
        <input placeholder={"검색어를 입력하세요"}></input>
      </Input>
      <Button>상세 검색</Button>
    </Wrapper>
  );
};

export default SearchBox;

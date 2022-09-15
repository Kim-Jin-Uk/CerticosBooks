import styled from "styled-components";
import SearchBox from "../SearchBox";
const Wrapper = styled.div`
  height: 100%;
  margin: 160px 480px;
  color: #353c49;
  > h2 {
    font-weight: 700;
    font-size: 22px;
    line-height: 24px;
    color: #1a1e27;
  }
`;
const Contents = (props: { hasSearchBar: boolean; title: string }) => {
  return (
    <Wrapper>
      <h2>{props.title}</h2>
      {props.hasSearchBar && <SearchBox></SearchBox>}
      <div></div>
    </Wrapper>
  );
};

export default Contents;

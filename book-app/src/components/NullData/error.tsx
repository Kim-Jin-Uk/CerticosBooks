import styled from "styled-components";
import nullIcon from "../../images/null_data_icon.svg";
const Icon = styled.img`
  margin: 120px auto 24px;
  display: block;
`;
const Text = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  color: #6d7582;
  margin: 0 auto;
  text-align: center;
  display: block;
`;
const ErrorData = () => {
  return (
    <>
      <Icon src={nullIcon}></Icon>
      <Text>검색중 오류가 발생하였습니다. 다시 시도해 주세요</Text>
    </>
  );
};

export default ErrorData;

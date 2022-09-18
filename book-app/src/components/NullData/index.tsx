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
const NullData = (props: { contents: string }) => {
  return (
    <>
      <Icon src={nullIcon}></Icon>
      <Text>{props.contents}</Text>
    </>
  );
};

export default NullData;

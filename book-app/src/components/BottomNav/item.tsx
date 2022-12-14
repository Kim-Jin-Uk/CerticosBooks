import styled, { css } from "styled-components";
import nextIcon from "../../images/next_icon.svg";
import prevIcon from "../../images/prev_icon.svg";
import { DefaultButton } from "../../styles/styledUtils";
const Button = styled(DefaultButton)<{
  isActive: boolean;
  isPressAble: boolean;
}>`
  margin: 4px;
  width: 24px;
  height: 24px;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: top;
  font-size: 16px;
  ${(props) =>
    props.isActive
      ? css`
          color: #ffffff;
          background: #4880ee;
        `
      : css`
          color: #8d94a0;
          background: none;
          ${props.isPressAble
            ? css`
                border: 1px solid #dadada;
                &:hover {
                  background: #e3e3e3;
                  transition: 0.25s;
                }
                transition: 0.25s;
              `
            : css`
                cursor: default;
              `}
        `}
`;
const Item = (props: {
  isActive: boolean;
  isNext: boolean;
  isPrev: boolean;
  isPressAble: boolean;
  value: string | null;
  onClickItem: (() => void) | null;
}) => {
  return (
    <Button
      isActive={props.isActive}
      isPressAble={props.isPressAble}
      onClick={
        props.onClickItem
          ? props.onClickItem
          : () => {
              return;
            }
      }
    >
      {props.isNext || props.isPrev ? (
        <img
          src={props.isPrev ? prevIcon : nextIcon}
          alt={props.isPrev ? "이전 페이지로 이동" : "다음 페이지로 이동"}
        />
      ) : (
        <div>{props.value}</div>
      )}
    </Button>
  );
};

export default Item;

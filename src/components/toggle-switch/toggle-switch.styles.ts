import styled from "styled-components";

export const CheckBoxWrapper = styled.div`
  position: relative;
`;

export const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 18px;
  border-radius: 15px;
  background: #808080;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 19px;
    height: 19px;
    margin: 0;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;

export const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 18px;
  &:checked + ${CheckBoxLabel} {
    background: #0096ff;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 19px;
      height: 19px;
      margin-left: 26px;
      transition: 0.2s;
    }
  }
`;

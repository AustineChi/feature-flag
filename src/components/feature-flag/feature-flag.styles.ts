import styled from "styled-components";

type FlagWrapperInterface = {
  width?: string;
  height?: string;
};

export const Container = styled.div`
  width: 300px;
  padding: 4px;
  background-color: #151515;
`;

export const FlagWrapper = styled.div<FlagWrapperInterface>`
    width:  ${(props) => (props.width ? `${props.width}` : "100%")};
    height: ${(props) => (props.height ? `${props.height}` : "58px")};
    display: flex;
    align-items: center;
    justify-content space-between;
    padding: 0 0.5rem;
    &> div{
      display: flex;
      align-items: center;

    }
    & > p {
        text-transform: uppercase;
        font-size: 12px;
        font-weight: 500
    }
`;

export const Caret = styled.button`
  width: 30px;
  height: 30px;
  background: inherit;
  border: none;
  // cursor: pointer;
  & > span {
    color: #fff;
    font-size: 14px;
    font-weight: 700;
  }
`;

export const Content = styled.div`
  widith: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0.5rem;
`;

export const Select = styled.select`
  width: 70px;
  background-color: #000;
  color: #fff;
  border: none;
  outline: none;
  padding: 4px;
`;

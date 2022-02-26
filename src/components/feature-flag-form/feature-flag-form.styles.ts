import styled from "styled-components";

type SectionWrapperInterface = {
  displayType?: string;
};

export const Form = styled.form`
  padding: 2rem;
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
`;

export const CategoryTitle = styled.h4`
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  padding: 1rem 0;
  color: #fff;
`;

export const SectionWrapper = styled.div<SectionWrapperInterface>`
  color: #fff;
  ${(props) =>
    props.displayType === "grid" &&
    `
    width: 100%;
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(3, 1fr);
    justify-content: space-evenly
`}
  ${(props) =>
    props.displayType === "vertical" &&
    `
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    border: 3px solid #282828;
    margin-right: 1rem
`}
`;

export const SubmitButtonWrapper = styled.div`
  width: 100%;
  flex: 0 0 100%;
  margin: 2rem 0;
`;

export const SubmitButton = styled.button`
  width: 250px;
  border: none;
  height: 50px;
  outline: none;
  cursor: pointer;
`;

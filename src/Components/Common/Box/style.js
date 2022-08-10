import styled from "styled-components";

export const StyledBox = styled.section`
  position: relative;
  display: grid;
  justify-items: center;
  grid-row-start: 4;
  grid-row-end: 5;
`;
export const BoxContainer = styled.section`
  width: 62%;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.body};
  box-shadow:  ${({ theme }) => theme.colors.shadow};
  display: grid;
  grid-template-rows: 53% 47%;
  height: 295px;
  position: absolute;
  top: 45%;
  border-radius: 15px;
  @media (max-width: ${({ theme }) => theme.tab}) {
    width: 106%;
    height: 78%;
    top: 52%;
    border-radius: 35px;
  }
`;
export const Txt = styled.p`
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 1;
  grid-row-end: 2;
  display: grid;
  justify-items: center;
  align-content: end;
  font-size: 2.18vw;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  height: 71%;
  @media (max-width: ${({ theme }) => theme.tab}) {
    font-size: 4.75vw;
  }
`;

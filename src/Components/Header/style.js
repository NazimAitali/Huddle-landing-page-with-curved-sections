import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.header};
  height: 758px;
  font-family: "Open Sans", sans-serif;
  @media (max-width: ${({ theme }) => theme.tab}) {
    height: 1434px;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    height: 1200px;
  }
`;

export const HeaderContainer = styled.section`
  width: max-content;
  max-width: 100%;
  margin: 0 auto;
  height: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 14% 86%;
  @media (max-width: ${({ theme }) => theme.tab}) {
    grid-template-columns: 46vw 46vw;
  }
`;
export const About = styled.section`
  background-color: red;
  display: grid;
  grid-template-columns: 45vw;
  grid-template-rows: 290px 125px 130px;
`;

export const Img = styled.section`
  background-color: aqua;
  display: grid;
  grid-template-columns: 45vw;
  grid-template-rows: 290px 125px 130px;
`;

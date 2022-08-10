import styled from "styled-components";

export const StyledMain = styled.main`
  height: 2012px;
  font-family: "Open Sans", sans-serif;
  @media (max-width: ${({ theme }) => theme.tab}) {
    height: 3668px;
  }
`;
export const MainContainer = styled.section`
  width: max-content;
  max-width: 100%;
  margin: 0 auto;
  height: 100%;
  display: grid;
  grid-template-columns: 89vw;
  grid-template-rows: 501px 506px 508px 351px;
  padding-top: 145px;
  @media (max-width: ${({ theme }) => theme.tab}) {
    padding-top: 0px;
    grid-template-rows: 1100px 1059px 1059px 450px;
  }
`;

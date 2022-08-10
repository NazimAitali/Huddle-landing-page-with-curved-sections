import styled from "styled-components";

export const StyledAbout = styled.section`
  grid-column-start: 1;
  grid-column-end: 3;
  display: grid;
  grid-template-columns: 40vw 48vw;
  grid-template-rows: 602px;
  height: 92%;
  @media (max-width: ${({ theme }) => theme.tab}) {
    grid-template-rows: 56% 53%;
    grid-template-columns: 100%;
  }
`;
export const AboutContent = styled.section`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 49% 19.5% 31.5%;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 4;

  @media (max-width: ${({ theme }) => theme.tab}) {
    grid-template-rows: 32% 45% 23%;
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 1;
    grid-row-end: 2;
  }
  h1 {
    width: 80%;
    display: grid;
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 1;
    grid-row-end: 1;
    align-content: end;
    font-size: 2.73vw;
    font-weight: 700;
    line-height: 65px;
    font-family: "Poppins", sans-serif;
    @media (max-width: ${({ theme }) => theme.tab}) {
      font-size: 6.3vw;
      margin: 0px auto;
      justify-items: center;
      width: 76%;
      text-align: center;
      line-height: 69px;
    }
  }
  p {
    display: grid;
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 2;
    grid-row-end: 3;
    align-content: end;
    font-size: 1.24vw;
    font-weight: 400;
    line-height: 29px;
    width: 90%;
    height: 96%;
    @media (max-width: ${({ theme }) => theme.tab}) {
      margin: 0px auto;
      width: 87%;
      font-size: 4.25vw;
      font-weight: 400;
      text-align: center;
      line-height: 48px;
      height: 100%;
    }
  }
`;
export const AboutImg = styled.section`
  display: grid;
  grid-template-columns: 100%;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 4;
  justify-items: baseline;
  align-content: center;
  @media (max-width: ${({ theme }) => theme.tab}) {
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 2;
    grid-row-end: 3;
    justify-items: center;
    align-content: center;
  }
  img {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 1;
    width: 99.5%;
    margin-top: 49px;
    @media (max-width: ${({ theme }) => theme.tab}) {
      width: 87%;
      margin-top: 33px;
    }
  }
`;

import styled from "styled-components";

export const StyledCards = styled.section`
  width: 100%;
  display: grid;
  ${({ position }) => position || null}
  height: 100%;
  @media (max-width: ${({ theme }) => theme.tab}) {
    justify-items: center;
    align-content: center;
    margin-top: ${({ margin }) => margin};
  }
`;
export const Card = styled.section`
  width: 95%;
  background-color: ${({ theme }) => theme.colors.body};
  margin: auto auto;
  height: 92%;
  border-radius: 15px;
  box-shadow: ${({ theme }) => theme.colors.shadow};
  margin-top: 29px;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: auto;
  direction: ${({ revers }) => revers || "unset"};
  @media (max-width: ${({ theme }) => theme.tab}) {
    width: 100%;
    height: 980px;
    border-radius: 25px;
    margin-top: 0px;
    grid-template-columns: 100%;
    grid-template-rows: 51% 49%;
    justify-items: center;
  }
`;
export const CardImg = styled.section`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 1;
  display: grid;
  justify-items: ${({ justify }) => justify || "end"};
  align-content: ${({ align }) => align || "center"};
  width: 95%;
  @media (max-width: ${({ theme }) => theme.tab}) {
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 1;
    grid-row-end: 2;
    justify-items: ${({ justify }) => justify || "center"};
    align-content: ${({ align }) => align || "end"};
  }
  img {
    width: 70%;
    @media (max-width: ${({ theme }) => theme.tab}) {
      width: 74%;
    }
  }
`;
export const CardTxt = styled.section`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 1;
  display: grid;
  justify-items: end;
  align-content: center;
  grid-template-rows: 43% 57%;
  @media (max-width: ${({ theme }) => theme.tab}) {
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 2;
    grid-row-end: 3;
    grid-template-rows: 33% 66%;
    justify-items: center;
  }
`;
export const H2 = styled.h2`
  grid-row-start: 1;
  grid-row-end: 2;
  display: grid;
  justify-items: ${({ justify }) => justify || "baseline"};
  align-content: end;
  width: 80.5%;
  font-size: 1.92vw;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  @media (max-width: ${({ theme }) => theme.tab}) {
    font-size: 5.4vw;
    justify-items: ${({ justify }) => justify || "center"};
    align-content: end;
  }
`;
export const Txt = styled.p`
  grid-row-start: 2;
  grid-row-end: 3;
  display: grid;
  justify-items: baseline;
  align-content: center;
  width: 80.5%;
  font-size: 1.235vw;
  font-weight: 400;
  line-height: 28px;
  margin: ${({ margin }) => margin || "unset"};
  text-align: ${({ align }) => align || "unset"};
  height: 47%;
  font-family: "Open Sans", sans-serif;
  @media (max-width: ${({ theme }) => theme.tab}) {
    align-content: end;
    font-size: 3.75vw;
    line-height: 42px;
    margin-bottom: 0;
    text-align: center;
    height: 79%;
    width: 78%;
  }
`;

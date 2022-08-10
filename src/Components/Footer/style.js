import styled from "styled-components";

export const StyledFooter = styled.footer`
  color: ${({ theme }) => theme.colors.body};
  background-color: ${({ theme }) => theme.colors.footer};
  overflow: hidden;
  height: 591px;
  font-family: "Open Sans", sans-serif;
  @media (max-width: ${({ theme }) => theme.tab}) {
    height: 1703px;
  }
`;

export const FooterContainer = styled.section`
  width: max-content;
  max-width: 100%;
  margin: 0 auto;
  width: 1366px;
  height: 100%;
  display: grid;
  grid-template-columns: 36% 42% 22%;
  grid-template-rows: 42.8% 42.13% 14.7%;
  @media (max-width: ${({ theme }) => theme.tab}) {
    grid-template-columns: 100%;
    grid-template-rows: 19.5% 25% 35% 21%;
  }
`;
export const Contact = styled.section`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 44% 28% 28%;
  height: 100%;
  width: 100%;
  @media (max-width: ${({ theme }) => theme.tab}) {
    grid-template-columns: 15% 85%;
    grid-template-rows: 56% 22% 22%;
    width: 100%;
  }
`;
export const ContactTxt = styled.section`
  ${({ grid }) => grid}
  display: grid;
  grid-template-columns: 19% 81%;
  grid-template-rows: 100%;
  @media (max-width: ${({ theme }) => theme.tab}) {
    grid-template-columns: 15% 85%;
  }
  :nth-child(1) {
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 1;
    grid-row-end: 2;
    @media (max-width: ${({ theme }) => theme.tab}) {
      grid-column-start: 1;
      grid-column-end: 3;
      grid-row-start: 1;
      grid-row-end: 2;
    }
    section {
      display: grid;
      width: 69%;
      height: 90%;
      align-content: center;
      justify-items: end;
      @media (max-width: ${({ theme }) => theme.tab}) {
        width: 82%;
        height: 70%;
        justify-items: center;
      }
      img {
        width: 24%;
        @media (max-width: ${({ theme }) => theme.tab}) {
          width: 30%;
        }
      }
    }
    p {
      display: grid;
      align-content: end;
      width: 95%;
      font-size: 1.1vw;
      line-height: 26px;
      @media (max-width: ${({ theme }) => theme.tab}) {
        width: 93%;
        font-size: 4.25vw;
        line-height: 48px;
      }
    }
  }
  :nth-child(2) {
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 2;
    grid-row-end: 3;
    @media (max-width: ${({ theme }) => theme.tab}) {
      grid-column-start: 1;
      grid-column-end: 3;
      grid-row-start: 2;
      grid-row-end: 3;
    }
    section {
      display: grid;
      width: 77%;
      height: 100%;
      align-content: center;
      justify-items: end;
      @media (max-width: ${({ theme }) => theme.tab}) {
        width: 100%;
        height: 98%;
        align-content: end;
        justify-items: center;
      }
      img {
        width: 26%;
        @media (max-width: ${({ theme }) => theme.tab}) {
          width: 33%;
        }
      }
    }
    p {
      display: grid;
      align-content: center;
      width: 95%;
      font-size: 1.1vw;
      line-height: 26px;
      @media (max-width: ${({ theme }) => theme.tab}) {
        align-content: end;
        width: 95%;
        font-size: 4.25vw;
        height: 91%;
      }
    }
  }
  :nth-child(3) {
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 3;
    grid-row-end: 4;
    @media (max-width: ${({ theme }) => theme.tab}) {
      grid-column-start: 1;
      grid-column-end: 3;
      grid-row-start: 3;
      grid-row-end: 4;
    }
    section {
      display: grid;
      width: 78%;
      height: 53%;
      align-content: center;
      justify-items: end;
      @media (max-width: ${({ theme }) => theme.tab}) {
        width: 100%;
        height: 100%;
        align-content: end;
        justify-items: center;
      }
      img {
        width: 27%;
        @media (max-width: ${({ theme }) => theme.tab}) {
          width: 37%;
        }
      }
    }
    p {
      display: grid;
      align-content: center;
      width: 95%;
      font-size: 1.1vw;
      line-height: 26px;
      height: 50%;
      @media (max-width: ${({ theme }) => theme.tab}) {
        align-content: end;
        width: 95%;
        font-size: 4.25vw;
        height: 97%;
      }
    }
  }
`;
export const Menu = styled.section`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 100%;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
  @media (max-width: ${({ theme }) => theme.tab}) {
    grid-template-columns: 100%;
    grid-template-rows: 56% 44%;
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 3;
    grid-row-end: 4;
  }
`;
export const List = styled.section`
  :nth-child(1) {
    display: grid;
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
    justify-items: end;
    @media (max-width: ${({ theme }) => theme.tab}) {
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 1;
      grid-row-end: 2;
      justify-items: baseline;
    }
  }
  :nth-child(2) {
    display: grid;
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
    justify-items: center;
    @media (max-width: ${({ theme }) => theme.tab}) {
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 2;
      grid-row-end: 3;
      justify-items: baseline;
    }
  }
  ul {
    height: 55%;
    font-size: 1.22vw;
    width: 67%;
    display: grid;
    justify-items: baseline;
    align-items: center;
    margin-top: 24px;
    @media (max-width: ${({ theme }) => theme.tab}) {
      font-size: 4.7vw;
      grid-template-columns: 100%;
      grid-template-rows: 48% 26% 26%;
      margin-top: 0px;
      margin-left: 34px;
      align-items: end;
      height: 100%;
    }

    li {
      cursor: pointer;
    }
  }
`;
export const Social = styled.section`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 46px 46px 49px;
  grid-template-rows: 69px;
  width: 88%;
  height: 54%;
  align-content: center;
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;
  @media (max-width: ${({ theme }) => theme.tab}) {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 4;
    grid-row-end: 5;
    grid-template-columns: 34% 30% 36%;
    grid-template-rows: 55% 36%;
    width: 36%;
    height: 49%;
    align-content: end;
    justify-items: center;
    font-size: 4.4vw;
  }
  span {
    grid-row-start: 2;
    grid-row-end: 3;
    width: 33px;
    height: 33px;
    border: 1px solid;
    border-radius: 50px;
    display: grid;
    justify-items: center;
    align-content: center;
    cursor: pointer;
    &:hover {
      color: ${({ theme }) => theme.colors.btn};
    }
    @media (max-width: ${({ theme }) => theme.tab}) {
      width: 60px;
      height: 60px;
    }
  }
`;
export const Copyright = styled.section`
  max-width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-rows: 30px;
  width: 98%;
  height: 50%;
  align-items: center;
  justify-content: end;
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 3;
  grid-row-end: 4;
  font-family: "Poppins", sans-serif;
  @media (max-width: ${({ theme }) => theme.tab}) {
    width: 62%;
    height: 71%;
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 4;
    grid-row-end: 5;
    align-content: end;
    justify-items: baseline;
  }
  p {
    width: 100%;
    font-size: 0.82vw;
    @media (max-width: ${({ theme }) => theme.tab}) {
      font-size: 2.82vw;
    }
  }
`;

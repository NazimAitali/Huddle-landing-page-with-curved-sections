import styled from "styled-components";

export const StyledLogo = styled.section`
  width: ${({ widthParent }) => widthParent || "100%"};
  height: ${({ height }) => height || "100%"};
  display: grid;
  justify-items: ${({ justify }) => justify || "baseline"};
  align-content: end;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  margin-left: ${({ marginLeft }) => marginLeft || "unset"};
 
`;
export const Img = styled.img`
  width: ${({ width }) => width};
  margin-bottom: ${({ marginB }) => marginB};
`;

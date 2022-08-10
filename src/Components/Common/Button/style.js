import styled from "styled-components";

export const StyledButton = styled.section`
  width: 100%;
  height: ${({ height }) => height || "104px"};
  display: grid;
  ${({ grid }) => grid || null}
  ${({ position }) => position || "justify-items: end; align-content: end;"}
  @media (max-width: ${({ theme }) => theme.tab}) {
    margin-top: 0px;
  }
`;
export const Btn = styled.button`
  padding: ${({ padding }) => padding || "1vw 4.4vw"};
  border-radius: 50px;
  font-family: inherit;
  font-size: ${({ fontSize }) => fontSize || "2vw"};
  font-weight: 600;
  border: unset;
  background-color: ${({ bg, theme }) => bg || theme.colors.body};
  color: ${({ color }) => color || "#000"};
  cursor: pointer;
  &:hover {
    opacity: .7;
    background-color: ${({ hover, theme }) => hover || theme.colors.body};
  }
`;

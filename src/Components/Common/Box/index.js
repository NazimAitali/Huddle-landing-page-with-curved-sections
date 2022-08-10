import Button from "../Button";
import { StyledBox, BoxContainer, Txt } from "./style";
import { theme } from "../../styles/Theme";
import { GlobalSwitch } from "../../../function";
const Box = ({ screen }) => {
  return (
    <StyledBox>
      <BoxContainer>
        <Txt>Ready To Build Your Community?</Txt>
        <Button
          title="Get Started For Free"
          grid="grid-column-start: 1;
          grid-column-end: 1;
          grid-row-start: 2;
          grid-row-end: 3;"
          position="justify-items: center;
          align-content: baseline;
          "
          height="unset"
          margin="10px"
          padding={GlobalSwitch(
            "change",
            screen,
            960,
            "1.8vw 7vw;",
            "3.5vw 14vw;"
         
          )}
          fontSize={GlobalSwitch("change", screen, 960, "1.35vw;", "2.6vw;")}
          hover={theme.colors.hover}
          bg={theme.colors.btn}
          color={theme.colors.body}
        />
      </BoxContainer>
    </StyledBox>
  );
};
export default Box;

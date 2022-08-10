import About from "../About";
import Button from "../Common/Button";
import Logo from "../Common/Logo";
import logo from "../../assets/logo.svg";
import { StyledHeader, HeaderContainer } from "./style";
import { GlobalSwitch } from "../../function";
const Header = ({ screen }) => {
  return (
    <StyledHeader>
      <HeaderContainer>
        <Logo
          logo={logo}
          width={GlobalSwitch("change", screen, 960, "31%;", "61%;")}
          marginB={GlobalSwitch("change", screen, 960, "13px;", "15px;")}
          height={GlobalSwitch("change", screen, 960, "100%;", "52%;")}
        />
        <Button
          title="Try It Free"
          padding={GlobalSwitch(
            "change",
            screen,
            960,
            "1vw 4.3vw",
            "1.0vw 6.2vw"
          )}
          fontSize={GlobalSwitch("change", screen, 960, " 1.02vw;", "2.7vw;")}
          height={GlobalSwitch("change", screen, 960, "95%;", "93px;")}
        />
        <About screen={screen} />
      </HeaderContainer>
    </StyledHeader>
  );
};
export default Header;

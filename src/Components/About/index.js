import Button from "../Common/Button";
import img from "../../assets/illustration-mockups.svg";
import { StyledAbout, AboutContent, AboutImg } from "./style";
import { theme } from "../../Components/styles/Theme";
import { GlobalSwitch } from "../../function";
const About = ({ screen }) => {
  return (
    <StyledAbout>
      <AboutContent>
        <h1>Build The Community Your Fans Will Love</h1>
        <p>
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </p>
        <Button
          title="Get Started For Free"
          grid="grid-column-start: 1;
                grid-column-end: 1;
                grid-row-start: 3;
                grid-row-end: 4;"
          position={GlobalSwitch(
            "change",
            screen,
            960,
            "justify-items: baseline;align-content: end;",
            "justify-items: center;align-content: end;"
          )}
          height={GlobalSwitch("change", screen, 960, "45%;", "138px;")}
          margin="30px"
          padding={GlobalSwitch(
            "change",
            screen,
            960,
            "1.1vw 4.3vw",
            "2.8vw 15.8vw"
          )}
          fontSize={GlobalSwitch("change", screen, 960, "1.05vw", "3.2vw")}
          hover={theme.colors.hover}
          bg={theme.colors.btn}
          color={theme.colors.body}
        />
      </AboutContent>
      <AboutImg>
        <img src={img} alt="" />
      </AboutImg>{" "}
    </StyledAbout>
  );
};
export default About;

import Logo from "../Common/Logo";
import logo from "../../assets/logo_white.svg";
import data from "../../content";
import { RiTwitterFill, RiInstagramLine } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { GlobalSwitch } from "../../function";
import {
  StyledFooter,
  FooterContainer,
  Contact,
  ContactTxt,
  Menu,
  Social,
  Copyright,
  List,
} from "./style";
import content from "../../content";
const Footer = ({ screen }) => {
  return (
    <StyledFooter>
      <FooterContainer>
        <Logo
          logo={logo}
          grid="grid-column-start: 1;
          grid-column-end: 2;
          grid-row-start: 1;
          grid-row-end: 2;"
          width={GlobalSwitch("change", screen, 960, "83%;", "91%;")}
          widthParent={GlobalSwitch("change", screen, 960, "62%;", "49%;")}
          height="100%"
          justify="end"
          marginB={GlobalSwitch("change", screen, 960, "10px;", "unset")}
        />
        <Contact>
          {data.footerContact.map((elem, i) => (
            <ContactTxt key={i}>
              <section>
                <img
                  src={`${process.env.PUBLIC_URL}${elem.icon.title}`}
                  alt="icon"
                />
              </section>

              <p>{elem.text.title}</p>
            </ContactTxt>
          ))}
        </Contact>
        <Menu>
          {" "}
          {content.footerMenu.map((elem, i) => (
            <List key={i}>
              <ul>
                <li>{elem.li.one}</li>
                <li>{elem.li.two}</li>
                <li>{elem.li.three}</li>
              </ul>
            </List>
          ))}
        </Menu>
        <Social>
          <span>
            <FaFacebookF />
          </span>
          <span>
            <RiTwitterFill />
          </span>
          <span>
            <RiInstagramLine />
          </span>
        </Social>
        <Copyright>
          <p>© Copyright 2018 Huddle. All rights reserved.</p>
        </Copyright>
      </FooterContainer>
    </StyledFooter>
  );
};
export default Footer;

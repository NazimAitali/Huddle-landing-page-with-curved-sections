import { StyledLogo, Img } from "./style";
const Logo = ({
  logo,
  grid,
  width,
  marginLeft,
  widthParent,
  justify,
  marginB,
  height,
}) => {
  return (
    <StyledLogo
      grid={grid}
      marginLeft={marginLeft}
      widthParent={widthParent}
      justify={justify}
      height={height}
    >
      <Img src={logo} alt="logo" width={width} marginB={marginB} />
    </StyledLogo>
  );
};
export default Logo;

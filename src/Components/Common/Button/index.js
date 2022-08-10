import { StyledButton, Btn } from "./style";
const Button = ({
  title,
  grid,
  position,
  margin,
  padding,
  hover,
  bg,
  color,fontSize,height
}) => {
  return (
    <StyledButton grid={grid} position={position} margin={margin}height={height}>
      <Btn padding={padding} bg={bg} color={color} hover={hover}fontSize={fontSize}>
        {title}
      </Btn>
    </StyledButton>
  );
};
export default Button;

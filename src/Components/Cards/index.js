import { StyledCards, Card, CardImg, CardTxt, H2, Txt } from "./style";
import { gridFunction, marginFunction } from "../../function";
import data from "../../content";
const Cards = () => {
  return data.content.map((elem, i) => (
    <StyledCards key={i} position={gridFunction(i)} margin={marginFunction(i)}>
      <Card revers={i === 1 && "rtl"}>
        <CardTxt>
          <H2 justify={i === 1 && "center"}>{elem.title}</H2>
          <Txt align={i === 1 && "end"} margin={i === 1 && "0 auto"}>
            {elem.body}
          </Txt>
        </CardTxt>
        <CardImg justify={i === 1 && "center"} align={i === 1 && "center"}>
          <img src={`${process.env.PUBLIC_URL}${elem.image}`} alt="img-main" />
        </CardImg>
      </Card>
    </StyledCards>
  ));
};
export default Cards;

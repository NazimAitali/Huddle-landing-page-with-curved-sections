import Cards from "../Cards";
import Box from "../Common/Box";
import { StyledMain, MainContainer } from "./style";
const Main = ({screen}) => {
  return (
    <StyledMain>
      <MainContainer>
        <Cards />
        <Box screen={screen}/>
      </MainContainer>
    </StyledMain>
  );
};
export default Main;

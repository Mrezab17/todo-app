import Header from "./components/Header";
import { StyledContainer } from "./components/styled/Container.styled";
import { StyledContainerInternal } from "./components/styled/ContainerInternal.style";

function App() {
  return (
    <StyledContainer>
      <StyledContainerInternal>
        <Header />
      </StyledContainerInternal>
    </StyledContainer>
  );
}

export default App;

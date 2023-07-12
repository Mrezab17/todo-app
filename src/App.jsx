import Header from "./components/Header";
import { StyledContainer } from "./components/styled/Container.styled";
import { StyledContainerInternal } from "./components/styled/ContainerInternal.style";
import NewTask from "./components/NewTask";

function App() {
  return (
    <StyledContainer>
      <StyledContainerInternal>
        <Header />
        <NewTask />
      </StyledContainerInternal>
    </StyledContainer>
  );
}

export default App;

import "./App.css";
import Header from "./components/Header";
import { StyledContainer } from "./components/styled/Container.styled";

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

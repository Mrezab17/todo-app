import Header from "./components/Header";
import { StyledContainer } from "./components/styled/Container.styled";
import { StyledContainerInternal } from "./components/styled/ContainerInternal.style";
import NewTask from "./components/NewTask";
import TaskMonitor from "./components/TaskMonitor";
import GlobalStyles from "./components/styled/Global.styled";

function App() {
  let tasks = [];
  return (
    <StyledContainer>
      <StyledContainerInternal>
        <Header />
        <NewTask />
        <TaskMonitor number={tasks.length} />
      </StyledContainerInternal>
    </StyledContainer>
  );
}

export default App;

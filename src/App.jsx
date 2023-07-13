import Header from "./components/Header";
import { StyledContainer } from "./components/styled/Container.styled";
import { StyledContainerInternal } from "./components/styled/ContainerInternal.style";
import NewTask from "./components/NewTask";
import TaskList from "./components/TaskList";
import TaskMonitor from "./components/TaskMonitor";

import GlobalStyled from "./components/styled/Global.styled";

function App() {
  let tasks = [
    { key: 1, title: "Breakfast" },
    { key: 2, title: "Lunch" },
    { key: 3, title: "Dinner" },
  ];
  return (
    <StyledContainer>
      <StyledContainerInternal>
        <GlobalStyled />
        <Header />
        <NewTask />
        <TaskList list={tasks} />
        <TaskMonitor number={tasks.length} />
      </StyledContainerInternal>
    </StyledContainer>
  );
}

export default App;

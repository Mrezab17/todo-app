import Header from "./components/Header";
import { StyledContainerInternal } from "./components/styled/ContainerInternal.style";
import NewTask from "./components/NewTask";
import TaskList from "./components/TaskList";
import TaskMonitor from "./components/TaskMonitor";

import GlobalStyled from "./components/styled/Global.styled";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const addHandler = (task) => {
    const newTask = { key: Math.random(), title: task };
    setTasks([...tasks, newTask]);
  };
  const removeHandler = (key) => {
    const newTasks = tasks.filter((task) => task.key != key);
    setTasks(newTasks);
  };
  const removeAllHandler = () => {
    setTasks([]);
  };
  return (
    <div className="h-screen color-blue">
      <StyledContainerInternal>
        <GlobalStyled />
        <Header />
        <NewTask onAdd={addHandler} />
        <TaskList list={tasks} onRemove={removeHandler} />
        <TaskMonitor number={tasks.length} onRemoveAll={removeAllHandler} />
      </StyledContainerInternal>
    </div>
  );
}

export default App;

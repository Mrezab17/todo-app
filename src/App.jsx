import Header from "./components/Header";
import NewTask from "./components/NewTask";
import TaskList from "./components/TaskList";
import TaskMonitor from "./components/TaskMonitor";

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
    <div className="h-screen w-screen bg-gradient-to-b from-cyan-500 to-blue-500 flex items-center justify-center">
      <div className="h-3/4 w-4/12 bg-white rounded justify-center pl-5 ">
        <Header />
        <NewTask onAdd={addHandler} />
        <TaskList list={tasks} onRemove={removeHandler} />
        <TaskMonitor number={tasks.length} onRemoveAll={removeAllHandler} />
      </div>
    </div>
  );
}

export default App;

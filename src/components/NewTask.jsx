import { useState } from "react";

const NewTask = (props) => {
  const [newTask, setNewTask] = useState("");
  const changeHandler = (e) => {
    const changed = e.target.value;
    setNewTask(changed);
  };
  const clickHandler = () => {
    if (newTask !== "") {
      props.onAdd(newTask);
      setNewTask("");
    }
  };

  return (
    <div className="w-full h-12 items-center flex space-x-0.5 text-xl">
      <input
        className="bg-gray w-9/12 h-full pl-5"
        type="text"
        placeholder="Add Your New Task"
        required
        value={newTask}
        onChange={(e) => {
          changeHandler(e);
        }}
      />
      <button
        className="bg-purple-700/100 text-white w-12 h-full items-center justify-center text-2xl rounded"
        onClick={clickHandler}
      >
        +
      </button>
    </div>
  );
};

export default NewTask;

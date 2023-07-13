import { StyledRow } from "./styled/Row.styled";
import { StyledInput } from "./styled/Input.styled";
import { StyledButtonPlus } from "./styled/ButtonPlus.styled";
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
    <StyledRow>
      <StyledInput
        type="text"
        placeholder="Add Your New Task"
        required
        value={newTask}
        onChange={(e) => {
          changeHandler(e);
        }}
      />
      <StyledButtonPlus onClick={clickHandler}>+</StyledButtonPlus>
    </StyledRow>
  );
};

export default NewTask;

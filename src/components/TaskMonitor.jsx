import { StyledRow } from "./styled/Row.styled";
import { StyledLabel } from "./styled/Label.styled";
import { StyledButtonDelete } from "./styled/ButtonDelete.styled";

const TaskMonitor = (props) => {
  return (
    <StyledRow>
      <StyledLabel>You Have {props.number} Pending tasks</StyledLabel>
      <StyledButtonDelete onClick={props.onRemoveAll}>
        Clear All
      </StyledButtonDelete>
    </StyledRow>
  );
};

export default TaskMonitor;

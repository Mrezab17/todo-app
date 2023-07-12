import { StyledRow } from "./styled/Row.styled";
import { StyledInput } from "./styled/Input.styled";
import { StyledButtonPlus } from "./styled/ButtonPlus.styled";

const NewTask = () => {
  return (
    <StyledRow>
      <StyledInput type="text" placeholder="Add Your New Task" />
      <StyledButtonPlus>+</StyledButtonPlus>
    </StyledRow>
  );
};

export default NewTask;

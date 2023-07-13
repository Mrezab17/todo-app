import { useState } from "react";

import { StyledRow } from "./styled/Row.styled";
import { StyledTittle } from "./styled/Title.styled";
import { StyledButtonRemove } from "./styled/ButtonRemove.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const Task = (props) => {
  const [isHovered, setHovered] = useState(false);
  const handleMouseEnter = () => {
    setHovered(true);
  };
  const handleMouseLeave = () => {
    setHovered(false);
  };
  return (
    <StyledRow>
      <StyledTittle
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {props.title}
      </StyledTittle>
      <StyledButtonRemove
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        hover={isHovered ? 0.8 : 0}
      >
        <FontAwesomeIcon icon={faTrashCan} />
      </StyledButtonRemove>
    </StyledRow>
  );
};

export default Task;

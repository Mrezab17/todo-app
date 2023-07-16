import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const Task = (props) => {
  const [isHovered, setHovered] = useState(0);
  const handleMouseEnter = () => {
    setHovered(500);
  };
  const handleMouseLeave = () => {
    setHovered(0);
  };
  const remove = () => {
    props.onRemove(props.listId);
  };
  return (
    <div className="w-full h-12 items-center flex text-xl">
      <label
        className="bg-gray-400 w-9/12 h-full pl-5 items-center flex "
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {props.title}
      </label>
      <button
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={remove}
        className={`bg-red-${isHovered} text-white w-12 h-full items-center justify-center text-2xl`}
      >
        <FontAwesomeIcon icon={faTrashCan} />
      </button>
    </div>
  );
};

export default Task;

import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const Task = (props) => {
  const [bgColor, setBgColor] = useState("bg-gray-300");
  const [txtColor, setTxtColor] = useState("text-gray-300");
  const handleMouseEnter = () => {
    setBgColor("bg-red-500");
    setTxtColor("text-white");
  };
  const handleMouseLeave = () => {
    setBgColor("bg-gray-300");
    setTxtColor("text-gray-300");
  };
  const remove = () => {
    props.onRemove(props.listId);
  };
  return (
    <div className="w-full h-12 items-center flex text-xl">
      <label
        className="bg-gray-300 w-9/12 h-full pl-5 items-center flex "
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {props.title}
      </label>
      <button
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={remove}
        className={`${
          bgColor + " " + txtColor
        } w-12 h-full items-center justify-center text-2xl`}
      >
        <FontAwesomeIcon icon={faTrashCan} />
      </button>
    </div>
  );
};

export default Task;

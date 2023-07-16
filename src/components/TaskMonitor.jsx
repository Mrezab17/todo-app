const TaskMonitor = (props) => {
  return (
    <div className="w-full h-12 items-center flex space-x-0.5 text-xl">
      <label className="bg-white w-8/12 h-full pl-5 items-center flex ">
        You Have {props.number} Pending tasks
      </label>
      <button
        className="bg-purple-700/100 text-white w-24 h-full items-center justify-center text-xl rounded"
        onClick={props.onRemoveAll}
      >
        Clear All
      </button>
    </div>
  );
};

export default TaskMonitor;

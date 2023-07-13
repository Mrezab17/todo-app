import Task from "./Task";

const TaskList = (props) => {
  const tasks = props.list.map((task) => (
    <Task key={task.key} title={task.title} />
  ));
  return <>{tasks}</>;
};

export default TaskList;

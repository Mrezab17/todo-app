import Task from "./Task";

const TaskList = (props) => {
  const tasks = props.list.map((task) => (
    <Task
      onRemove={props.onRemove}
      key={task.key}
      listId={task.key}
      title={task.title}
    />
  ));
  return <>{tasks}</>;
};

export default TaskList;

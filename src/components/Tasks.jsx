import { PropTypes } from "prop-types";
import Task from "./Task";
const Tasks = ({ tasks, onDelete }) => {
  return (
    <>
      {tasks.map((task) => (
        <div key={task.id}>
          <Task key={task.id} task={task} onDelete={onDelete} />
        </div>
      ))}
    </>
  );
};

Tasks.propTypes = {
  tasks: PropTypes.array,
  onDelete: PropTypes.func,
};

export default Tasks;

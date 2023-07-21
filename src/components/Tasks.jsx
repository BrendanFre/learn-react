import { PropTypes } from "prop-types";
import Task from "./Task";
const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      {tasks.map((task, index) => (
        <div key={task.id}>
          <Task
            key={index}
            task={task}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        </div>
      ))}
    </>
  );
};

Tasks.propTypes = {
  tasks: PropTypes.array,
  onDelete: PropTypes.func,
  onToggle: PropTypes.func,
};

export default Tasks;

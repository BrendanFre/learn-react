import { PropTypes } from "prop-types";
const Tasks = ({ tasks }) => {
  return (
    <>
      {tasks.map((task) => (
        <div key={task.id}>
          <h3>{task.text}</h3>
          <p>Date Due: {task.day}</p>
          <p>{task.reminder}</p>
        </div>
      ))}
    </>
  );
};

Tasks.propTypes = {
  tasks: PropTypes.array,
};

export default Tasks;

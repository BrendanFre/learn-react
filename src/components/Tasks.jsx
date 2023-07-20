import { useState } from "react";

const Tasks = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Get ready",
      day: "2nd April 2023",
      reminder: true,
    },
    {
      id: 2,
      text: "Shopping",
      day: "2nd March 2023",
      reminder: false,
    },
    {
      id: 3,
      text: "Party",
      day: "1st June 2023",
      reminder: true,
    },
  ]);

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

export default Tasks;

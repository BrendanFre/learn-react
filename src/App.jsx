import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import PropTypes from "prop-types";

function App() {
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
  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id == id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        <h3>No Tasks</h3>
      )}
    </div>
  );
}

App.propTypes = {
  tasks: PropTypes.object,
  setTasks: PropTypes.func,
};

export default App;
